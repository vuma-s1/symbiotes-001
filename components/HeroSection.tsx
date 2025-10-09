"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

const Stars = () => {
  const starsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const createStars = () => {
      const starsContainer = starsRef.current
      if (!starsContainer) return

      // Clear existing stars
      starsContainer.innerHTML = ""

      // Create multiple stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div")
        star.className = "star"

        // Random position
        const x = Math.random() * 100
        const y = Math.random() * 100

        // Random size
        const size = Math.random() * 2 + 1

        // Random animation duration
        const duration = Math.random() * 3 + 2

        star.style.cssText = `
          position: absolute;
          left: ${x}%;
          top: ${y}%;
          width: ${size}px;
          height: ${size}px;
          background: white;
          border-radius: 50%;
          opacity: ${Math.random()};
          animation: twinkle ${duration}s infinite;
        `

        starsContainer.appendChild(star)
      }
    }

    createStars()
  }, [])

  return (
    <div
      ref={starsRef}
      className="absolute inset-0 w-full h-full z-10"
      style={{
        background: "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.37) 100%)",
      }}
    />
  )
}

const HeroSection = () => {
  const rocketRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef(null)
  const pointsRef = useRef<(HTMLDivElement | null)[]>([])

  // 6 progressive points with meaningful data
  const points = [
    { id: 1, title: "Ideate", description: "Capture and validate the raw idea." },
    { id: 2, title: "Define", description: "Clarify problem, audience, and market." },
    { id: 3, title: "Build", description: "Design and develop the MVP or core offer." },
    { id: 4, title: "Position", description: "Craft brand, messaging, and digital presence." },
    { id: 5, title: "Launch", description: "Execute go-to-market and run campaigns." },
    { id: 6, title: "Scale", description: "Refine, optimize, and expand growth systems." },
  ]

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Handle responsive positioning
    const updateCardPositions = () => {
      const pointEls = pointsRef.current.filter(Boolean) as HTMLDivElement[]
      const isMobile = window.innerWidth < 640 // sm breakpoint
      pointEls.forEach((el, i) => {
        const isLeft = i < 3
        let leftPosition = isMobile 
          ? (isLeft ? "10%" : "90%") 
          : (isLeft ? "30%" : "70%")

        // Nudge the right-side third card (index 5: "Scale") further left for clear visibility
        if (!isLeft && i === 5) {
          leftPosition = isMobile ? "90%" : "62%"
        }

        gsap.set(el, { left: leftPosition })
      })
    }

    const ctx = gsap.context(() => {
      const section = sectionRef.current as unknown as HTMLElement | null
      const rocket = rocketRef.current as HTMLDivElement | null
      const pointEls = pointsRef.current.filter(Boolean) as HTMLDivElement[]

      if (!section || !rocket) return

      // Update positions on load
      updateCardPositions()

      gsap.set(rocket, {
        xPercent: -50,
        yPercent: 0,
        y: 0,
        force3D: true,
        willChange: "transform",
        transformOrigin: "50% 50%",
      })
      gsap.set(pointEls, { autoAlpha: 0, x: 0, y: 0, scale: 0.95, willChange: "transform, opacity" })

      const steps = 6 // transitions between 7 positions (0..6)
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }, // smooth ease-out per step
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=5000", // longer scroll distance for bigger gaps between steps
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          snap: {
            snapTo: (progress) => Math.round(progress * steps) / steps, // 7 major steps
            duration: 0.25,
            ease: "power1.out",
          },
        },
      })

      // Generate 7 vertical positions from bottom (0) to top (-100vh) evenly spaced
      for (let i = 1; i <= steps; i++) {
        const yTo = `${-((100 / steps) * i)}vh` // -16.66..vh per step, ample and visible
        tl.to(rocket, { y: yTo, duration: 1 }) // one "unit" per step for consistent snapping
      }

      // Keep milestone reveals aligned with step progression, left/right sides
      pointEls.forEach((el, i) => {
        const isLeft = i < 3 // Left side: first 3 cards, Right side: last 3 cards
        const isMobile = window.innerWidth < 640
        const fromX = isLeft ? (isMobile ? -20 : -40) : (isMobile ? 20 : 40)
        // Animate from left/right sides with mobile-optimized distances
        tl.fromTo(
          el,
          { autoAlpha: 0, x: fromX, y: 10, scale: 0.95 },
          { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.6)" },
          i + 0.2,
        )
      })
    })

    // Add resize listener
    window.addEventListener('resize', updateCardPositions)

    return () => {
      window.removeEventListener('resize', updateCardPositions)
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden h-screen flex items-center justify-center py-6 px-4 sm:py-20 sm:px-8"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://cdn.prod.website-files.com/680743e828b8ecbf8967ab43/68161aa76bddfb2447bf7340_hero-bg.webp"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Stars Background */}
      <Stars />

      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px z-10">
        <div className="h-full w-px bg-white/20" />
      </div>

      {/* Rocket Image */}
      <div
        ref={rocketRef}
        className="absolute left-1/2 top-[60%] w-[230px] sm:w-[250px] md:w-[350px] lg:w-[400px] xl:w-[500px] z-20"
      >
        <Image
          src="https://cdn.prod.website-files.com/680743e828b8ecbf8967ab43/68161c1f03b8cabc97b89c31_rocket.webp"
          alt="Rocket"
          width={500}
          height={500}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* 6 Cards - Left and Right Sides */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {points.map((point, index) => {
          // Left side: Ideate (0), Define (1), Build (2)
          // Right side: Position (3), Launch (4), Scale (5)
          const isLeft = index < 3
          const sideIndex = isLeft ? index : index - 3
          // Default desktop-aligned left positions to make effect immediately visible
          let initialLeft = isLeft ? "30%" : "70%"
          if (!isLeft && index === 5) {
            initialLeft = typeof window !== 'undefined' && window.innerWidth < 640 ? "90%" : "62%"
          }
          
          return (
            <div
              key={point.id}
              ref={(el) => {
                pointsRef.current[index] = el
              }}
              className="absolute"
              style={{
                left: initialLeft,
                top: `${35 + sideIndex * 12}vh`,
                transform: "translate(-50%, -50%)",
                willChange: "transform, opacity",
              }}
              data-mobile-left={isLeft ? "10%" : "90%"}
              data-desktop-left={isLeft ? "30%" : "70%"}
            >
              <div className="bg-black/80 backdrop-blur-sm border border-[#d0ed01] rounded-lg p-2 sm:p-3 min-w-[120px] sm:min-w-[160px] max-w-[150px] sm:max-w-none text-center">
                <div className="w-2 h-2 bg-[#d0ed01] rounded-full mx-auto mb-1 sm:mb-2 animate-pulse"></div>
                <h3 className="text-xs sm:text-base font-semibold text-white mb-1">{point.title}</h3>
                <p className="text-xs text-gray-300 leading-tight">{point.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto mt-[70vh] sm:mt-[65vh]">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-accent text-transparent bg-clip-text leading-tight" style={{fontFamily: "'Neue Haas Display Bold', sans-serif"}}>
            The Launchpad for Your Ideas
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-6 text-gray-300 leading-tight" style={{fontFamily: "'Neue Haas Display Medium', sans-serif"}}>
            Build. Launch. Scale.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
