import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const NOTIFICATIONS = [
  { name: 'Juliana P.', city: 'Campinas - SP', action: 'acabou de garantir a oferta de lançamento!', icon: '🍰' },
  { name: 'Carla M.', city: 'Belo Horizonte - MG', action: 'recalculou 14 receitas de brigadeiro com lucro', icon: '✨' },
  { name: 'Fernanda R.', city: 'Curitiba - PR', action: 'acabou de garantir o acesso vitalício!', icon: '🎂' },
  { name: 'Patrícia S.', city: 'Rio de Janeiro - RJ', action: 'ajustou a margem de 120% no bolo de cenoura', icon: '👩‍🍳' },
  { name: 'Aline T.', city: 'Goiânia - GO', action: 'começou a usar o app no celular', icon: '🧁' },
];

export const SocialProofToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show toast after 4 seconds initial delay
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 1000);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  const item = NOTIFICATIONS[currentIndex];

  return (
    <div className="fixed bottom-16 sm:bottom-6 left-4 z-40 max-w-[320px] bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-[#EBDCD0] flex items-center gap-3 transition-all animate-fadeIn">
      <div className="w-9 h-9 rounded-xl bg-[#FAF0E8] text-[#E87A5D] flex items-center justify-center text-lg shrink-0">
        {item.icon}
      </div>
      <div className="text-left text-xs">
        <p className="font-bold text-[#352219]">
          {item.name} <span className="font-normal text-[#8C7A70]">({item.city})</span>
        </p>
        <p className="text-[11px] text-[#6E5B52] leading-tight">
          {item.action}
        </p>
      </div>
    </div>
  );
};
