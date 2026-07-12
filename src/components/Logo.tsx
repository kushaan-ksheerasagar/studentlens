import React from 'react';

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Eye shape / Lens glass */}
      <path d="M10 17C6.13401 17 2 12 2 12C2 12 6.13401 7 10 7C13.866 7 18 12 18 12C18 12 13.866 17 10 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
      {/* Pupil / Focus point */}
      <circle cx="10" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="12" r="1" fill="currentColor"/>
      {/* Magnifying handle */}
      <path d="M21.5 21.5L16.2 16.2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
