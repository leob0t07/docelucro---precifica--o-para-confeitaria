import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Smartphone, 
  Star, 
  Check, 
  Zap, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import { InteractivePhoneMockup } from './InteractivePhoneMockup';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EC] to-[#FFFDF9]">
      {/* Subtle Warm Background Blur orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#FCE8DC]/70 via-[#FDF3EA]/60 to-[#FFF9F3]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct Response Copywriting */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Trust Kicker & Category Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5E6DC] border border-[#ECD1C1] text-xs font-semibold text-[#8C3A24]">
              <span className="flex h-2 w-2 rounded-full bg-[#E87A5D]" />
              <span>O Aplicativo Nº 1 de Precificação para Confeitaria Artesanal</span>
            </div>

            {/* Headline Principal (Promessa Forte) - Verbatim as requested */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#2E1D16] tracking-tight leading-[1.18] font-display">
              Descubra o preço exato das suas receitas em{' '}
              <span className="text-[#D45334] underline decoration-[#F4A790]/60 decoration-wavy decoration-2">
                30 segundos pelo celular
              </span>{' '}
              — sem tabelas complexas e sem matemática chata.
            </h1>

            {/* Sub-headline - Verbatim as requested */}
            <p className="text-base sm:text-lg text-[#614D44] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              O aplicativo de precificação feito sob medida para confeiteiras que querem calcular custos de ingredientes, mão de obra e embalagens para colocar{' '}
              <strong className="text-[#2E1D16] font-semibold">lucro de verdade no bolso</strong>.
            </p>

            {/* Value checklist bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-[#4E3D35] max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-xl border border-[#EDE2D8]">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Cálculo automático de gás e energia</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-xl border border-[#EDE2D8]">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Salário justo pela sua mão de obra</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-xl border border-[#EDE2D8]">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Preço de venda e lucro líquido na tela</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-3 py-2 rounded-xl border border-[#EDE2D8]">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Atualize 1 ingrediente e recalcula tudo</span>
              </div>
            </div>

            {/* CTA Button Block */}
            <div className="pt-3 space-y-4">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#E87A5D] via-[#DF6446] to-[#C84F32] hover:from-[#E06D4F] hover:to-[#B63E23] text-white font-bold text-base sm:text-lg shadow-xl shadow-[#E87A5D]/30 hover:shadow-2xl hover:shadow-[#E87A5D]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>QUERO CALCULAR MEUS PREÇOS COM LUCRO</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>

              {/* Micro-texto abaixo do botão */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-xs text-[#7A6961] font-medium pt-1">
                <span className="inline-flex items-center gap-1.5 bg-[#FAF3EC] sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-md">
                  <Zap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  Acesso imediato
                </span>
                <span className="hidden sm:inline text-[#D4C3B8]">•</span>
                <span className="inline-flex items-center gap-1.5 bg-[#FAF3EC] sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-md">
                  <Smartphone className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  Funciona no celular
                </span>
                <span className="hidden sm:inline text-[#D4C3B8]">•</span>
                <span className="inline-flex items-center gap-1.5 bg-[#FAF3EC] sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Garantia de 7 dias
                </span>
              </div>
            </div>

            {/* Social Proof Avatars & Rating */}
            <div className="pt-5 border-t border-[#EFE4D9] flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 text-center sm:text-left">
              <div className="flex items-center -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Confeiteira Mariana"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Confeiteira Carla"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Confeiteira Patricia"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Confeiteira Fernanda"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <div className="w-9 h-9 rounded-full bg-[#4A2818] text-white text-[11px] font-bold flex items-center justify-center border-2 border-white">
                  +3.4k
                </div>
              </div>

              <div className="text-left text-xs text-[#6A584F]">
                <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="font-bold text-[#3A2318] ml-1">4.9 / 5.0</span>
                </div>
                <p>
                  Mais de <strong className="text-[#3A2318] font-semibold">3.420 confeiteiras</strong> já pararam de pagar para trabalhar
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Mockup 3D / Real Kitchen photo + Interactive Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Visual hint indicator */}
            <div className="mb-2 text-center">
              <span className="text-[11px] font-semibold text-[#8C3A24] bg-[#F7EBE4] px-3 py-1 rounded-full border border-[#EACEC0]">
                👉 Simulação interativa ao vivo — altere os valores abaixo:
              </span>
            </div>

            <InteractivePhoneMockup />

            <div className="mt-3 text-center">
              <span className="text-[11px] text-[#8C7A70]">
                Funciona em qualquer aparelho Android e iPhone, sem instalar arquivos pesados.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
