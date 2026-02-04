import React from 'react';
import { ScreenProps } from '../types';
import Mascot from './Mascot';
import { Volume2, Cloud, Star, Heart } from 'lucide-react';

const StartScreen: React.FC<ScreenProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Floating Elements */}
      <div className="absolute top-24 left-10 text-[#B2EBF2] animate-float">
        <Cloud size={48} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute top-40 right-12 text-[#FFECB3] animate-float-delayed">
        <Star size={36} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute top-[20%] left-[25%] text-[#F8BBD0] animate-float">
        <Heart size={30} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute bottom-64 left-12 text-[#C8E6C9] animate-float-delayed">
        <Cloud size={60} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute bottom-48 right-10 text-[#D1C4E9] animate-float">
        <Heart size={40} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute bottom-[30%] right-[20%] text-[#FFE082] animate-float-delayed">
        <Star size={30} fill="currentColor" strokeWidth={0} />
      </div>

      <div className="absolute top-16 right-8 z-50">
        <button className="w-12 h-12 glass-effect rounded-2xl flex items-center justify-center shadow-sm active:scale-90 transition-transform">
          <Volume2 className="text-gray-600" size={24} />
        </button>
      </div>

      <div className="flex flex-col items-center z-20">
        <Mascot onClick={onNext} className="animate-bounce-gentle mb-12" />
        
        <h2 
          className="text-[28px] text-gray-700 font-chunky mb-4 tracking-tight drop-shadow-sm cursor-pointer animate-pulse"
          onClick={onNext}
        >
          터치하여 말씀 시작하기
        </h2>
      </div>

      <div className="absolute bottom-20 w-full text-center px-10">
        <p className="text-gray-500/80 text-[15px] font-chunky tracking-wide">
          이어폰 착용을 권장합니다
        </p>
      </div>
    </div>
  );
};

export default StartScreen;
