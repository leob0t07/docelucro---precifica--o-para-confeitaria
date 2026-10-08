import React from 'react';
import { ShieldCheck, Lock, Heart } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

interface FooterProps {
  onCtaClick: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCtaClick, onOpenCalculator }) => {
  return (
    <footer className="bg-[#26150D] text-[#D8C7BC] text-xs pt-14 pb-20 sm:pb-14 border-t border-[#3D2519]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#3D2519]/70">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/10 overflow-hidden">
                <img 
                  src={logoImg} 
                  alt="Logo DoceLucro" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-lg text-white font-display">
                Doce<span className="text-[#E87A5D]">Lucro</span>
              </span>
            </div>

            <p className="text-xs text-[#B5A196] leading-relaxed max-w-sm">
              O aplicativo de precificação feito sob medida para confeiteiras que querem calcular custos de ingredientes, mão de obra e embalagens para colocar lucro de verdade no bolso.
            </p>

            <div className="flex items-center gap-4 pt-1 text-[11px] text-[#A38E83]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Garantia de 7 Dias
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                Checkout Seguro
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-1.5 text-[#B5A196]">
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">Identificação da Dor</a>
              </li>
              <li>
                <a href="#pilares" className="hover:text-white transition-colors">Os 3 Pilares do App</a>
              </li>
              <li>
                <a href="#demonstracao" className="hover:text-white transition-colors">Demonstração Visual (45s)</a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-white transition-colors">Oferta de Lançamento</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Comece Hoje
            </h4>
            <p className="text-xs text-[#B5A196]">
              Deixe de pagar para trabalhar e descubra quanto cobrar em 30 segundos.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={onCtaClick}
                className="px-4 py-2.5 rounded-xl bg-[#E87A5D] hover:bg-[#DF6446] text-white font-bold text-xs transition-colors cursor-pointer text-center"
              >
                Garantir com Desconto
              </button>
              <button
                onClick={onOpenCalculator}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors cursor-pointer text-center"
              >
                Testar Simulador
              </button>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#8C766B]">
          <div>
            © {new Date().getFullYear()} DoceLucro. Todos os direitos reservados. Feito com{' '}
            <Heart className="w-3 h-3 inline text-rose-500 fill-current mx-0.5" /> para a confeitaria artesanal.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Termos de Uso</a>
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:underline">Suporte via WhatsApp</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
