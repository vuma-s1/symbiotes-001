import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-[#d0ed01] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-black font-bold text-2xl">404</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Page not found</h1>
          <p className="text-gray-300 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="w-full inline-block bg-[#d0ed01] text-black font-bold px-6 py-3 rounded-full hover:bg-[#b5d101] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Go back home
          </Link>
          
          <Link
            href="/what-we-do"
            className="w-full inline-flex items-center justify-center text-[#d0ed01] hover:text-[#b5d101] transition-colors duration-200 gap-2"
          >
            <ArrowLeft size={20} />
            Explore our services
          </Link>
        </div>
      </div>
    </div>
  );
}
