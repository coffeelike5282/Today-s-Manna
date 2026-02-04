import React from 'react';

interface MascotProps {
  className?: string;
  onClick?: () => void;
}

const Mascot: React.FC<MascotProps> = ({ className, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`group relative flex items-center justify-center w-40 h-40 bg-manna-yellow rounded-full shadow-xl border-4 border-white glow-character active:scale-95 transition-all overflow-hidden ${className}`}
    >
      <div className="flex flex-col items-center justify-center w-full h-full relative">
        <div className="flex gap-8 mb-2">
          <div className="w-3 h-4 bg-manna-brown rounded-full"></div>
          <div className="w-3 h-4 bg-manna-brown rounded-full"></div>
        </div>
        <div className="w-8 h-4 border-b-4 border-manna-brown rounded-full"></div>
        <div className="absolute w-full flex justify-around px-6">
          <div className="w-4 h-4 bg-[#FFAB91] opacity-40 rounded-full blur-[2px]"></div>
          <div className="w-4 h-4 bg-[#FFAB91] opacity-40 rounded-full blur-[2px]"></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
  );
};

export default Mascot;
