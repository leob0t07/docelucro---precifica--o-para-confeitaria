import React from 'react';
import { Star, Quote, CheckCircle, TrendingUp, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Mariana Silveira',
      city: 'São Paulo - SP',
      specialty: 'Bolos Caseiros & Vulcão',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
      quote:
        'Eu cobrava R$ 35 num bolo caseiro que na minha cabeça custava R$ 15. Quando coloquei no DoceLucro com gás, caixa kraft e fita, descobri que me custava R$ 26! Eu tinha R$ 9 de sobra para 1 hora de trabalho. Ajustei o cardápio e no primeiro mês tirei R$ 1.840 de lucro limpo.',
      profitGain: '+ R$ 1.840 / mês de lucro real',
    },
    {
      name: 'Camila Rossi',
      city: 'Belo Horizonte - MG',
      specialty: 'Doces Finos & Brigadeiros Belga',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
      quote:
        'A função de atualizar o leite condensado uma vez e recalcular todas as 15 receitas de brigadeiro me salvou a vida! Toda semana o preço muda no atacado. Eu perdia tardes de domingo inteiras fazendo contas. Agora em 10 segundos tá tudo ajustado.',
      profitGain: 'Economia de 5 horas por semana',
    },
    {
      name: 'Renata Albuquerque',
      city: 'Curitiba - PR',
      specialty: 'Bentô Cakes & Brownies',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
      quote:
        'O mini-curso de como vender sem dar desconto que vem de bônus mudou minha postura com os clientes que pediam pechincha. Parei de ter vergonha do meu preço. Minhas clientes agora pagam com sorriso no rosto e elogiam o capricho!',
      profitGain: 'Zero descontos concedidos',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF5EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9E3E26] bg-[#FCE6DF] px-3.5 py-1.5 rounded-full border border-[#F5C7BA]">
            Histórias de Quem Vive da Confeitaria
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E1D16] font-display">
            Confeiteiras que pararam de pagar para trabalhar
          </h2>
          <p className="text-xs sm:text-base text-[#6E5B52]">
            Mais de 3.420 mulheres confeiteiras usam o DoceLucro para valorizar cada minuto que passam na frente do fogão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-7 border border-[#EBDCD0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E87A5D]/30" />
                </div>

                <p className="text-xs sm:text-sm text-[#57453C] leading-relaxed italic mb-6">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div>
                {/* Highlight Badge */}
                <div className="bg-[#F0FAF4] border border-[#C5E8D3] px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-800 flex items-center gap-1.5 mb-4">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.profitGain}</span>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#F2E7DC]">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#E87A5D]/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#352219]">{t.name}</h4>
                    <p className="text-[11px] text-[#8C7A70]">{t.specialty} • {t.city}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
