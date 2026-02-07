import React, { useState, useEffect, useRef } from 'react';
import StartScreen from './components/StartScreen';
import VerseScreen from './components/VerseScreen';
import DetailScreen from './components/DetailScreen';
import { INITIAL_DATA } from './constants';
import { getLocalManna } from './services/localDataService';
import { ScreenState, MannaData } from './types';
import { fetchDailyManna } from './services/geminiService';
import { RefreshCw, Volume2, VolumeX } from 'lucide-react';

const App: React.FC = () => {
  const [screen, setScreen] = useState<ScreenState>(ScreenState.START);
  const [mannaData, setMannaData] = useState<MannaData>(getLocalManna(new Date()) || INITIAL_DATA);
  const [loading, setLoading] = useState(false);

  // Audio State
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/bgm.wav');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const attemptPlay = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(e => console.log("Audio play failed (autoplay policy):", e));
    }
  };

  const handleNext = () => {
    attemptPlay(); // Try to play on interaction
    if (screen === ScreenState.START) setScreen(ScreenState.VERSE);
    else if (screen === ScreenState.VERSE) setScreen(ScreenState.DETAIL);
  };

  const handleBack = () => {
    if (screen === ScreenState.DETAIL) setScreen(ScreenState.VERSE);
    else setScreen(ScreenState.START); // Reset flow
  };

  const handleRefresh = async () => {
    setLoading(true);
    const newData = await fetchDailyManna();
    if (newData) {
      setMannaData(newData);
    }
    setLoading(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    attemptPlay(); // Also try to play if they click the mute toggle (interaction)
  };

  return (
    <div className="relative w-[390px] h-[844px] bg-gradient-to-br from-[#E0F7FA] via-[#F3E5F5] to-[#E8F5E9] overflow-hidden rounded-[3.5rem] shadow-2xl border-[10px] border-white flex flex-col">
      {screen === ScreenState.START && (
        <StartScreen onNext={handleNext} data={mannaData} isMuted={isMuted} toggleMute={toggleMute} />
      )}
      {screen === ScreenState.VERSE && (
        <VerseScreen onNext={handleNext} data={mannaData} isMuted={isMuted} toggleMute={toggleMute} />
      )}
      {screen === ScreenState.DETAIL && (
        <DetailScreen onNext={handleNext} onBack={handleBack} data={mannaData} isMuted={isMuted} toggleMute={toggleMute} />
      )}

      {/* Footer Indicator - purely visual */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-400/20 rounded-full z-[60] pointer-events-none"></div>

      {/* Hidden Debug/Refresh feature for Persona capabilities */}
      <div className="absolute top-6 left-6 z-50 opacity-0 hover:opacity-100 transition-opacity">
        <button
          onClick={handleRefresh}
          disabled={loading}
          className="p-2 bg-white/50 rounded-full shadow-sm"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>
    </div>
  );
};

export default App;
