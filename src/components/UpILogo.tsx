import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

const UpiLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <img
      src="/UPI-Logo-dasar-putih.png"
      alt="Logo UPI"
      className={`object-contain ${className}`}
    />
  );
};

export default UpiLogo;