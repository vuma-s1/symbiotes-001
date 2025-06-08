import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Strategy Call',
  description: 'Book a personalized strategy call with our experts',
};

export default function BookCallLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        background: 'radial-gradient(circle at 0% 0%, #fff 0%, #d0ed01 40%, #181a0a 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)'
      }}
    >
      {/* Logo top left */}
      <div style={{ position: 'absolute', top: 24, left: 32, zIndex: 50, background: 'none' }}>
        <img src="/images/logo1.png" alt="Symbiotes Logo" style={{ height: 56, width: 'auto', objectFit: 'contain' }} />
      </div>
      {children}
      {/* No Footer rendered here for book-call page */}
    </div>
  );
} 