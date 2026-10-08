import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Flame, 
  CreditCard, 
  HelpCircle, 
  TrendingDown, 
  Clock, 
  BookX, 
  ArrowRight,
  Calculator
} from 'lucide-react';

interface PainPointsSectionProps {
  onCtaClick: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onCtaClick }) => {
  // Interactive Diagnostic of Invisible Loss
  const [ordersPerMonth, setOrdersPerMonth] = useState(35);
  const [missedPerOrder, setMissedPerOrder] = useState(14.50); // packaging + gas + machine fee + labor

  const monthlyLoss = ordersPerMonth * missedPerOrder;
  const yearlyLoss = monthlyLoss * 12;

  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-[#FBF6F0] relative overflow-hidden">
      {/* Decorative culinary pattern accents */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B33920] bg-[#F9E2DC] px-3.5 py-1.5 rounded-full border border-[#F2C2B7]">
            Você se identifica com esse cenário?
          </span>

          {/* Título - Verbatim from user request */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E1D16] tracking-tight leading-snug font-display">
            Você passa o fim de semana inteiro produzindo... mas na hora de olhar a conta bancária não vê a cor do dinheiro?
          </h2>

          <p className="text-base text-[#6E5B52]">
            O cansaço físico é real, os elogios dos clientes chegam toda segunda-feira, mas o saldo no banco parece não sair do lugar. Isso não acontece por falta de talento, e sim por <strong>3 armadilhas silenciosas</strong>:
          </p>
        </div>

        {/* 3 Main Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-12">
          
          {/* Card 1: Prejuízo Invisível */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm border border-[#EBDCD0] hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform">
              <span className="text-xl sm:text-2xl">❌</span>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold text-[#352219] mb-2 sm:mb-3 flex items-center gap-2">
              Prejuízo invisível
            </h3>

            <p className="text-xs sm:text-sm text-[#66544B] leading-relaxed">
              Você calcula o leite condensado e a farinha, mas <strong>esquece o gás, a embalagem bonita, a fita de cetim</strong> e as taxas que a maquininha de cartão come em cada venda.
            </p>

            <div className="mt-4 pt-3.5 border-t border-[#F2E7DC] text-xs text-[#8C3A24] font-medium flex items-center gap-1.5">
              <span>Resultado: Cada venda vaza de R$ 8 a R$ 22 do seu bolso</span>
            </div>
          </div>

          {/* Card 2: Medo de Cobrar Caro */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm border border-[#EBDCD0] hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform">
              <span className="text-xl sm:text-2xl">❌</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-[#352219] mb-2 sm:mb-3 flex items-center gap-2">
              Medo de cobrar caro
            </h3>

            <p className="text-xs sm:text-sm text-[#66544B] leading-relaxed">
              Fica com receio de perder o cliente para a concorrência e acaba cobrando <strong>um valor que paga para trabalhar</strong>. Você tem medo de parecer gananciosa ou de ouvir &quot;tá caro&quot;.
            </p>

            <div className="mt-4 pt-3.5 border-t border-[#F2E7DC] text-xs text-[#8C3A24] font-medium flex items-center gap-1.5">
              <span>Resultado: Você trabalha de graça e banca o doce dos outros</span>
            </div>
          </div>

          {/* Card 3: Falta de Tempo */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm border border-[#EBDCD0] hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform">
              <span className="text-xl sm:text-2xl">❌</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-[#352219] mb-2 sm:mb-3 flex items-center gap-2">
              Falta de tempo
            </h3>

            <p className="text-xs sm:text-sm text-[#66544B] leading-relaxed">
              Fazer conta no caderno rasurado ou abrir planilhas complicadas no computador <strong>depois de 10 horas em pé na cozinha</strong> é humanamente inviável. Você só quer descansar.
            </p>

            <div className="mt-4 pt-3.5 border-t border-[#F2E7DC] text-xs text-[#8C3A24] font-medium flex items-center gap-1.5">
              <span>Resultado: Você chuta o preço no &quot;olhômetro&quot;</span>
            </div>
          </div>

        </div>

        {/* Interactive Loss Simulator: O Teste do Prejuízo Invisível */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-br from-[#382014] to-[#201109] rounded-3xl p-5 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30">
                <AlertTriangle className="w-3.5 h-3.5" />
                Simulador de Diagnóstico Rápido
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Descubra quanto dinheiro está escorrendo pelo ralo da sua cozinha:
              </h3>

              <p className="text-sm text-[#E0D2C8] leading-relaxed">
                Mova os seletores abaixo com base na sua rotina atual e veja o impacto real no seu ano.
              </p>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-medium mb-1 text-[#F0E4D8]">
                    <span>Quantas encomendas/bolos você vende por mês?</span>
                    <strong className="text-amber-300 font-bold">{ordersPerMonth} pedidos</strong>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="120"
                    step="5"
                    value={ordersPerMonth}
                    onChange={(e) => setOrdersPerMonth(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#523526] rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-[10px] text-[#A8968B] mt-0.5">
                    <span>10 pedidos</span>
                    <span>60 pedidos</span>
                    <span>120 pedidos</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs sm:text-sm font-medium mb-1 text-[#F0E4D8]">
                    <span>Custos esquecidos por produto (gás + caixa + cartão + fita):</span>
                    <strong className="text-amber-300 font-bold">R$ {missedPerOrder.toFixed(2).replace('.', ',')}</strong>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="28"
                    step="0.5"
                    value={missedPerOrder}
                    onChange={(e) => setMissedPerOrder(parseFloat(e.target.value))}
                    className="w-full h-2 bg-[#523526] rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-[10px] text-[#A8968B] mt-0.5">
                    <span>R$ 5,00 (mínimo)</span>
                    <span>R$ 15,00 (médio)</span>
                    <span>R$ 28,00 (completo)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostic Result Card */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-sm text-center lg:text-left flex flex-col justify-between space-y-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-rose-300 font-bold block mb-1">
                  Seu Prejuízo Invisível Estimado
                </span>
                
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                  R$ {monthlyLoss.toFixed(2).replace('.', ',')}
                  <span className="text-sm font-normal text-[#E0D2C8] ml-2">/ mês</span>
                </div>

                <div className="mt-2 text-rose-300 text-sm font-medium">
                  Isso equivale a <strong className="text-rose-200 font-bold">R$ {yearlyLoss.toFixed(2).replace('.', ',')}</strong> por ano que deveriam estar na sua conta pessoal!
                </div>
              </div>

              <div className="p-3.5 bg-rose-950/40 border border-rose-500/30 rounded-xl text-xs text-[#F2D7D0] leading-relaxed">
                💡 O valor da assinatura (apenas R$ 9,99<span className="text-[10px] text-[#DECBC0]">/mês</span>) se paga literalmente no seu <strong>primeiro bolo vendido</strong> com a precificação correta.
              </div>

              <button
                onClick={onCtaClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E87A5D] hover:bg-[#DF6446] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg shadow-[#E87A5D]/25 cursor-pointer"
              >
                <span>Quero parar de perder esse dinheiro</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
