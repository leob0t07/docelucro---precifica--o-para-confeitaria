import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  Calculator, 
  Sparkles, 
  Clock, 
  Package, 
  Flame, 
  DollarSign, 
  TrendingUp, 
  ArrowRight,
  RotateCcw
} from 'lucide-react';

interface Ingredient {
  id: string;
  name: string;
  packageCost: number;
  packageWeightGrams: number;
  recipeGrams: number;
}

interface LiveCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToOffer: () => void;
}

export const LiveInteractiveCalculatorModal: React.FC<LiveCalculatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToOffer,
}) => {
  const [recipeName, setRecipeName] = useState('Bolo Artesanal da Casa');
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: '1', name: 'Leite Condensado (Lata)', packageCost: 7.20, packageWeightGrams: 395, recipeGrams: 395 },
    { id: '2', name: 'Chocolate em Pó 50% (Pacote)', packageCost: 24.00, packageWeightGrams: 1000, recipeGrams: 90 },
    { id: '3', name: 'Farinha de Trigo Especial', packageCost: 5.50, packageWeightGrams: 1000, recipeGrams: 300 },
    { id: '4', name: 'Manteiga Extra Sem Sal', packageCost: 14.00, packageWeightGrams: 200, recipeGrams: 60 },
  ]);

  const [packagingCost, setPackagingCost] = useState(4.50);
  const [gasAndEnergyCost, setGasAndEnergyCost] = useState(2.20);
  const [laborHours, setLaborHours] = useState(0.75); // 45 min
  const [desiredHourlySalary, setDesiredHourlySalary] = useState(24.00); // R$ 24/h
  const [targetMargin, setTargetMargin] = useState(120); // 120%

  if (!isOpen) return null;

  const addIngredient = () => {
    const newId = String(Date.now());
    setIngredients([
      ...ingredients,
      { id: newId, name: 'Novo Ingrediente', packageCost: 10.00, packageWeightGrams: 1000, recipeGrams: 100 },
    ]);
  };

  const removeIngredient = (id: string) => {
    if (ingredients.length <= 1) return;
    setIngredients(ingredients.filter((i) => i.id !== id));
  };

  const updateIngredient = (id: string, field: keyof Ingredient, value: any) => {
    setIngredients(
      ingredients.map((ing) => (ing.id === id ? { ...ing, [field]: value } : ing))
    );
  };

  // Calculations
  const ingredientsCost = ingredients.reduce((acc, item) => {
    const costPerGram = item.packageWeightGrams > 0 ? item.packageCost / item.packageWeightGrams : 0;
    return acc + (costPerGram * item.recipeGrams);
  }, 0);

  const laborCost = laborHours * desiredHourlySalary;
  const totalCost = ingredientsCost + packagingCost + gasAndEnergyCost + laborCost;
  const suggestedPrice = totalCost * (1 + targetMargin / 100);
  const netProfit = suggestedPrice - totalCost;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EDE2D8] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#331E14] text-white p-5 flex items-center justify-between border-b border-[#4A2D1F]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E87A5D] text-white flex items-center justify-center shadow-md">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg font-display text-white">Simulador Real de Receitas</h3>
              <p className="text-xs text-[#DECBC0]">Teste a lógica exata do DoceLucro na prática</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          
          {/* Recipe Name Input */}
          <div>
            <label className="text-xs font-bold text-[#352219] uppercase tracking-wider block mb-1">
              Nome da Sua Receita:
            </label>
            <input
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED1C7] text-sm font-semibold text-[#2E1D16] focus:outline-none focus:border-[#E87A5D] bg-[#FCFAF7]"
            />
          </div>

          {/* Ingredients list */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-[#352219] uppercase tracking-wider">
                Ingredientes Utilizados:
              </label>
              <button
                type="button"
                onClick={addIngredient}
                className="text-xs font-bold text-[#E87A5D] hover:text-[#B33920] flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Adicionar Ingrediente
              </button>
            </div>

            <div className="space-y-2">
              {ingredients.map((ing) => {
                const itemCost = ing.packageWeightGrams > 0 ? (ing.packageCost / ing.packageWeightGrams) * ing.recipeGrams : 0;

                return (
                  <div key={ing.id} className="p-3 bg-[#FAF5EE] rounded-xl border border-[#EBDCD0] text-xs flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <input
                      type="text"
                      value={ing.name}
                      onChange={(e) => updateIngredient(ing.id, 'name', e.target.value)}
                      className="font-medium text-[#2E1D16] bg-white px-2 py-1.5 rounded border border-[#DFD1C6] flex-1 w-full sm:w-auto"
                      placeholder="Nome do ingrediente"
                    />

                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-between sm:justify-start">
                      <div className="flex items-center gap-1">
                        <span className="text-[#8C7A70] text-[10px]">Paguei R$:</span>
                        <input
                          type="number"
                          step="0.10"
                          value={ing.packageCost}
                          onChange={(e) => updateIngredient(ing.id, 'packageCost', parseFloat(e.target.value) || 0)}
                          className="w-14 sm:w-16 bg-white px-1.5 py-1 rounded border border-[#DFD1C6]"
                        />
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="text-[#8C7A70] text-[10px]">Pacote (g):</span>
                        <input
                          type="number"
                          value={ing.packageWeightGrams}
                          onChange={(e) => updateIngredient(ing.id, 'packageWeightGrams', parseInt(e.target.value) || 1)}
                          className="w-14 sm:w-16 bg-white px-1.5 py-1 rounded border border-[#DFD1C6]"
                        />
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="text-[#8C7A70] text-[10px]">Usei (g):</span>
                        <input
                          type="number"
                          value={ing.recipeGrams}
                          onChange={(e) => updateIngredient(ing.id, 'recipeGrams', parseInt(e.target.value) || 0)}
                          className="w-14 sm:w-16 bg-white px-1.5 py-1 rounded border border-[#DFD1C6]"
                        />
                      </div>

                      <div className="font-bold text-[#E87A5D] min-w-[60px] text-right">
                        R$ {itemCost.toFixed(2).replace('.', ',')}
                      </div>

                      {ingredients.length > 1 && (
                        <button
                          onClick={() => removeIngredient(ing.id)}
                          className="text-[#99877E] hover:text-rose-600 p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indirect & Labor Costs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#FCF8F3] rounded-2xl border border-[#EDE1D4] text-xs">
            <div>
              <span className="font-semibold text-[#5A4840] block mb-1">📦 Embalagem & Laço (R$):</span>
              <input
                type="number"
                step="0.5"
                value={packagingCost}
                onChange={(e) => setPackagingCost(parseFloat(e.target.value) || 0)}
                className="w-full bg-white px-3 py-1.5 rounded-lg border border-[#DED1C7]"
              />
            </div>

            <div>
              <span className="font-semibold text-[#5A4840] block mb-1">🔥 Gás & Energia (R$):</span>
              <input
                type="number"
                step="0.5"
                value={gasAndEnergyCost}
                onChange={(e) => setGasAndEnergyCost(parseFloat(e.target.value) || 0)}
                className="w-full bg-white px-3 py-1.5 rounded-lg border border-[#DED1C7]"
              />
            </div>

            <div>
              <span className="font-semibold text-[#5A4840] block mb-1">👩‍🍳 Tempo de Mão de Obra:</span>
              <select
                value={laborHours}
                onChange={(e) => setLaborHours(parseFloat(e.target.value))}
                className="w-full bg-white px-3 py-1.5 rounded-lg border border-[#DED1C7]"
              >
                <option value={0.33}>20 minutos (R$ {(0.33 * desiredHourlySalary).toFixed(2)})</option>
                <option value={0.5}>30 minutos (R$ {(0.5 * desiredHourlySalary).toFixed(2)})</option>
                <option value={0.75}>45 minutos (R$ {(0.75 * desiredHourlySalary).toFixed(2)})</option>
                <option value={1.0}>1 hora (R$ {(1.0 * desiredHourlySalary).toFixed(2)})</option>
                <option value={1.5}>1h30 (R$ {(1.5 * desiredHourlySalary).toFixed(2)})</option>
              </select>
            </div>
          </div>

          {/* Margin Slider */}
          <div className="p-4 bg-white rounded-2xl border border-[#EBDCD0]">
            <div className="flex justify-between items-center text-xs font-bold text-[#352219] mb-1">
              <span>Margem de Lucro Desejada no Bolso:</span>
              <span className="text-emerald-700 font-extrabold text-sm">{targetMargin}%</span>
            </div>
            <input
              type="range"
              min="50"
              max="200"
              step="5"
              value={targetMargin}
              onChange={(e) => setTargetMargin(parseInt(e.target.value))}
              className="w-full h-2 bg-[#E8DDD4] rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          {/* Final Calculated Card */}
          <div className="p-5 bg-gradient-to-br from-[#331E14] to-[#1C0F08] rounded-2xl text-white space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-white/10 p-2.5 rounded-xl">
                <span className="text-[#DECBC0] text-[10px] block">Custo dos Ingredientes</span>
                <span className="font-bold text-sm text-white">R$ {ingredientsCost.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl">
                <span className="text-[#DECBC0] text-[10px] block">Custo Total de Produção</span>
                <span className="font-bold text-sm text-white">R$ {totalCost.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-emerald-950/70 border border-emerald-500/40 p-2.5 rounded-xl">
                <span className="text-emerald-300 text-[10px] block">Lucro Líquido Real</span>
                <span className="font-bold text-sm text-emerald-400">+ R$ {netProfit.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <div className="text-center pt-2 border-t border-white/15">
              <span className="text-xs text-amber-200 uppercase font-bold tracking-wider block">
                Preço Sugerido de Venda
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white font-display my-1">
                R$ {suggestedPrice.toFixed(2).replace('.', ',')}
              </div>
              <p className="text-[11px] text-[#DECBC0]">
                Com esse valor você cobre todos os insumos, paga sua hora e guarda R$ {netProfit.toFixed(2).replace('.', ',')} de lucro limpo.
              </p>
            </div>
          </div>

          {/* Action CTA */}
          <button
            onClick={() => {
              onClose();
              onProceedToOffer();
            }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E87A5D] via-[#DF6446] to-[#C84F32] hover:from-[#E06D4F] hover:to-[#B63E23] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#E87A5D]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>QUERO SALVAR MINHAS RECEITAS NO APP COM DESCONTO</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>
      </div>
    </div>
  );
};
