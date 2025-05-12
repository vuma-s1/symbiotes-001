'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
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

      <div className="w-full max-w-md space-y-8 bg-[#111]/60 backdrop-blur-2xl p-10 rounded-2xl shadow-2xl z-10 relative border border-white/10">
        <div className="text-center">
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/images/logo.png"
              alt="Symbiotes Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-white/70">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#222] border border-gray-700 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#d0ed01] focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/70 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#222] border border-gray-700 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#d0ed01] focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700 bg-[#222] text-[#d0ed01] focus:ring-[#d0ed01]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-white/70">
                Remember me
              </label>
            </div>
            <Link href="/forgot-password" className="text-sm text-[#d0ed01] hover:text-[#d0ed01]/90">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-[#d0ed01] text-black font-medium rounded-lg hover:bg-[#d0ed01]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d0ed01] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>

          <p className="text-sm text-white/70 text-center">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-[#d0ed01] hover:text-[#d0ed01]/90">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
} 