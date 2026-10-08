import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Smartphone, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Cake,
  DollarSign
} from 'lucide-react';
import logoImg from '../assets/images/logo.png';

interface GuidedDemoSectionProps {
  onCtaClick: () => void;
  onOpenCalculator: () => void;
}

export const GuidedDemoSection: React.FC<GuidedDemoSectionProps> = ({ onCtaClick, onOpenCalculator }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSeconds, setCurrentSeconds] = useState(12);

  // Playback timer loop up to 45 seconds
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSeconds((prev) => {
          if (prev >= 45) {
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Determine stage based on current seconds (as specified in brief)
  // 0 a 10s: Abrindo o app.
  // 10 a 30s: Digitando o preço dos ingredientes de um bolo caseiro.
  // 30 a 45s: Mostrando a tela final com o "Preço Sugerido de Venda" e o "Lucro Líquido".
  const stage = currentSeconds < 10 ? 1 : currentSeconds < 30 ? 2 : 3;

  const jumpToStage = (stageNum: number) => {
    if (stageNum === 1) setCurrentSeconds(3);
    if (stageNum === 2) setCurrentSeconds(15);
    if (stageNum === 3) setCurrentSeconds(35);
    setIsPlaying(true);
  };

  return (
    <section id="demonstracao" className="py-16 lg:py-24 bg-[#FFFBF7] relative border-y border-[#EDE2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B33920] bg-[#FBE5DF] px-3.5 py-1.5 rounded-full border border-[#F4C4BA]">
            Demonstração Real em 45 Segundos
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E1D16] tracking-tight leading-snug font-display">
            Veja como funciona na prática na palma da sua mão
          </h2>

          <p className="text-base text-[#6E5B52]">
            Gravado direto da tela de um celular comum. Sem enrolação: veja como cadastrar uma receita e obter seu preço seguro em menos de 1 minuto.
          </p>
        </div>

        {/* Video / Interactive Phone Walkthrough Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E8DCD2] shadow-xl overflow-hidden">
          
          {/* Top timeline steps selector */}
          <div className="grid grid-cols-3 border-b border-[#EFE5DB] bg-[#FAF5EE]">
            <button
              onClick={() => jumpToStage(1)}
              className={`p-2 sm:p-4 text-center sm:text-left transition-all border-r border-[#EFE5DB] cursor-pointer ${
                stage === 1 ? 'bg-white border-b-2 border-b-[#E87A5D]' : 'hover:bg-white/60 opacity-75'
              }`}
            >
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[10px] sm:text-xs font-bold text-[#E87A5D]">
                <span>⏱️ 0 a 10s</span>
              </div>
              <p className="text-[11px] sm:text-sm font-bold text-[#352219] mt-0.5 leading-tight">
                1. Abrindo
              </p>
              <p className="text-[11px] text-[#7A6961] hidden sm:block">Acesso direto sem login complicado</p>
            </button>

            <button
              onClick={() => jumpToStage(2)}
              className={`p-2 sm:p-4 text-center sm:text-left transition-all border-r border-[#EFE5DB] cursor-pointer ${
                stage === 2 ? 'bg-white border-b-2 border-b-[#E87A5D]' : 'hover:bg-white/60 opacity-75'
              }`}
            >
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[10px] sm:text-xs font-bold text-[#E87A5D]">
                <span>⏱️ 10 a 30s</span>
              </div>
              <p className="text-[11px] sm:text-sm font-bold text-[#352219] mt-0.5 leading-tight">
                2. Ingredientes
              </p>
              <p className="text-[11px] text-[#7A6961] hidden sm:block">Bolo caseiro de cenoura com calda</p>
            </button>

            <button
              onClick={() => jumpToStage(3)}
              className={`p-2 sm:p-4 text-center sm:text-left transition-all cursor-pointer ${
                stage === 3 ? 'bg-white border-b-2 border-b-[#E87A5D]' : 'hover:bg-white/60 opacity-75'
              }`}
            >
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[10px] sm:text-xs font-bold text-emerald-700">
                <span>⏱️ 30 a 45s</span>
              </div>
              <p className="text-[11px] sm:text-sm font-bold text-[#352219] mt-0.5 leading-tight">
                3. Preço Final
              </p>
              <p className="text-[11px] text-[#7A6961] hidden sm:block">Preço sugerido e margem no bolso</p>
            </button>
          </div>

          {/* Screen Player Content */}
          <div className="p-4 sm:p-8 md:p-10 bg-gradient-to-br from-[#2D1B13] to-[#1F100A] text-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Simulated Phone Frame */}
              <div className="md:col-span-6 flex justify-center">
                <div className="w-[280px] sm:w-[310px] bg-[#140C07] rounded-[36px] p-2.5 border-4 border-[#422C20] shadow-2xl relative">
                  {/* Notch */}
                  <div className="w-20 h-3.5 bg-black rounded-full mx-auto mb-2" />

                  {/* Inside Screen Content based on stage */}
                  <div className="bg-[#FFFDF9] text-[#332520] rounded-[24px] p-3.5 min-h-[380px] flex flex-col justify-between overflow-hidden relative">
                    
                    {/* Scene 1: 0 - 10s: Opening App */}
                    {stage === 1 && (
                      <div className="space-y-4 animate-fadeIn my-auto text-center py-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FFF5EE] to-[#FCEAE0] p-2 border border-[#EADBCE] mx-auto flex items-center justify-center shadow-lg shadow-[#E87A5D]/20 overflow-hidden">
                          <img 
                            src={logoImg} 
                            alt="Logo DoceLucro" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-[#2E1D16] font-display">DoceLucro</h4>
                          <p className="text-xs text-[#8C7A70]">Bem-vinda, Chef Confeiteira!</p>
                        </div>
                        <div className="bg-[#FAF3EB] p-3 rounded-xl border border-[#EDE2D7] text-left space-y-2">
                          <div className="flex items-center gap-2 text-xs font-semibold text-[#4A3830]">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                            <span>Suas 20 receitas bônus já estão prontas</span>
                          </div>
                          <div className="text-[11px] text-[#7A6961]">
                            Toque no botão abaixo para criar sua primeira ficha técnica em 30 segundos.
                          </div>
                        </div>
                        <button className="w-full bg-[#E87A5D] text-white font-bold text-xs py-2.5 rounded-xl shadow-md">
                          + Nova Receita
                        </button>
                      </div>
                    )}

                    {/* Scene 2: 10 - 30s: Digitando os ingredientes do bolo caseiro */}
                    {stage === 2 && (
                      <div className="space-y-2.5 animate-fadeIn">
                        <div className="flex items-center justify-between border-b border-[#F0E4D8] pb-2">
                          <span className="text-xs font-bold text-[#352219]">Bolo de Cenoura Caseiro</span>
                          <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">
                            Digitando...
                          </span>
                        </div>

                        <div className="space-y-1.5 text-[11px]">
                          <div className="flex items-center justify-between p-1.5 bg-[#FAF3EB] rounded border border-[#EDE1D4]">
                            <span>Leite Moça 395g</span>
                            <span className="font-bold text-[#352219]">R$ 6,80</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 bg-[#FAF3EB] rounded border border-[#EDE1D4]">
                            <span>Farinha Especial (350g)</span>
                            <span className="font-bold text-[#352219]">R$ 1,50</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 bg-[#FAF3EB] rounded border border-[#EDE1D4]">
                            <span>Ovos Médios (3 unidades)</span>
                            <span className="font-bold text-[#352219]">R$ 2,40</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 bg-[#FAF3EB] rounded border border-[#EDE1D4]">
                            <span>Cenouras + Açúcar + Óleo</span>
                            <span className="font-bold text-[#352219]">R$ 2,90</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 bg-[#F2EDE8] rounded border border-[#E3D7CC] text-[#7A6961]">
                            <span>📦 Caixa Kraft + Fita de Cetim</span>
                            <span className="font-bold text-[#352219]">R$ 3,80</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 bg-[#F2EDE8] rounded border border-[#E3D7CC] text-[#7A6961]">
                            <span>🔥 Gás de Cozinha (40 min)</span>
                            <span className="font-bold text-[#352219]">R$ 2,10</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#F0E4D8] text-[10px] text-[#8C7A70] text-center italic">
                          Calculando proporção exata por grama...
                        </div>
                      </div>
                    )}

                    {/* Scene 3: 30 - 45s: Preço Sugerido & Lucro Líquido */}
                    {stage === 3 && (
                      <div className="space-y-3 animate-fadeIn my-auto">
                        <div className="text-center">
                          <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            ✓ Cálculo Concluído
                          </span>
                          <h4 className="text-sm font-bold text-[#2E1D16] mt-1">Bolo Caseiro de Cenoura</h4>
                        </div>

                        <div className="bg-[#FAF3EB] p-3 rounded-xl border border-[#EDE1D4] text-xs space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-[#6E5B52]">Custo Ingredientes:</span>
                            <span className="font-semibold">R$ 13,60</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#6E5B52]">Embalagem & Fita:</span>
                            <span className="font-semibold">R$ 3,80</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#6E5B52]">Gás & Energia:</span>
                            <span className="font-semibold">R$ 2,10</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#6E5B52]">Mão de Obra (45min):</span>
                            <span className="font-semibold">R$ 6,00</span>
                          </div>
                          <div className="pt-1.5 border-t border-[#E8DCD0] flex justify-between font-bold text-[#352219]">
                            <span>Custo Total Real:</span>
                            <span>R$ 25,50</span>
                          </div>
                        </div>

                        {/* Result highlight */}
                        <div className="bg-[#24130A] text-white p-3 rounded-xl text-center space-y-1">
                          <div className="text-[10px] text-amber-200 uppercase font-semibold">Preço Sugerido de Venda</div>
                          <div className="text-2xl font-black text-white">R$ 56,00</div>
                          <div className="text-xs text-emerald-400 font-bold">
                            + R$ 30,50 de Lucro Líquido (120%)
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bottom screen bar */}
                    <div className="w-16 h-1 bg-[#8C7A70]/40 rounded-full mx-auto mt-2" />
                  </div>
                </div>
              </div>

              {/* Step Commentary & Play Controls */}
              <div className="md:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <Clock className="w-4 h-4" />
                  <span>Passo {stage} de 3 — Reprodução Automática ({currentSeconds}s / 45s)</span>
                </div>

                {stage === 1 && (
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      0 a 10s: Abrindo o DoceLucro no celular
                    </h3>
                    <p className="text-sm text-[#E0D2C8] leading-relaxed">
                      Você não precisa ligar o computador nem abrir planilhas pesadas. O app carrega instantaneamente, com botões grandes pensados para confeiteiras que estão na correria da bancada.
                    </p>
                  </div>
                )}

                {stage === 2 && (
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      10 a 30s: Digitando os preços dos ingredientes
                    </h3>
                    <p className="text-sm text-[#E0D2C8] leading-relaxed">
                      Basta escolher os ingredientes da sua receita. O DoceLucro divide tudo sozinho: se você comprou 1kg de farinha por R$ 5,00 e usou 350g, ele já sabe o centavo exato. E já adiciona a caixa, o laço e o gás!
                    </p>
                  </div>
                )}

                {stage === 3 && (
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      30 a 45s: Preço Sugerido de Venda e Lucro no Bolso
                    </h3>
                    <p className="text-sm text-[#E0D2C8] leading-relaxed">
                      Pronto! O app mostra exatamente quanto você deve cobrar do cliente para pagar seus custos, receber seu salário e ainda colocar <strong>lucro líquido de verdade na conta bancária</strong>.
                    </p>
                  </div>
                )}

                {/* Progress Bar */}
                <div className="space-y-2 pt-2">
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#E87A5D] to-amber-400 h-full transition-all duration-300"
                      style={{ width: `${(currentSeconds / 45) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#C8B8AE]">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="flex items-center gap-1.5 text-white hover:text-amber-300 font-semibold cursor-pointer"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        <span>{isPlaying ? 'Pausar' : 'Continuar'}</span>
                      </button>

                      <button
                        onClick={() => setCurrentSeconds(0)}
                        className="flex items-center gap-1 text-[#C8B8AE] hover:text-white cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reiniciar</span>
                      </button>
                    </div>

                    <span>{45 - currentSeconds}s restantes</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onCtaClick}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#E87A5D] hover:bg-[#DF6446] text-white font-bold py-3 px-5 rounded-xl text-sm transition-all shadow-lg shadow-[#E87A5D]/30 cursor-pointer"
                  >
                    <span>Quero Precificar em 30 Segundos</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenCalculator}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-xl text-xs transition-colors border border-white/20 cursor-pointer"
                  >
                    <span>Testar Minha Receita Agora</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
