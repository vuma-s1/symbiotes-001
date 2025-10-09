'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-[#d0ed01] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-black font-bold text-2xl">!</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
          <p className="text-gray-300 mb-6">
            We encountered an unexpected error. Please try again.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-[#d0ed01] text-black font-bold px-6 py-3 rounded-full hover:bg-[#b5d101] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} />
            Try again
          </button>
          
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center text-[#d0ed01] hover:text-[#b5d101] transition-colors duration-200 gap-2"
          >
            <ArrowLeft size={20} />
            Go back home
          </Link>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-gray-400 cursor-pointer">Error details</summary>
            <pre className="mt-2 text-xs text-gray-500 bg-gray-900 p-4 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
