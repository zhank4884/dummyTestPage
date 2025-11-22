import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'red' | 'white';
}

const UpiLogo: React.FC<LogoProps> = ({ className = "w-12 h-12", variant = "white" }) => {
  const isRed = variant === 'red';
  const imageSrc = isRed ? "/UPI-Logo-dasar-merah.jpg" : "/UPI-Logo-dasar-putih.png";
  const imageClass = isRed ? "w-full h-full object-cover" : "w-full h-full object-contain";

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        alt="Logo UPI"
        className={imageClass}
      />
    </div>
  );
};

export default UpiLogo;