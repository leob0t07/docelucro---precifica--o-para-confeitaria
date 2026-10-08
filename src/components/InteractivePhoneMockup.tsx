import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  ChefHat, 
  DollarSign, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  RotateCcw,
  Percent,
  Sliders,
  ChevronRight,
  ShieldCheck,
  Package
} from 'lucide-react';
import logoImg from '../assets/images/logo.png';

interface RecipePreset {
  id: string;
  name: string;
  category: string;
  baseIngredients: { name: string; quantity: string; cost: number }[];
  packagingCost: number;
  energyGasCost: number;
  laborMinutes: number;
  laborHourlyRate: number; // default R$ 25/hour
  targetMarginPercent: number;
}

const PRESETS: RecipePreset[] = [
  {
    id: 'bolo-cenoura',
    name: 'Bolo de Cenoura c/ Brigadeiro',
    category: 'Bolos Caseiros (Aro 20)',
    baseIngredients: [
      { name: 'Leite Condensado (395g)', quantity: '1 lata', cost: 7.20 },
      { name: 'Chocolate em Pó 50% (80g)', quantity: '80g', cost: 2.10 },
      { name: 'Farinha de Trigo Especial', quantity: '300g', cost: 1.40 },
      { name: 'Cenouras Frescas + Óleo + Açúcar', quantity: 'porcionado', cost: 2.80 },
      { name: 'Ovos Selecionados', quantity: '3 un', cost: 2.40 },
    ],
    packagingCost: 4.20, // Caixa craft + fita cetim + tag
    energyGasCost: 2.50, // Forno 45min
    laborMinutes: 45,
    laborHourlyRate: 24.00,
    targetMarginPercent: 120,
  },
  {
    id: 'brigadeiro-gourmet',
    name: 'Cento de Brigadeiro Belga',
    category: 'Doces Finos (100 un)',
    baseIngredients: [
      { name: 'Leite Condensado Moça', quantity: '3 latas', cost: 21.60 },
      { name: 'Creme de Leite 20% gordura', quantity: '2 cx', cost: 7.80 },
      { name: 'Chocolate Callebaut Split', quantity: '350g', cost: 26.50 },
      { name: 'Manteiga Extra', quantity: '60g', cost: 3.20 },
    ],
    packagingCost: 9.50, // Forminhas 4 pétalas + tapete + caixa
    energyGasCost: 3.50,
    laborMinutes: 60,
    laborHourlyRate: 24.00,
    targetMarginPercent: 130,
  },
  {
    id: 'brownie-fudgy',
    name: 'Brownie Recheado Pedaço',
    category: 'Porções Individuais (10 un)',
    baseIngredients: [
      { name: 'Chocolate Meio Amargo', quantity: '300g', cost: 11.20 },
      { name: 'Manteiga Sem Sal', quantity: '180g', cost: 9.40 },
      { name: 'Açúcar Demerara + Ovos', quantity: 'porcionado', cost: 4.80 },
      { name: 'Farinha e Cacau 100%', quantity: '200g', cost: 3.10 },
      { name: 'Recheio de Ninho Cremoso', quantity: '250g', cost: 8.50 },
    ],
    packagingCost: 6.80, // Saquinhos selados + adesivo vinil
    energyGasCost: 2.20,
    laborMinutes: 40,
    laborHourlyRate: 24.00,
    targetMarginPercent: 110,
  }
];

