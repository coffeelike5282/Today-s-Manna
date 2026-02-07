import React from 'react';
import { ScreenProps } from '../types';
import { Croissant, Sparkles, ClipboardCheck, Volume2, VolumeX } from 'lucide-react';

const DetailScreen: React.FC<ScreenProps> = ({ onBack, data, isMuted, toggleMute }) => {
    return (
        <div className="relative w-full h-full flex flex-col overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0 glass-effect">
                <div className="pt-16 px-8 flex flex-col items-center opacity-30">
                    <div className="flex items-center justify-between w-full mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center">
                                <Croissant className="text-primary" size={24} />
                            </div>
                            <h1 className="text-3xl font-bold pt-1">오늘의 만나</h1>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleMute?.();
                            }}
                            className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm border-2 border-gray-100 active:scale-90 transition-transform pointer-events-auto z-50"
                        >
                            {isMuted ? (
                                <VolumeX className="text-gray-500" size={24} />
                            ) : (
                                <Volume2 className="text-gray-700" size={24} />
                            )}
                        </button>
                    </div>
                    {/* Ghost Elements mimicking previous screen for transition effect */}
                    <div className="w-24 h-20 bg-manna-yellow rounded-[2.5rem] mb-8"></div>
                    <div className="bg-white/90 rounded-[3.5rem] p-6 w-full h-[360px] flex flex-col items-center">
                        <div className="px-8 py-3 rounded-[2rem] bg-[#E8F5E9] mb-6 w-32 h-10"></div>
                    </div>
                </div>
            </div>

            {/* Content Sheet */}
            <div className="absolute inset-x-0 bottom-0 top-20 z-50 bg-[#FFF9C4] rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.08)] flex flex-col border-t-4 border-white/50 overflow-hidden animate-slide-up">

                {/* Drag Handle */}
                <div className="w-full flex justify-center pt-4 pb-2 flex-shrink-0" onClick={onBack}>
                    <div className="w-12 h-1.5 bg-manna-brown/20 rounded-full cursor-pointer"></div>
                </div>

                <div className="flex-1 px-8 pt-4 flex flex-col gap-6 overflow-hidden">

                    {/* Interpretation Section */}
                    <div className="flex flex-col h-[40%] min-h-[250px] flex-shrink-0">
                        <div className="flex items-center justify-start gap-2 mb-3 flex-shrink-0 pl-1">
                            <Sparkles className="text-manna-brown" size={20} />
                            <h2 className="text-2xl font-chunky text-manna-brown pt-1">오늘의 해석</h2>
                        </div>
                        <div className="bg-interpretation-mint rounded-3xl p-6 h-full overflow-y-auto custom-scrollbar border border-white/40 shadow-sm">
                            <div className="font-verse text-lg leading-relaxed text-gray-700 keep-all whitespace-pre-line">
                                {data.interpretation}
                            </div>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="flex flex-col flex-1 mb-2 min-h-0">
                        <div className="flex items-center justify-start gap-2 mb-3 flex-shrink-0 pl-1">
                            <ClipboardCheck className="text-manna-brown" size={20} />
                            <h2 className="text-2xl font-chunky text-manna-brown pt-1">오늘의 미션</h2>
                        </div>
                        <div className="bg-mission-pink rounded-3xl p-6 flex-1 overflow-hidden border-2 border-dashed border-manna-brown/20 flex flex-col justify-center items-center">
                            <p className="font-verse text-2xl text-center text-primary-dark font-bold keep-all py-2">
                                {data.mission}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Complete Button */}
                <div className="px-8 pb-12 pt-4 flex flex-col items-center flex-shrink-0">
                    <button
                        onClick={onBack}
                        className="w-full h-16 bg-gradient-to-br from-[#FF9E80] to-[#FF5252] rounded-full flex items-center justify-center shadow-[0_12px_28px_-5px_rgba(255,82,82,0.4)] active:scale-[0.96] transition-all"
                    >
                        <span className="text-2xl font-normal text-white tracking-tight font-chunky">미션 완료!</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailScreen;
