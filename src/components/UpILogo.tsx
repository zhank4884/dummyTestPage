import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

const UpiLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
      <img
        src="/UPI-Logo-dasar-merah.jpg"
        alt="Logo UPI"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default UpiLogo;