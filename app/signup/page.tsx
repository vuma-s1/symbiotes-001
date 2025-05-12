'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Eye, EyeOff } from 'lucide-react';

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just redirect to login
    router.push('/login');
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center px-2 py-12 sm:px-6 lg:px-8 pt-32 overflow-hidden">
      {/* Space star field background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
          {Array.from({ length: 120 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r={Math.random() * 1.2 + 0.3}
              fill="#fff"
              opacity={Math.random() * 0.7 + 0.3}
            />
          ))}
          {/* Pink Sun in the center */}
          <circle cx="50%" cy="50%" r="120" fill="#ff48c4" opacity="0.7" filter="url(#blurSun)" />
          {/* Planets around the sun */}
          <circle cx="30%" cy="35%" r="40" fill="#d0ed01" opacity="0.8" filter="url(#blur1)" />
          <circle cx="70%" cy="30%" r="30" fill="#6248ff" opacity="0.7" filter="url(#blur2)" />
          <circle cx="25%" cy="70%" r="25" fill="#00ffd0" opacity="0.7" filter="url(#blur3)" />
          <circle cx="80%" cy="75%" r="35" fill="#ffe156" opacity="0.7" filter="url(#blur4)" />
          <defs>
            <filter id="blurSun"><feGaussianBlur stdDeviation="40" /></filter>
            <filter id="blur1"><feGaussianBlur stdDeviation="8" /></filter>
            <filter id="blur2"><feGaussianBlur stdDeviation="6" /></filter>
            <filter id="blur3"><feGaussianBlur stdDeviation="5" /></filter>
            <filter id="blur4"><feGaussianBlur stdDeviation="7" /></filter>
          </defs>
        </svg>
      </div>
      {/* Modern blurred colorful blobs background (nebula effect) */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#d0ed01]/30 rounded-full filter blur-3xl opacity-70 z-0" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#6248ff]/30 rounded-full filter blur-2xl opacity-60 z-0" style={{ transform: 'translate(-50%, -50%)' }} />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#ff48c4]/30 rounded-full filter blur-2xl opacity-60 z-0" />
      <div className="w-full max-w-2xl space-y-8 bg-[#111]/60 backdrop-blur-2xl p-10 rounded-2xl shadow-2xl z-10 relative border border-white/10">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-base text-gray-400">
            Or{' '}
            <Link href="/login" className="font-medium text-[#d0ed01] hover:text-[#d0ed01]/90">
              sign in to your account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-300">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 block w-full px-4 py-3 bg-[#222] border border-gray-700 rounded-lg text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d0ed01] focus:border-transparent"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-300">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 block w-full px-4 py-3 bg-[#222] border border-gray-700 rounded-lg text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d0ed01] focus:border-transparent"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-base font-medium text-gray-300">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-2 block w-full px-4 py-3 bg-[#222] border border-gray-700 rounded-lg text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d0ed01] focus:border-transparent"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-base font-medium text-gray-300">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="block w-full px-4 py-3 bg-[#222] border border-gray-700 rounded-lg text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d0ed01] focus:border-transparent"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-6 w-6 text-gray-400" />
                  ) : (
                    <Eye className="h-6 w-6 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-black bg-[#d0ed01] hover:bg-[#d0ed01]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d0ed01] transition-all duration-300"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-base">
              <span className="px-3 bg-[#111] text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <button
              type="button"
              className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-lg shadow-sm bg-[#222] text-lg font-medium text-gray-300 hover:bg-[#333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d0ed01] transition-all duration-300"
            >
              <FcGoogle className="h-6 w-6 mr-2" />
              Google
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-lg shadow-sm bg-[#222] text-lg font-medium text-gray-300 hover:bg-[#333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d0ed01] transition-all duration-300"
            >
              <FaGithub className="h-6 w-6 mr-2" />
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 