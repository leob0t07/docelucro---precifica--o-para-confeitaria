import React, { useState } from 'react';
import { 
  FileText, 
  RefreshCw, 
  Clock3, 
  Sparkles, 
  CheckCircle, 
  ArrowUpRight, 
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Percent,
  Check
} from 'lucide-react';

interface SolutionPillarsSectionProps {
  onCtaClick: () => void;
}

export const SolutionPillarsSection: React.FC<SolutionPillarsSectionProps> = ({ onCtaClick }) => {
  // Demonstration for Pillar 2: Automatic Update
  const [condensedMilkMarketPrice, setCondensedMilkMarketPrice] = useState(7.50);

  // Recalculated recipes
  const sampleRecipes = [
    {
      name: 'Bolo Vulcão Ninho com Nutella',
      baseFixedCost: 16.20,
      condensedUnits: 2,
      margin: 1.2, // 120%
    },
    {
      name: 'Caixa 12 Brigadeiros Gourmet',
      baseFixedCost: 9.80,
      condensedUnits: 1.5,
      margin: 1.3, // 130%
    },
    {
      name: 'Copo da Felicidade de Morango',
      baseFixedCost: 8.40,
      condensedUnits: 1,
      margin: 1.15, // 115%
    },
  ];

  return (
    <section id="pilares" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E87A5D] bg-[#FDF0EC] px-3.5 py-1.5 rounded-full border border-[#FADCD2]">
            Simplicidade Extrema & Rapidez no Fogão
          </span>

          {/* Título - Verbatim from user prompt */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E1D16] tracking-tight leading-snug font-display">
            Conheça o DoceLucro: A sua assistente financeira de bolso na cozinha.
          </h2>

          <p className="text-base text-[#6E5B52]">
            Desenvolvido para funcionar até quando suas mãos estão sujas de farinha. Sem fórmulas incompreensíveis de Excel, sem cálculos manuais e direto no seu smartphone.
          </p>
        </div>

        {/* 3 Pilares do Produto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mt-8 sm:mt-14">
          
          {/* Pilar 1 */}
          <div className="bg-[#FFFDF9] rounded-2xl p-5 sm:p-7 border border-[#EDE2D8] hover:border-[#E87A5D]/50 transition-all hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FDF0EC] text-[#E87A5D] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <div className="text-xs font-bold text-[#A64B34] uppercase tracking-wider mb-2">
                Pilar 1
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#2E1D16] mb-2 sm:mb-3 font-display">
                Fichas Técnicas em 3 Toques
              </h3>

              <p className="text-xs sm:text-sm text-[#66544B] leading-relaxed">
                Selecione os ingredientes, coloque as quantidades e veja o <strong>custo real da receita na hora</strong>. Sem complicação de conversão de gramas para quilos.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#F5ECE4] space-y-2 text-xs text-[#523E36]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Conversão automática de g, ml, colheres e latas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cálculo de rendimento e custo por fatia/unidade</span>
              </div>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="bg-[#FFFDF9] rounded-2xl p-5 sm:p-7 border-2 border-[#E87A5D]/40 hover:border-[#E87A5D] transition-all shadow-md hover:shadow-xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#E87A5D] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              O Favorito das Confeiteiras
            </div>

            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E87A5D] text-white flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-md shadow-[#E87A5D]/25">
                <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <div className="text-xs font-bold text-[#E87A5D] uppercase tracking-wider mb-2">
                Pilar 2
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#2E1D16] mb-2 sm:mb-3 font-display">
                Atualização Automática de Ingredientes
              </h3>

              <p className="text-xs sm:text-sm text-[#66544B] leading-relaxed">
                O leite condensado subiu no mercado? <strong>Altere o valor uma única vez</strong> e todas as suas receitas recalculam o preço de venda automaticamente.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#F5ECE4] space-y-2 text-xs text-[#523E36]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero risco de esquecer de repassar a inflação</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Economiza horas refezendo anotações no caderno</span>
              </div>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="bg-[#FFFDF9] rounded-2xl p-5 sm:p-7 border border-[#EDE2D8] hover:border-[#E87A5D]/50 transition-all hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF6E5] text-amber-700 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Clock3 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                Pilar 3
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#2E1D16] mb-2 sm:mb-3 font-display">
                Valor da Sua Hora de Trabalho
              </h3>

              <p className="text-xs sm:text-sm text-[#66544B] leading-relaxed">
                O app calcula exatamente quanto <strong>você deve receber pelo tempo que passou confeitando ou assando</strong>. Confeiteira não vive de brisa nem de elogio: você merece pró-labore!
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#F5ECE4] space-y-2 text-xs text-[#523E36]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Defina sua meta salarial mensal</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>O app divide por horas e insere no custo do doce</span>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Live Demo of Pilar 2 */}
        <div className="mt-10 sm:mt-14 bg-[#FAF4ED] border border-[#ECD9CC] rounded-2xl sm:rounded-3xl p-4 sm:p-8">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-[#A64B34] uppercase tracking-wider">
              Demonstração Interativa ao Vivo
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-[#352219] font-display mt-1">
              O que acontece quando o Leite Condensado aumenta no mercado?
            </h4>
            <p className="text-xs sm:text-sm text-[#735F55] mt-1">
              Arraste a barra para alterar o preço do Leite Condensado e veja as 3 receitas abaixo recalcularem os preços de venda instantaneamente:
            </p>
          </div>

          {/* Slider */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8D9CD] shadow-xs mb-6 max-w-xl">
            <div className="flex items-center justify-between text-sm font-bold text-[#352219] mb-2">
              <span className="flex items-center gap-2">
                🥫 Preço da lata no mercado hoje:
              </span>
              <span className="text-lg text-[#E87A5D] font-extrabold bg-[#FDF0EC] px-3 py-0.5 rounded-lg border border-[#F9D6CB]">
                R$ {condensedMilkMarketPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <input
              type="range"
              min="5.50"
              max="11.00"
              step="0.25"
              value={condensedMilkMarketPrice}
              onChange={(e) => setCondensedMilkMarketPrice(parseFloat(e.target.value))}
              className="w-full h-2.5 bg-[#E8DDD4] rounded-lg appearance-none cursor-pointer accent-[#E87A5D]"
            />
            <div className="flex justify-between text-[11px] text-[#8C7A70] mt-1">
              <span>R$ 5,50 (promoção)</span>
              <span>R$ 8,00 (médio)</span>
              <span>R$ 11,00 (marca nobre)</span>
            </div>
          </div>

          {/* Live updated recipes cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {sampleRecipes.map((r, i) => {
              const currentTotalCost = r.baseFixedCost + (condensedMilkMarketPrice * r.condensedUnits);
              const salePrice = currentTotalCost * (1 + r.margin);
              const netProfit = salePrice - currentTotalCost;

              return (
                <div key={i} className="bg-white rounded-xl p-4 border border-[#EADBCE] shadow-xs hover:border-[#E87A5D] transition-colors">
                  <div className="text-[11px] text-[#8C7A70] font-semibold">Receita Cadastrada</div>
                  <h5 className="font-bold text-xs sm:text-sm text-[#352219] mt-0.5 line-clamp-1">{r.name}</h5>
                  <div className="text-[10px] text-[#A89890] mt-0.5">Usa {r.condensedUnits} lata(s)</div>

                  <div className="mt-3 pt-3 border-t border-[#F5EBE1] flex items-center justify-between text-xs">
                    <span className="text-[#7A6961]">Novo Custo:</span>
                    <span className="font-semibold text-[#352219]">R$ {currentTotalCost.toFixed(2).replace('.', ',')}</span>
                  </div>

                  <div className="mt-1 flex items-center justify-between text-xs">
                    <span className="text-[#7A6961]">Lucro Líquido:</span>
                    <span className="font-bold text-emerald-700">+ R$ {netProfit.toFixed(2).replace('.', ',')}</span>
                  </div>

                  <div className="mt-2.5 bg-[#FDF4EE] p-2 rounded-lg text-center border border-[#F5DACD]">
                    <span className="text-[10px] text-[#8C3A24] font-semibold uppercase block">Preço de Venda Sugerido</span>
                    <span className="text-base font-extrabold text-[#9A3412]">
                      R$ {salePrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EBDAD0]">
            <p className="text-xs text-[#735F55] text-center sm:text-left">
              ✓ Você economiza em média <strong>4 horas por mês</strong> só por não ter que recalcular cada bolo na mão.
            </p>
            <button
              onClick={onCtaClick}
              className="text-xs font-bold text-[#E87A5D] hover:text-[#B33920] flex items-center gap-1 cursor-pointer"
            >
              Garantir o App com Desconto
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
