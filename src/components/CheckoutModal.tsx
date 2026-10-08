import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  Check, 
  Copy, 
  QrCode, 
  CreditCard, 
  Smartphone, 
  Gift, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Settings,
  RefreshCw,
  Link as LinkIcon
} from 'lucide-react';
import logoImg from '../assets/images/logo.png';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_CAKTO_LINK = 'https://pay.cakto.com.br/9wof6n5_1184129';

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [caktoUrl, setCaktoUrl] = useState<string>(() => {
    return localStorage.getItem('cakto_checkout_url') || DEFAULT_CAKTO_LINK;
  });
  const [inputUrl, setInputUrl] = useState<string>(caktoUrl);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);
  
  // Native fallback simulation state
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (caktoUrl) {
      setIframeLoading(true);
    }
  }, [caktoUrl, isOpen]);

  if (!isOpen) return null;

  const handleSaveCaktoUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = inputUrl.trim();
    setCaktoUrl(cleanUrl);
    localStorage.setItem('cakto_checkout_url', cleanUrl);
    setShowSettings(false);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleCopyPix = () => {
    navigator.clipboard?.writeText('00020126580014br.gov.bcb.pix0136docelucro-app-licenca-mvp-2026-9reais99520400005303986540509.995802BR5915DOCELUCRO LTDA6009SAO PAULO62070503***6304E8A1');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className={`relative w-full ${caktoUrl ? 'max-w-2xl h-[90vh]' : 'max-w-xl max-h-[92vh]'} bg-white rounded-3xl shadow-2xl border border-[#EDE2D8] overflow-hidden flex flex-col transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Cakto integration branding */}
        <div className="bg-gradient-to-r from-[#2B180E] via-[#3D2214] to-[#25130A] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#472A1B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/10 overflow-hidden shadow-md">
              <img 
                src={logoImg} 
                alt="Logo DoceLucro" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg font-display text-white">Checkout DoceLucro</h3>
                <span className="text-[10px] font-bold bg-[#E87A5D]/30 text-amber-200 border border-[#E87A5D]/40 px-2 py-0.5 rounded">
                  Cakto Pay
                </span>
              </div>
              <p className="text-[11px] text-[#DECBC0] flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Ambiente Seguro • Criptografia 256-bit</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Configure Cakto link toggle button */}
            <button
              onClick={() => setShowSettings(!showSettings)}
              title="Configurar Link da Cakto"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1 border border-white/10"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px]">Link Cakto</span>
            </button>

            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Settings Bar to paste/change Cakto checkout URL */}
        {showSettings && (
          <form onSubmit={handleSaveCaktoUrl} className="p-3.5 bg-[#FFF6EF] border-b border-[#F0DCD0] space-y-2 text-xs animate-slideDown">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#352219] flex items-center gap-1.5">
                <LinkIcon className="w-3.5 h-3.5 text-[#E87A5D]" />
                Cole o link do seu Checkout na Cakto:
              </span>
              {caktoUrl && (
                <button
                  type="button"
                  onClick={() => {
                    setCaktoUrl('');
                    setInputUrl('');
                    localStorage.removeItem('cakto_checkout_url');
                  }}
                  className="text-[10px] text-rose-700 hover:underline cursor-pointer"
                >
                  Remover e usar formulário nativo
                </button>
              )}
            </div>

            <div className="flex gap-2">
              <input
                type="url"
                placeholder="Exemplo: https://pay.cakto.com.br/seu-codigo-de-checkout"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl border border-[#DFD0C4] bg-white text-xs text-[#2E1D16] focus:outline-none focus:border-[#E87A5D]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#E87A5D] hover:bg-[#DF6446] text-white font-bold rounded-xl cursor-pointer transition-colors"
              >
                Salvar
              </button>
            </div>
            <p className="text-[10px] text-[#7A6961]">
              💡 Quando salvo, o checkout da Cakto será carregado <strong>nativamente dentro deste modal</strong>, sem tirar o cliente da página.
            </p>
          </form>
        )}

        {/* If Cakto URL is configured: Embed Native Iframe */}
        {caktoUrl ? (
          <div className="flex-1 relative flex flex-col bg-[#FDFBF9] overflow-hidden">
            {iframeLoading && (
              <div className="absolute inset-0 bg-white/90 z-20 flex flex-col items-center justify-center p-6 space-y-3">
                <RefreshCw className="w-8 h-8 text-[#E87A5D] animate-spin" />
                <p className="text-sm font-semibold text-[#352219]">Carregando checkout seguro da Cakto...</p>
                <p className="text-xs text-[#8C7A70]">Conectando com Cakto Pay</p>
              </div>
            )}

            <div className="bg-[#FAF3EB] px-4 py-2 border-b border-[#EDE1D6] flex items-center justify-between text-xs text-[#7A6961]">
              <div className="flex items-center gap-1.5 truncate max-w-xs sm:max-w-md">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate font-mono text-[11px] text-[#4A3830]">{caktoUrl}</span>
              </div>
              <a
                href={caktoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[#E87A5D] hover:text-[#B33920] flex items-center gap-1 cursor-pointer shrink-0 ml-2"
              >
                <span>Abrir em tela cheia</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <iframe
              src={caktoUrl}
              title="Checkout Cakto"
              className="w-full flex-1 border-0"
              onLoad={() => setIframeLoading(false)}
              allow="payment; camera; microphone; geolocation"
            />
          </div>
        ) : (
          /* Native High-Converting Cakto-Style Interface */
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
            
            {/* Tip banner about Cakto integration */}
            <div className="p-3 bg-[#FFF8F2] border border-[#F4DEC4] rounded-2xl flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-base">🚀</span>
                <span className="text-[#6E5B52]">
                  Pronto para integrar com seu checkout da <strong>Cakto</strong>!
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="text-[11px] font-bold text-[#E87A5D] hover:underline shrink-0 cursor-pointer"
              >
                Inserir meu link Cakto
              </button>
            </div>

            {isSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h4 className="text-2xl font-bold text-[#2E1D16] font-display">
                  Parabéns, {name || 'Chef Confeiteira'}!
                </h4>

                <p className="text-sm text-[#6E5B52] max-w-md mx-auto">
                  Sua assinatura mensal do <strong>DoceLucro</strong> e os bônus foram liberados! Enviamos os dados de acesso para:
                </p>

                <div className="bg-[#FAF4ED] p-3.5 rounded-xl border border-[#EADBCE] text-xs font-mono text-[#4A3830] max-w-sm mx-auto">
                  📧 {email || 'seu-email@confeitaria.com'}<br />
                  📱 WhatsApp: {whatsapp || '(11) 99999-9999'}
                </div>

                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 space-y-1.5 text-left max-w-md mx-auto">
                  <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    Bônus já desbloqueados na sua conta:
                  </div>
                  <div>✓ 20 Receitas Base Pré-Cadastradas prontas para uso</div>
                  <div>✓ Mini-Curso &quot;Como Vender Sem Dar Desconto&quot; (15 min)</div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full max-w-xs mx-auto py-3.5 px-6 rounded-xl bg-[#E87A5D] hover:bg-[#DF6446] text-white font-bold text-sm shadow-md cursor-pointer transition-all"
                >
                  Acessar Aplicativo Agora
                </button>
              </div>
            ) : (
              <form onSubmit={handleSimulatePayment} className="space-y-5">
                
                {/* Order Stack Summary */}
                <div className="bg-[#FAF4ED] p-4 rounded-2xl border border-[#EADBCE] space-y-2 text-xs">
                  <div className="flex justify-between items-center text-sm font-bold text-[#2E1D16]">
                    <span>Plano Mensal DoceLucro + Todos os Bônus</span>
                    <span className="text-[#E87A5D] flex items-baseline gap-0.5">
                      R$ 9,99<span className="text-[10px] font-normal text-[#8C7A70]">/mês</span>
                    </span>
                  </div>
                  <div className="flex justify-between text-[#7A6961]">
                    <span>+ 20 Receitas Base Pré-Cadastradas</span>
                    <span className="text-emerald-700 font-semibold">GRÁTIS</span>
                  </div>
                  <div className="flex justify-between text-[#7A6961]">
                    <span>+ Mini-Curso &quot;Como Vender Sem Dar Desconto&quot;</span>
                    <span className="text-emerald-700 font-semibold">GRÁTIS</span>
                  </div>
                  <div className="pt-2 border-t border-[#E8DCD4] flex justify-between font-bold text-sm text-[#2E1D16]">
                    <span>Valor da assinatura:</span>
                    <span className="text-lg text-[#D45334] flex items-baseline gap-1">
                      R$ 9,99
                      <span className="text-xs font-semibold text-[#8C7A70]">/mês</span>
                    </span>
                  </div>
                  <div className="text-[11px] text-[#8C7A70] italic">
                    Sem fidelidade • Cancele quando quiser em 1 clique
                  </div>
                </div>

                {/* Personal Data */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-[#352219] uppercase tracking-wider block">
                    1. Seus Dados de Acesso:
                  </label>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo ou nome da confeitaria"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED1C7] text-sm focus:outline-none focus:border-[#E87A5D] bg-white"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="email"
                      required
                      placeholder="Seu melhor e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED1C7] text-sm focus:outline-none focus:border-[#E87A5D] bg-white"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp com DDD"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DED1C7] text-sm focus:outline-none focus:border-[#E87A5D] bg-white"
                    />
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-[#352219] uppercase tracking-wider block">
                    2. Forma de Pagamento (Processado via Cakto Pay):
                  </label>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-3 rounded-xl border text-left flex items-center gap-2.5 cursor-pointer transition-all ${
                        paymentMethod === 'pix'
                          ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-600/20'
                          : 'border-[#E2D5CA] bg-white hover:bg-[#FAF6F2]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <QrCode className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#2E1D16]">PIX Imediato</div>
                        <div className="text-[10px] text-emerald-700 font-bold">R$ 9,99/mês</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl border text-left flex items-center gap-2.5 cursor-pointer transition-all ${
                        paymentMethod === 'card'
                          ? 'border-[#E87A5D] bg-[#FDF2ED] ring-2 ring-[#E87A5D]/20'
                          : 'border-[#E2D5CA] bg-white hover:bg-[#FAF6F2]'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FCE8DC] text-[#E87A5D] flex items-center justify-center shrink-0">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#2E1D16]">Cartão de Crédito</div>
                        <div className="text-[10px] text-[#A64B34] font-bold">Cobrança Mensal</div>
                      </div>
                    </button>
                  </div>
                </div>

                {paymentMethod === 'pix' ? (
                  <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-900">Chave PIX Copia e Cola (Cakto):</span>
                      <button
                        type="button"
                        onClick={handleCopyPix}
                        className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        {isCopied ? 'Copiado!' : 'Copiar Chave'}
                      </button>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-emerald-200 text-[10px] font-mono text-[#5A4D45] break-all select-all">
                      00020126580014br.gov.bcb.pix0136cakto-pay-docelucro-9reais99-mensal520400005303986540509.995802BR5915DOCELUCRO LTDA6009SAO PAULO62070503***6304E8A1
                    </div>
                    <p className="text-[11px] text-emerald-800">
                      Liberação instantânea após a confirmação do PIX!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2 text-xs">
                    <input
                      type="text"
                      placeholder="Número do Cartão de Crédito"
                      defaultValue="4111 2222 3333 4444"
                      className="w-full px-3 py-2 rounded-xl border border-[#DED1C7] text-xs bg-white"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Validade (MM/AA)"
                        defaultValue="12/28"
                        className="w-full px-3 py-2 rounded-xl border border-[#DED1C7] text-xs bg-white"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        defaultValue="123"
                        className="w-full px-3 py-2 rounded-xl border border-[#DED1C7] text-xs bg-white"
                      />
                    </div>
                  </div>
                )}

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E87A5D] via-[#DF6446] to-[#C84F32] hover:from-[#E06D4F] hover:to-[#B63E23] text-white font-extrabold text-base shadow-lg shadow-[#E87A5D]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isProcessing ? (
                    <span>Processando com Cakto Pay...</span>
                  ) : (
                    <>
                      <span>ASSINAR AGORA POR R$ 9,99/MÊS</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C7A70]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Garantia de 7 dias com cancelamento imediato sem taxa</span>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
