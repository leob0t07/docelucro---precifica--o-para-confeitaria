import React, { useState } from 'react';
import { Check, X, Sparkles, AlertTriangle } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const comparisons = [
    {
      feature: 'Tempo para precificar uma receita',
      notebook: '20 a 40 minutos com calculadora',
      excel: '15 a 30 min (se não quebrar fórmula)',
      doceLucro: '30 segundos no celular',
    },
    {
      feature: 'Funciona enquanto cozinha na bancada',
      notebook: 'Mancha com farinha e gordura',
      excel: 'Precisa ligar o computador',
      doceLucro: 'Perfeito no celular com toque rápido',
    },
    {
      feature: 'Quando o leite condensado sobe de preço',
      notebook: 'Precisa recalcular e rasurar tudo',
      excel: 'Caçar onde o ingrediente está nas abas',
      doceLucro: 'Altera 1 vez e atualiza todas as receitas',
    },
    {
      feature: 'Cálculo de gás, fita e embalagem',
      notebook: 'Quase sempre esquecido (prejuízo)',
      excel: 'Difícil de ratear',
      doceLucro: 'Incluso e rateado automaticamente',
    },
    {
      feature: 'Cálculo do seu salário (mão de obra)',
      notebook: 'Não sabe quanto cobrar por hora',
      excel: 'Fórmulas confusas',
      doceLucro: 'Salário justo garantido na margem',
    },
    {
      feature: 'Backup seguro se você perder o celular',
      notebook: 'Se molhar ou rasgar, perde tudo',
      excel: 'Depende de salvar arquivos',
      doceLucro: '100% seguro em nuvem criptografada',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A64B34] bg-[#FDF0EC] px-3.5 py-1.5 rounded-full border border-[#F9D6CB]">
            Chega de Sofrer no Fogão
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2E1D16] mt-3 font-display">
            Por que o DoceLucro é incomparável?
          </h2>
          <p className="text-xs sm:text-sm text-[#6E5B52] mt-2">
            Veja a diferença entre tentar fazer tudo no caderno, sofrer com planilhas ou usar nosso aplicativo de bolso.
          </p>
        </div>

        {/* 1. MOBILE RESPONSIVE CARDS (ZERO HORIZONTAL SCROLLING ON SMARTPHONES) */}
        <div className="md:hidden space-y-3.5">
          {comparisons.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#FFFDF9] rounded-2xl p-4 border border-[#EDE2D8] shadow-xs space-y-3"
            >
              {/* Feature Header */}
              <div className="border-b border-[#F2E7DC] pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A64B34] block">
                  Critério {index + 1} de {comparisons.length}
                </span>
                <h4 className="font-bold text-sm text-[#2E1D16] mt-0.5">
                  {item.feature}
                </h4>
              </div>

              {/* Highlighted Winner: DoceLucro */}
              <div className="bg-gradient-to-r from-[#FFF5EE] to-[#FEEDE6] p-3 rounded-xl border border-[#F4A790] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#9A3412]">
                  <Sparkles className="w-3.5 h-3.5 text-[#E87A5D]" />
                  <span>No App DoceLucro:</span>
                </div>
                <div className="text-xs font-bold text-[#2E1D16] flex items-center gap-1.5 pl-1">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] shrink-0 font-black">
                    ✓
                  </span>
                  <span>{item.doceLucro}</span>
                </div>
              </div>

              {/* Comparison between Notebook & Excel side by side without overflowing */}
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-0.5">
                <div className="p-2.5 rounded-xl bg-[#FAF6F2] border border-[#EDE2D8] space-y-1">
                  <span className="text-[10px] font-bold text-[#8C7A70] uppercase block">
                    Caderno
                  </span>
                  <div className="text-[#6E5B52] flex items-start gap-1 leading-tight">
                    <span className="text-rose-500 font-bold shrink-0 text-xs">✕</span>
                    <span>{item.notebook}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#FAF6F2] border border-[#EDE2D8] space-y-1">
                  <span className="text-[10px] font-bold text-[#8C7A70] uppercase block">
                    Planilhas
                  </span>
                  <div className="text-[#6E5B52] flex items-start gap-1 leading-tight">
                    <span className="text-amber-500 font-bold shrink-0 text-xs">⚠</span>
                    <span>{item.excel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. DESKTOP / TABLET FULL COMPARISON MATRIX TABLE */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-[#EDE2D8] shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#EDE2D8]">
                <th className="p-4 sm:p-5 bg-[#FAF6F2] text-xs font-bold text-[#6E5B52] uppercase tracking-wider w-1/3">
                  Critério de Comparação
                </th>
                <th className="p-4 sm:p-5 bg-[#FAF6F2] text-xs font-semibold text-[#8C7A70] text-center w-1/5">
                  Caderno de Notas
                </th>
                <th className="p-4 sm:p-5 bg-[#FAF6F2] text-xs font-semibold text-[#8C7A70] text-center w-1/5">
                  Planilhas de Excel
                </th>
                <th className="p-4 sm:p-5 bg-gradient-to-b from-[#FFF2EC] to-[#FCEAE2] text-xs font-bold text-[#B33920] text-center w-1/4 border-x border-[#F7C6B7]">
                  <div className="flex items-center justify-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#E87A5D]" />
                    <span>App DoceLucro</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2E7DC] text-xs sm:text-sm">
              {comparisons.map((row, index) => (
                <tr key={index} className="hover:bg-[#FCF9F5] transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#382B26] bg-[#FCFAF7]">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-center text-[#7A6961] bg-white">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-rose-500 font-bold text-xs">❌</span>
                      <span className="text-xs">{row.notebook}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-center text-[#7A6961] bg-white">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-amber-500 font-bold text-xs">⚠️</span>
                      <span className="text-xs">{row.excel}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-center font-bold text-[#24130A] bg-[#FFF8F4] border-x border-[#F7C6B7]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-emerald-600 font-bold text-sm">✅</span>
                      <span className="text-xs text-[#2E1D16]">{row.doceLucro}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
