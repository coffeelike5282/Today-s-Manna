import React from 'react';
import { ScreenProps } from '../types';
import { Volume2, VolumeX, Cloud, Star, ChevronUp, Croissant } from 'lucide-react';

const VerseScreen: React.FC<ScreenProps> = ({ onNext, data, isMuted, toggleMute }) => {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-24 left-6 text-white/60 animate-float">
        <Cloud size={60} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute top-48 right-10 text-yellow-200/70 animate-float-delayed">
        <Star size={36} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute bottom-80 left-8 text-primary/40 animate-float">
        <Star size={24} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute bottom-64 right-12 text-white/50 animate-float-delayed">
        <Cloud size={70} fill="currentColor" strokeWidth={0} />
      </div>

      {/* Header */}
      <div className="relative z-20 pt-16 px-6 flex flex-col items-center flex-shrink-0">
        <div className="relative flex items-center justify-center w-full mb-2">
          <div className="absolute left-0 w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-md border-2 border-primary/20">
            <Croissant className="text-primary" size={24} />
          </div>
          <h1 className="text-3xl font-normal text-manna-brown tracking-normal font-chunky pt-1">오늘의 만나</h1>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMute?.();
            }}
            className="absolute right-0 w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm border-2 border-gray-100 active:scale-90 transition-transform"
          >
            {isMuted ? (
              <VolumeX className="text-gray-500" size={24} />
            ) : (
              <Volume2 className="text-gray-700" size={24} />
            )}
          </button>
        </div>

        <div className="px-3 py-1 bg-white/40 backdrop-blur-sm rounded-full mb-6 shadow-sm">
          <p className="text-gray-500 font-chunky text-sm tracking-wide">
            {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Mascot Mini */}
        <div className="relative mb-8 animate-float flex justify-center w-full">
          <div className="w-24 h-20 bg-manna-yellow rounded-[2.5rem] border-4 border-manna-brown/20 relative flex flex-col items-center justify-center shadow-lg">
            <div className="flex gap-3 mb-1">
              <div className="w-1.5 h-1.5 bg-manna-brown rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-manna-brown rounded-full"></div>
            </div>
            <div className="w-5 h-2.5 border-b-4 border-manna-brown rounded-full"></div>
            <div className="absolute w-2.5 h-1.5 bg-red-200 rounded-full left-4 top-10"></div>
            <div className="absolute w-2.5 h-1.5 bg-red-200 rounded-full right-4 top-10"></div>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="relative z-20 px-6 flex-1 flex flex-col min-h-0 mb-4">
        <div className="bg-white/90 rounded-[3.5rem] p-6 pb-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center h-full border-4 border-white/80 overflow-hidden backdrop-blur-sm">
          <div className="mb-6 flex justify-center w-full flex-shrink-0">
            <div className="px-8 py-3 rounded-[2rem] bg-[#E8F5E9] text-primary-dark font-extrabold text-2xl leading-none flex items-center justify-center border-2 border-primary/20 shadow-sm inline-flex">
              <span className="font-sans font-[900]">{data.verseRef}</span>
            </div>
          </div>

          <div className="flex-1 w-full overflow-hidden flex flex-col items-center justify-start">
            <div className="custom-scrollbar overflow-y-auto w-full px-4 text-center font-verse text-[1.45rem] leading-[1.8] text-gray-700 font-medium tracking-normal keep-all">
              {data.verseText.split('\n').map((line, i) => {
                const isHighlight = line.includes("합력하여");
                return (
                  <p key={i} className={`mb-2 ${isHighlight ? "text-primary-dark font-bold" : ""}`}>
                    {line}
                  </p>
                );
              })}

              <p className="mb-2 text-gray-400 text-lg opacity-40 pt-4">—</p>
              <p className="mb-2 text-gray-500/80 text-xl">
                {data.fullVerse}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="relative w-full px-6 py-10 z-30 flex-shrink-0">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-bounce text-primary/80 h-8 flex items-center">
            <ChevronUp size={36} strokeWidth={3} />
          </div>
          <button
            onClick={onNext}
            className="w-full h-18 py-5 bg-gradient-to-br from-[#FF9E80] to-[#FF5252] rounded-full flex items-center justify-center shadow-[0_12px_28px_-5px_rgba(255,82,82,0.5)] active:scale-[0.96] transition-all"
          >
            <span className="text-2xl font-normal text-white tracking-tight font-chunky">해석과 미션 보기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerseScreen;