export const InteractivePhoneMockup: React.FC = () => {
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(0);
  const currentRecipe = PRESETS[selectedRecipeIndex];

  // Modifiers
  const [condensedMilkCost, setCondensedMilkCost] = useState(7.20);
  const [marginPercent, setMarginPercent] = useState(120);
  const [includePackaging, setIncludePackaging] = useState(true);
  const [includeLabor, setIncludeLabor] = useState(true);

  // Calculation
  const ingredientsCost = currentRecipe.baseIngredients.reduce((acc, item) => {
    // If it's condensed milk, allow user slider to affect it!
    if (item.name.toLowerCase().includes('leite condensado')) {
      const multiplier = item.quantity.includes('3') ? 3 : 1;
      return acc + (condensedMilkCost * multiplier);
    }
    return acc + item.cost;
  }, 0);

  const packaging = includePackaging ? currentRecipe.packagingCost : 0;
  const gasEnergy = currentRecipe.energyGasCost;
  const labor = includeLabor ? (currentRecipe.laborHourlyRate / 60) * currentRecipe.laborMinutes : 0;

  const totalCost = ingredientsCost + packaging + gasEnergy + labor;
  const suggestedPrice = totalCost * (1 + marginPercent / 100);
  const netProfit = suggestedPrice - totalCost;

  return (
    <div className="relative mx-auto w-full max-w-[340px] xs:max-w-[365px] sm:max-w-[400px]">
      {/* Decorative Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#E87A5D]/20 via-[#F7B267]/25 to-[#4A2818]/15 rounded-[44px] blur-xl opacity-80" />

      {/* Realistic Smartphone Chassis */}
      <div className="relative bg-[#1A1817] p-2.5 sm:p-3.5 rounded-[40px] sm:rounded-[42px] shadow-2xl border-4 border-[#3D3532]">
        {/* Dynamic Island / Speaker notch */}
        <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-3.5 sm:h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#1F2937]/80 border border-slate-700/50" />
        </div>

        {/* Screen Bezel */}
        <div className="relative bg-[#FFFDF9] rounded-[30px] sm:rounded-[32px] overflow-hidden border border-[#EADBCE] text-[#332520] select-none">
          {/* Status bar */}
          <div className="pt-2 px-4 sm:px-5 pb-1 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-[#8C7A70]">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <div className="w-4 h-2 rounded-sm border border-[#8C7A70] p-0.5 flex items-center">
                <div className="w-full h-full bg-[#8C7A70] rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App Header Inside Phone */}
          <div className="px-4 pt-2 pb-3 bg-gradient-to-b from-[#FFF5EE] to-[#FFFDF9] border-b border-[#F0E4D8]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white border border-[#EADBD1] p-0.5 flex items-center justify-center shadow-xs overflow-hidden">
                  <img 
                    src={logoImg} 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3A2318] leading-tight">DoceLucro Mobile</h4>
                  <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Cálculo Instantâneo
                  </span>
                </div>
              </div>

              <div className="text-[11px] font-bold text-[#8C7A70] bg-white px-2 py-0.5 rounded-md border border-[#E8DCD4]">
                30s
              </div>
            </div>

            {/* Recipe Selector Pills inside Phone */}
            <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 no-scrollbar">
              {PRESETS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedRecipeIndex(idx)}
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                    selectedRecipeIndex === idx
                      ? 'bg-[#E87A5D] text-white shadow-sm'
                      : 'bg-white text-[#705C53] border border-[#EADBD1] hover:bg-[#FCEEE7]'
                  }`}
                >
                  {p.name.split(' ')[0]} {p.name.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </div>

          {/* Active Recipe Header */}
          <div className="px-4 py-2.5 bg-white border-b border-[#F5EBE1]">
            <span className="text-[10px] text-[#A89890] uppercase tracking-wider font-semibold block">
              {currentRecipe.category}
            </span>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#332520]">{currentRecipe.name}</h3>
              <span className="text-[10px] font-medium text-[#7A6961] bg-[#FAF3EC] px-2 py-0.5 rounded">
                ⏱️ {currentRecipe.laborMinutes} min preparo
              </span>
            </div>
          </div>

          {/* Ingredients list breakdown inside Phone */}
          <div className="p-3.5 space-y-2 max-h-[175px] overflow-y-auto text-xs bg-[#FCFAF7]">
            <div className="text-[11px] font-bold text-[#63534B] flex items-center justify-between">
              <span>Composição da Receita:</span>
              <span className="text-[10px] text-emerald-700 font-semibold">Tudo incluído</span>
            </div>

            {currentRecipe.baseIngredients.map((ing, i) => (
              <div key={i} className="flex items-center justify-between py-1 px-2 rounded bg-white border border-[#F2E7DC] text-[11px]">
                <div className="flex flex-col">
                  <span className="font-medium text-[#382B26]">{ing.name}</span>
                  <span className="text-[9px] text-[#9E8E85]">{ing.quantity}</span>
                </div>
                <span className="font-semibold text-[#4A3932]">
                  R$ {(ing.name.toLowerCase().includes('leite condensado') ? (condensedMilkCost * (ing.quantity.includes('3') ? 3 : 1)) : ing.cost).toFixed(2).replace('.', ',')}
                </span>
              </div>
            ))}

            {/* Hidden Costs explicitly highlighted */}
            <div className="pt-1 border-t border-[#EFE3D7] space-y-1">
              <div className="flex items-center justify-between px-2 py-0.5 text-[10px] text-[#7A6860]">
                <span className="flex items-center gap-1">
                  📦 Embalagem & Fitas
                </span>
                <span className="font-semibold text-[#4A3932]">
                  {includePackaging ? `R$ ${packaging.toFixed(2).replace('.', ',')}` : 'Zerado'}
                </span>
              </div>
              <div className="flex items-center justify-between px-2 py-0.5 text-[10px] text-[#7A6860]">
                <span className="flex items-center gap-1">
                  🔥 Gás & Eletricidade
                </span>
                <span className="font-semibold text-[#4A3932]">R$ {gasEnergy.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex items-center justify-between px-2 py-0.5 text-[10px] text-[#7A6860]">
                <span className="flex items-center gap-1">
                  👩‍🍳 Mão de Obra ({currentRecipe.laborMinutes}min)
                </span>
                <span className="font-semibold text-[#4A3932]">
                  {includeLabor ? `R$ ${labor.toFixed(2).replace('.', ',')}` : 'Zerado'}
                </span>
              </div>
            </div>
          </div>

          {/* Live Sliders inside phone for user engagement */}
          <div className="p-3 bg-white border-t border-[#F0E4D8] space-y-2">
            <div>
              <div className="flex items-center justify-between text-[10px] font-semibold text-[#5A4942] mb-0.5">
                <span className="flex items-center gap-1">
                  🥫 Preço do Leite Condensado no mercado:
                </span>
                <span className="text-[#E87A5D] font-bold">R$ {condensedMilkCost.toFixed(2).replace('.', ',')}</span>
              </div>
              <input
                type="range"
                min="5.0"
                max="10.0"
                step="0.2"
                value={condensedMilkCost}
                onChange={(e) => setCondensedMilkCost(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-[#E8DDD4] rounded-lg appearance-none cursor-pointer accent-[#E87A5D]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between text-[10px] font-semibold text-[#5A4942] mb-0.5">
                <span>Margem de Lucro Desejada:</span>
                <span className="text-emerald-700 font-bold">{marginPercent}%</span>
              </div>
              <input
                type="range"
                min="60"
                max="200"
                step="10"
                value={marginPercent}
                onChange={(e) => setMarginPercent(parseInt(e.target.value))}
                className="w-full h-1.5 bg-[#E8DDD4] rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>
          </div>

          {/* Final Results Banner - The magic moment */}
          <div className="p-3.5 bg-gradient-to-br from-[#3D2214] to-[#24130A] text-white">
            <div className="grid grid-cols-2 gap-2 text-left mb-2">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-xs">
                <span className="text-[10px] text-amber-200 block">Custo Total Real</span>
                <span className="text-sm font-bold text-white">
                  R$ {totalCost.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <div className="bg-emerald-950/60 border border-emerald-500/30 p-2 rounded-xl">
                <span className="text-[10px] text-emerald-300 block">Lucro no Bolso</span>
                <span className="text-sm font-bold text-emerald-400">
                  + R$ {netProfit.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#E87A5D] to-[#D46042] p-2.5 rounded-xl text-center shadow-md">
              <span className="text-[10px] text-amber-100 uppercase tracking-wider font-semibold block">
                Preço Sugerido de Venda
              </span>
              <div className="text-xl font-extrabold text-white tracking-tight">
                R$ {suggestedPrice.toFixed(2).replace('.', ',')}
              </div>
              <span className="text-[9px] text-amber-100/90 block mt-0.5">
                Margem de {marginPercent}% aplicada com segurança
              </span>
            </div>
          </div>

          {/* Home indicator bar */}
          <div className="h-4 bg-[#24130A] flex items-center justify-center">
            <div className="w-24 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Callout badge */}
      <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-[#EADBCE] hidden sm:flex items-center gap-2.5 animate-bounce-subtle z-20">
        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
          ✓
        </div>
        <div className="text-left">
          <p className="text-xs font-bold text-[#3A2318]">Cálculo em 30 Segundos</p>
          <p className="text-[10px] text-[#7A6961]">Gás, fita e mão de obra inclusos</p>
        </div>
      </div>
    </div>
  );
};
