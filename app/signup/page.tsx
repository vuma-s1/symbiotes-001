'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="container mx-auto px-4 py-16 flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
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
            <h1 className="text-2xl font-bold text-white mb-2">Create your account</h1>
            <p className="text-white/70">Enter your details to get started</p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#cce808] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#cce808] focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-[#cce808] to-[#d0ed01bf] text-black font-medium rounded-lg hover:from-[#d0ed01bf] hover:to-[#cce808] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Processing...' : 'Sign up'}
              </button>

              <p className="text-sm text-white/70 text-center">
                Already have an account?{' '}
                <Link href="/login" className="text-[#cce808] hover:text-[#d0ed01bf]">
                  Log in
                </Link>
              </p>
            </form>
          ) : (
            <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-2">Verification Sent</h2>
              <p className="text-white/70">
                We've sent verification information to your email address and phone number.
                Please check your inbox and messages to complete the signup process.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 