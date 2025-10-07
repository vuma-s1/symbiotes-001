import React from 'react';

type BaseProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  className?: string;
};

// Main Hero Headlines - Large but not overwhelming
export const H1: React.FC<BaseProps> = ({ children, className = '', ...rest }) => (
  <h1
    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${className}`}
    {...rest}
  >
    {children}
  </h1>
);

// Section Headlines - Medium size, prominent
export const H2: React.FC<BaseProps> = ({ children, className = '', ...rest }) => (
  <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold leading-tight ${className}`} {...rest}>
    {children}
  </h2>
);

// Subsection Headlines - Smaller but clear
export const H3: React.FC<BaseProps> = ({ children, className = '', ...rest }) => (
  <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold leading-snug ${className}`} {...rest}>
    {children}
  </h3>
);

// Card/Feature Titles - Medium prominence
export const H4: React.FC<BaseProps> = ({ children, className = '', ...rest }) => (
  <h4 className={`text-base sm:text-lg md:text-xl font-semibold leading-snug ${className}`} {...rest}>
    {children}
  </h4>
);

// Small Headlines - For labels, tags, etc.
export const H5: React.FC<BaseProps> = ({ children, className = '', ...rest }) => (
  <h5 className={`text-sm sm:text-base font-medium leading-snug ${className}`} {...rest}>
    {children}
  </h5>
);

// Lead Paragraphs - Prominent body text
export const Lead: React.FC<BaseProps> = ({ children, className = '', ...rest }) => (
  <p className={`text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto ${className}`} {...rest}>
    {children}
  </p>
);

// Regular Paragraphs - Standard body text
export const P: React.FC<BaseProps> = ({ children, className = '', ...rest }) => (
  <p className={`text-sm sm:text-base text-gray-300 leading-relaxed ${className}`} {...rest}>
    {children}
  </p>
);

// Small Text - For captions, footnotes
export const Small: React.FC<BaseProps> = ({ children, className = '', ...rest }) => (
  <p className={`text-xs sm:text-sm text-gray-400 leading-relaxed ${className}`} {...rest}>
    {children}
  </p>
);

// Large Text - For emphasis without being a headline
export const Large: React.FC<BaseProps> = ({ children, className = '', ...rest }) => (
  <p className={`text-lg sm:text-xl text-gray-200 leading-relaxed ${className}`} {...rest}>
    {children}
  </p>
);

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  Lead,
  P,
  Small,
  Large,
};
