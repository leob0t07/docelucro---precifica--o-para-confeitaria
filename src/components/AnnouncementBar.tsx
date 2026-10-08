import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  onCtaClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onCtaClick }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 15, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="bg-[#4A2818] text-[#FDF8F5] text-xs sm:text-sm py-2.5 px-4 shadow-sm relative z-40 border-b border-[#3D2012]">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-center">
        <div className="flex items-center gap-2 justify-center">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="font-semibold text-amber-200 uppercase tracking-wider text-[11px] sm:text-xs">
            Aplicativo quase de graça por:
          </span>
        </div>

        <div className="flex items-center gap-2.5 justify-center">
          <div className="flex items-center gap-1.5 bg-[#361B0F] px-2.5 py-1 rounded text-amber-300 font-mono text-xs border border-amber-900/40">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Expira em {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</span>
          </div>

          <button
            onClick={onCtaClick}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-white underline decoration-amber-400/60 underline-offset-2 transition-colors cursor-pointer"
          >
            Aproveitar Desconto
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
