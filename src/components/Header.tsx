import React from 'react';
import { ShieldCheck, Smartphone, Calculator, Sparkles } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

interface HeaderProps {
  onCtaClick: () => void;
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick, onOpenCalculator }) => {
  return (
    <header className="sticky top-0 z-30 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#F0E6DE] transition-all">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink min-w-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#FFF5EE] to-[#FCEAE0] p-1 border border-[#F0DCD0] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <img 
              src={logoImg} 
              alt="Logo DoceLucro" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-[#3A2318] font-display whitespace-nowrap">
                Doce<span className="text-[#E87A5D]">Lucro</span>
              </span>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 hidden sm:inline-block">
                APP
              </span>
            </div>
            <span className="text-[11px] text-[#8C7A70] -mt-1 font-medium hidden sm:block">
              Precificação para Confeitaria
            </span>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5E4E45]">
          <a href="#como-funciona" className="hover:text-[#E87A5D] transition-colors">
            Como Funciona
          </a>
          <a href="#pilares" className="hover:text-[#E87A5D] transition-colors">
            3 Pilares do App
          </a>
          <a href="#demonstracao" className="hover:text-[#E87A5D] transition-colors">
            Demonstração (45s)
          </a>
          <a href="#oferta" className="hover:text-[#E87A5D] transition-colors">
            Oferta Especial
          </a>
          <a href="#faq" className="hover:text-[#E87A5D] transition-colors">
            Dúvidas Frequentes
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            onClick={onOpenCalculator}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E4E45] hover:text-[#3A2318] bg-[#F7EFE9] hover:bg-[#EFE2D8] px-3.5 py-2 rounded-lg border border-[#E8DCD4] transition-all cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5 text-[#E87A5D]" />
            Testar Simulador
          </button>

          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E87A5D] to-[#C85235] hover:from-[#DF6D4F] hover:to-[#B84529] px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md shadow-[#E87A5D]/25 hover:shadow-lg hover:shadow-[#E87A5D]/35 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200 shrink-0" />
            <span>Garantir Acesso</span>
          </button>
        </div>
      </div>
    </header>
  );
};
