"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const HeroSection = () => {
  const rocketRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef(null)
  const pointsRef = useRef<(HTMLDivElement | null)[]>([])

  // 6 progressive points with meaningful data - sequential reveal one by one
  const points = [
    { id: 1, title: "Ideate", description: "Capture and Validate the raw idea.", order: 1 },
    { id: 2, title: "Define", description: "Clarify problem, audience & market", order: 2 },
    { id: 3, title: "Build", description: "Design & Develop the MVP or core offer", order: 3 },
    { id: 4, title: "Position", description: "Craft brand, messaging & digital presence", order: 4 },
    { id: 5, title: "Launch", description: "Execute go-to market & run campaigns", order: 5 },
    { id: 6, title: "Scale", description: "Refine, Optimize & expand growth systems", order: 6 },
  ]

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Handle responsive positioning
    const updateCardPositions = () => {
      const pointEls = pointsRef.current.filter(Boolean) as HTMLDivElement[]
      const isMobile = window.innerWidth < 640 // sm breakpoint

      // Desktop: slight variations for each card around the arcs
      // Mobile: tucked further to edges but still staggered for structure
      const desktopLefts = ["33%", "68%", "24%", "75%", "18%", "82%"] // [Ideate, Define, Build, Position, Launch, Scale]
      const mobileLefts = ["20%", "84%", "12%", "87%", "8%", "92%"]

      pointEls.forEach((el, i) => {
        const leftPosition =
          (isMobile ? mobileLefts[i] : desktopLefts[i]) ||
          (i < 3 ? (isMobile ? "10%" : "30%") : isMobile ? "90%" : "70%")
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
          end: "+=6000", // longer scroll distance for 6 individual steps
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

      // Generate 6 vertical positions from bottom (0) to top (-100vh) evenly spaced
      for (let i = 1; i <= steps; i++) {
        const yTo = `${-((100 / steps) * i)}vh` // -16.66..vh per step, ample and visible
        tl.to(rocket, { y: yTo, duration: 1 }) // one "unit" per step for consistent snapping
      }

      // Individual card reveals - one by one in sequence
      pointEls.forEach((el, i) => {
        const point = points[i]
        const isLeft = i % 2 === 0 // Alternating left/right: Ideate(left), Define(right), Build(left), Position(right), Launch(left), Scale(right)
        const isMobile = window.innerWidth < 640
        const fromX = isLeft ? (isMobile ? -20 : -40) : isMobile ? 20 : 40

        // Sequential reveal: each card appears individually based on its order
        const revealTime = (point.order - 1) * 1.0 + 0.2

        const origin = isLeft ? "left center" : "right center"

        // Consistent scaling for all cards
        const popScale = 1.2
        const settleScale = 1.0

        tl.fromTo(
          el,
          { autoAlpha: 0, x: fromX, y: 10, scaleX: 0.7, scaleY: 0.7, transformOrigin: origin },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scaleX: popScale,
            scaleY: popScale,
            duration: 0.8,
            ease: "back.out(1.7)",
            transformOrigin: origin,
          },
          revealTime,
        )

        tl.to(
          el,
          { scaleX: settleScale, scaleY: settleScale, duration: 0.25, ease: "power1.out", transformOrigin: origin },
          revealTime + 0.85,
        )
      })
    })

    // Add resize listener
    window.addEventListener("resize", updateCardPositions)

    return () => {
      window.removeEventListener("resize", updateCardPositions)
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden h-screen flex items-center justify-center py-6 px-4 sm:py-20 sm:px-8"
    >
      {/* Star Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/hero section/starbg.png"
          alt="Star Background"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* Arc Background */}
      <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 w-full h-full z-5">
        <img
          src="/images/hero section/arcbg.png"
          alt="Arc Background"
          className="w-full h-full object-contain object-center"
        />
      </div>

      {/* Rocket Image */}
      <div
        ref={rocketRef}
        className="absolute left-1/2 top-[60%] w-[230px] sm:w-[250px] md:w-[350px] lg:w-[400px] xl:w-[500px] z-20"
      >
        <img
          src="https://cdn.prod.website-files.com/680743e828b8ecbf8967ab43/68161c1f03b8cabc97b89c31_rocket.webp"
          alt="Rocket"
          className="w-full h-auto"
        />
      </div>

      {/* 6 Cards - Alternating Left and Right Sides */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {points.map((point, index) => {
          // Alternating: Ideate(left), Define(right), Build(left), Position(right), Launch(left), Scale(right)
          const isLeft = index % 2 === 0
          // Default desktop-aligned left positions to make effect immediately visible
          const isMobile = typeof window !== "undefined" && window.innerWidth < 640
          const desktopLefts = ["33%", "68%", "24%", "75%", "18%", "82%"] // [Ideate, Define, Build, Position, Launch, Scale]
          const mobileLefts = ["20%", "84%", "12%", "87%", "8%", "92%"]
          const initialLeft =
            (isMobile ? mobileLefts[index] : desktopLefts[index]) ||
            (isLeft ? (isMobile ? "10%" : "30%") : isMobile ? "90%" : "70%")

          // Sequential positioning from bottom to top:
          // Each card appears at a different height based on its order
          const topByOrder = isMobile
            ? `${72 - (point.order - 1) * 8}vh` // 72vh, 64vh, 56vh, 48vh, 40vh, 32vh
            : `${68 - (point.order - 1) * 8}vh` // 68vh, 60vh, 52vh, 44vh, 36vh, 28vh

          return (
            <div
              key={point.id}
              ref={(el) => {
                pointsRef.current[index] = el
              }}
              className="absolute"
              style={{
                left: initialLeft,
                top: topByOrder,
                transform: "translate(-50%, -50%)",
                willChange: "transform, opacity",
              }}
              data-mobile-left={isLeft ? "10%" : "90%"}
              data-desktop-left={isLeft ? "30%" : "70%"}
            >
              <div
                className="relative bg-[#1a2600cc] backdrop-blur-md border border-[#d0ed01]/30 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 min-w-[220px] sm:min-w-[260px] max-w-[240px] sm:max-w-none text-center shadow-xl"
                style={{
                  background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(208,237,1,0.2) 100%)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  boxShadow: "0 4px 32px 0 #d0ed0133",
                }}
              >
                {/* Star positioning based on alternating left/right pattern */}
                <img
                  src="/images/hero%20section/stars.png"
                  alt="Star"
                  className={`absolute w-36 h-36 opacity-90 ${
                    isLeft 
                      ? "-top-20 -left-16" // Left side cards
                      : "-top-20 -right-20" // Right side cards
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.log('Star image failed to load:', target.src);
                    target.style.display = 'none';
                  }}
                  onLoad={() => console.log('Star image loaded successfully')}
                />
                <h3
                  className="text-sm sm:text-base font-semibold text-white mb-1 leading-tight"
                  style={{ fontFamily: "'Neue Haas Display Medium', sans-serif" }}
                >
                  {point.title}
                </h3>
                <p
                  className="text-xs sm:text-sm font-light text-gray-300 leading-tight"
                  style={{ fontFamily: "'Neue Haas Display Light', sans-serif" }}
                >
                  {point.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto mt-[70vh] sm:mt-[65vh]">
        <div className="text-center">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-accent text-transparent bg-clip-text leading-tight"
            style={{ fontFamily: "'Neue Haas Display Bold', sans-serif" }}
          >
            The Launchpad for Your Ideas
          </h1>
          <h2
            className="text-lg sm:text-xl md:text-2xl font-medium mb-6 text-gray-300 leading-tight"
            style={{ fontFamily: "'Neue Haas Display Medium', sans-serif" }}
          >
            Build. Launch. Scale.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
