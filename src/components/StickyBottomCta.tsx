import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';

interface StickyBottomCtaProps {
  onCtaClick: () => void;
}

export const StickyBottomCta: React.FC<StickyBottomCtaProps> = ({ onCtaClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (approx 450px)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#EDE1D6] p-3 sm:hidden shadow-2xl animate-slideUp">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] text-[#8C7A70] line-through">De R$ 19,90</span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-base font-black text-[#D45334]">R$ 9,99</span>
            <span className="text-[10px] font-semibold text-[#8C7A70]">/mês</span>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#E87A5D] to-[#C84F32] text-white font-extrabold text-xs shadow-md shadow-[#E87A5D]/30 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
        >
          <span>QUERO CALCULAR COM LUCRO</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
