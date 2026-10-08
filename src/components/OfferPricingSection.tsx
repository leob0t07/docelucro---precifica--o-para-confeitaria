import React from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  Gift, 
  PlayCircle, 
  ShieldCheck 
} from 'lucide-react';
import miniCursoCapaImg from '../assets/images/mini_curso_capa_1791402209036.jpg';

interface OfferPricingSectionProps {
  onCtaClick?: () => void;
  checkoutUrl?: string;
}

export const OfferPricingSection: React.FC<OfferPricingSectionProps> = ({ 
  checkoutUrl = 'https://pay.cakto.com.br/9wof6n5_1184129'
}) => {

  return (
    <section id="oferta" className="py-16 lg:py-24 bg-gradient-to-b from-white via-[#FFF9F4] to-[#FAF3EC] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A64B34] bg-[#FDEFEA] px-4 py-1.5 rounded-full border border-[#FAD6CA]">
            Condição Especial de Lançamento MVP
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-[#2E1D16] tracking-tight font-display">
            Tudo o que você precisa para precificar com segurança e lucrar de verdade
          </h2>

          <p className="text-sm sm:text-base text-[#6E5B52]">
            Uma oferta feita para remover qualquer barreira de entrada e se pagar logo nas primeiras encomendas da semana.
          </p>
        </div>

        {/* Main Stack Container */}
        <div className="bg-white rounded-3xl border-2 border-[#E87A5D]/40 shadow-2xl overflow-hidden">
          
          {/* Top Banner Ribbon */}
          <div className="bg-gradient-to-r from-[#E87A5D] via-[#D85E40] to-[#C0492D] text-white py-3.5 px-6 text-center">
            <p className="text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>OFERTA DE LANÇAMENTO EXCLUSIVA • ACESSO IMEDIATO LIBERADO</span>
            </p>
          </div>

          <div className="p-4 sm:p-8 lg:p-12 space-y-6 sm:space-y-10">
            
            {/* What is Included List */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#2E1D16] mb-4 sm:mb-5 flex items-center gap-2">
                <span className="text-[#E87A5D]">📦</span>
                <span>O que está incluso na sua adesão:</span>
              </h3>

              <div className="space-y-3.5 sm:space-y-4">
                
                {/* Item 1: App Access */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#FCFAF7] border border-[#EFE5DB]">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <h4 className="text-xs sm:text-base font-bold text-[#352219]">
                        Acesso Completo ao Aplicativo DoceLucro
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Principal
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6E5B52] mt-1 leading-relaxed">
                      Acesso completo a todas as funções de criação de receitas, cálculo automático de custos de insumos, embalagens, taxa de maquininha, gás e definição de margem de lucro límpida.
                    </p>
                  </div>
                </div>

                {/* Bônus 1 */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <h4 className="text-xs sm:text-base font-bold text-[#352219]">
                        Bônus 1: 20 Receitas Base Pré-Cadastradas
                      </h4>
                      <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                        GRÁTIS HOJE (Valor: R$ 67)
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6E5B52] mt-1 leading-relaxed">
                      20 receitas tradicionais da confeitaria brasileira (Bolo de Cenoura c/ Brigadeiro, Red Velvet, Brownie Fudgy, Cento de Brigadeiros Gourmet, Copos da Felicidade, Bentô Cake, Caseirinhos e mais) já cadastradas para você só ajustar os valores dos ingredientes da sua região.
                    </p>
                  </div>
                </div>

                {/* Bônus 2 */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-rose-50/40 border border-rose-200/80">
                  <div className="flex items-start gap-3 w-full sm:w-auto">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                      <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <h4 className="text-xs sm:text-base font-bold text-[#352219]">
                          Bônus 2: Mini-Curso &quot;Como Vender Sem Dar Desconto&quot;
                        </h4>
                        <span className="text-[10px] font-bold text-rose-800 bg-rose-100 px-2 py-0.5 rounded border border-rose-300">
                          GRÁTIS HOJE (Valor: R$ 97)
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#6E5B52] mt-1 leading-relaxed">
                        Aula direta em vídeo de 15 minutos ensinando a ancorar o valor do seu bolo, responder clientes que pedem pechincha e vender com postura profissional sem abaixar 1 centavo.
                      </p>
                    </div>
                  </div>
                  
                  {/* Thumbnail snippet */}
                  <div className="w-full sm:w-28 h-20 sm:h-16 rounded-xl overflow-hidden border border-rose-200 shrink-0 relative bg-black/10 mt-1 sm:mt-0">
                    <img 
                      src={miniCursoCapaImg} 
                      alt="Capa Mini-Curso" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <PlayCircle className="w-6 h-6 text-white drop-shadow" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Price Anchor Section */}
            <div className="pt-6 sm:pt-8 border-t border-[#EFE4D9] bg-gradient-to-b from-[#FFFDFB] to-[#FBF5EE] p-4 sm:p-8 rounded-2xl border border-[#EBDCD0] text-center">
              
              <div className="inline-flex items-center gap-1.5 text-xs text-[#8C7A70] line-through mb-1">
                <span>De R$ 197,00</span>
              </div>

              <div className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full inline-block mb-3">
                Por apenas:
              </div>

              {/* Price Highlight with smaller /mês */}
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm sm:text-lg font-bold text-[#57453C]">R$</span>
                <span className="text-5xl sm:text-7xl font-black text-[#D45334] tracking-tight font-display">
                  9,99
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#8C7A70] self-end mb-2">
                  /mês
                </span>
              </div>

              <div className="text-sm font-semibold text-[#5A4840] mt-1">
                assinatura mensal acessível <strong className="text-[#2E1D16] font-bold">sem fidelidade</strong> (cancele quando quiser)
              </div>

              <p className="text-xs text-[#8C7A70] mt-2">
                Menos de <strong className="text-[#352219]">R$ 0,33 por dia</strong> — mais barato do que uma forminha de brigadeiro!
              </p>

              {/* CTA Button linking directly to Cakto */}
              <div className="mt-6 max-w-md mx-auto space-y-3">
                <a
                  href={checkoutUrl}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#E87A5D] via-[#DF6446] to-[#C84F32] hover:from-[#E06D4F] hover:to-[#B63E23] text-white font-extrabold text-lg sm:text-xl shadow-xl shadow-[#E87A5D]/35 hover:shadow-2xl hover:shadow-[#E87A5D]/45 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>GARANTIR MEU ACESSO COM DESCONTO</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </a>

                <div className="flex items-center justify-center gap-3 text-xs text-[#7A6961]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Pagamento 100% Seguro
                  </span>
                  <span>•</span>
                  <span>Liberação Imediata via PIX ou Cartão</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
