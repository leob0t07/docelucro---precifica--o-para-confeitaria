import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ChevronDown, 
  HelpCircle, 
  ArrowRight, 
  Lock, 
  Sparkles,
  Smartphone,
  RefreshCw,
  MailCheck,
  CheckCircle2
} from 'lucide-react';

interface GuaranteeAndFaqSectionProps {
  onCtaClick: () => void;
}

export const GuaranteeAndFaqSection: React.FC<GuaranteeAndFaqSectionProps> = ({ onCtaClick }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Preciso de computador?',
      a: 'Não! O DoceLucro é 100% funcional no celular (funciona perfeitamente em aparelhos Android e iPhone). Você pode usar com o celular apoiado no suporte da cozinha enquanto pesa os ingredientes.',
      icon: Smartphone,
    },
    {
      q: 'E se o preço dos ingredientes mudar?',
      a: 'Você altera em um clique e o app atualiza automaticamente todas as receitas onde aquele ingrediente é usado! Nunca mais perca tempo recalculando dezenas de cadernos quando a lata de leite condensado subir.',
      icon: RefreshCw,
    },
    {
      q: 'Como recebo o acesso?',
      a: 'Logo após a confirmação do pagamento (instantâneo no PIX ou Cartão), você recebe um e-mail e uma mensagem no WhatsApp com o link direto de login e acesso ao app e aos bônus.',
      icon: MailCheck,
    },
    {
      q: 'Sou péssima em matemática e odeio números, vou conseguir usar?',
      a: 'Com certeza! O aplicativo foi desenhado especialmente para quem tem pavor de matemática e planilhas. Você só digita quanto pagou no pacote do mercado e quanto usou na receita. Todas as fórmulas e divisões são feitas de forma invisível.',
      icon: Sparkles,
    },
    {
      q: 'Existe limite de receitas que posso cadastrar?',
      a: 'Não! Durante todo o seu período de acesso, você tem liberdade total para cadastrar centenas de receitas, recheios, massas, coberturas e variações.',
      icon: CheckCircle2,
    },
    {
      q: 'Como funciona a garantia de 7 dias?',
      a: 'É uma garantia incondicional e blindada. Você entra, cadastra suas receitas e testa na sua cozinha por até 7 dias corridos. Se achar que não valeu cada centavo, basta nos enviar uma única mensagem e devolvemos 100% do seu dinheiro, sem perguntas chatas.',
      icon: ShieldCheck,
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#FCF8F3] relative border-t border-[#EFE4D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Garantia Incondicional de 7 Dias Block */}
        <div className="bg-white rounded-3xl p-5 sm:p-10 border-2 border-emerald-500/30 shadow-xl mb-12 sm:mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-center sm:text-left">
            {/* Seal Graphic */}
            <div className="shrink-0 relative">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-emerald-700 to-emerald-500 text-white flex flex-col items-center justify-center shadow-lg shadow-emerald-600/30 border-4 border-emerald-100">
                <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-100" />
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider mt-0.5">7 DIAS</span>
                <span className="text-[8px] sm:text-[9px] font-bold text-emerald-100">GARANTIA</span>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <span>Risco Zero Absoluto para Você</span>
              </div>

              {/* Text - Verbatim from user prompt */}
              <h3 className="text-lg sm:text-2xl font-bold text-[#2E1D16] font-display">
                Garantia Incondicional de 7 Dias
              </h3>

              <p className="text-xs sm:text-base text-[#614D44] leading-relaxed">
                &quot;Teste o aplicativo por 7 dias na sua cozinha. Se você não conseguir precificar suas receitas com mais facilidade e clareza, devolvemos 100% do seu dinheiro com um clique.&quot;
              </p>

              <p className="text-[11px] sm:text-xs text-[#8C7A70]">
                Sem letras miúdas, sem formulários burocráticos. Você testa sem qualquer medo.
              </p>
            </div>
          </div>
        </div>

        {/* Section FAQ Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A64B34] bg-[#FDEFEA] px-3.5 py-1.5 rounded-full border border-[#FAD6CA]">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2E1D16] font-display">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-sm text-[#6E5B52]">
            Tudo o que você precisa saber antes de começar a calcular seus preços com lucro.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            const Icon = faq.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#EDE2D8] transition-all overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6F2] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF0E8] text-[#E87A5D] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm sm:text-base text-[#352219]">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8C7A70] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#E87A5D]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#614E45] leading-relaxed border-t border-[#F5EDE6] bg-[#FCFAF7]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA inside FAQ */}
        <div className="mt-14 text-center space-y-4">
          <p className="text-sm text-[#6E5B52]">
            Pronta para dar adeus às contas no caderno e colocar lucro de verdade no bolso?
          </p>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#E87A5D] via-[#DF6446] to-[#C84F32] hover:from-[#E06D4F] hover:to-[#B63E23] text-white font-extrabold text-base sm:text-lg shadow-xl shadow-[#E87A5D]/30 transition-all cursor-pointer"
          >
            <span>QUERO CALCULAR MEUS PREÇOS COM LUCRO</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
