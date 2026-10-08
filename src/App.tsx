/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { SolutionPillarsSection } from './components/SolutionPillarsSection';
import { GuidedDemoSection } from './components/GuidedDemoSection';
import { ComparisonTable } from './components/ComparisonTable';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferPricingSection } from './components/OfferPricingSection';
import { GuaranteeAndFaqSection } from './components/GuaranteeAndFaqSection';
import { CheckoutModal } from './components/CheckoutModal';
import { LiveInteractiveCalculatorModal } from './components/LiveInteractiveCalculatorModal';
import { StickyBottomCta } from './components/StickyBottomCta';
import { SocialProofToast } from './components/SocialProofToast';
import { Footer } from './components/Footer';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleScrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    setIsCalculatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2E1D16] flex flex-col font-sans selection:bg-[#E87A5D]/25 selection:text-[#8C3A24]">
      {/* 1. Urgency Announcement Bar */}
      <AnnouncementBar onCtaClick={handleScrollToOffer} />

      {/* 2. Main Navigation Header */}
      <Header 
        onCtaClick={handleScrollToOffer} 
        onOpenCalculator={handleOpenCalculator} 
      />

      {/* 3. Main Hero Section (Seção 1: Dobra Principal) */}
      <main className="flex-1">
        <HeroSection onCtaClick={handleScrollToOffer} />

        {/* 4. Pain Points Section (Seção 2: Identificação da Dor & Agitação do Problema) */}
        <PainPointsSection onCtaClick={handleScrollToOffer} />

        {/* 5. Product Pillars (Seção 3: Apresentação da Solução - O App) */}
        <SolutionPillarsSection onCtaClick={handleScrollToOffer} />

        {/* 6. Guided 45s Visual Demo (Seção 4: Demonstração Visual) */}
        <GuidedDemoSection 
          onCtaClick={handleScrollToOffer} 
          onOpenCalculator={handleOpenCalculator} 
        />

        {/* 7. Comparison Table: Caderno vs Planilhas vs DoceLucro */}
        <ComparisonTable />

        {/* 8. Real Confectioners Social Proof & Testimonials */}
        <TestimonialsSection />

        {/* 9. Irresistible Offer & Anchoring (Seção 5: Oferta Irresistível & Ancoragem de Preço) */}
        <OfferPricingSection 
          checkoutUrl="https://pay.cakto.com.br/9wof6n5_1184129"
        />

        {/* 10. 7-Day Guarantee & FAQ (Seção 6: Garantia Incondicional & FAQ) */}
        <GuaranteeAndFaqSection onCtaClick={handleScrollToOffer} />
      </main>

      {/* 11. Footer */}
      <Footer 
        onCtaClick={handleScrollToOffer} 
        onOpenCalculator={handleOpenCalculator} 
      />

      {/* 12. Floating & Modal Interactive Components */}
      <StickyBottomCta onCtaClick={handleScrollToOffer} />
      <SocialProofToast />

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />

      <LiveInteractiveCalculatorModal 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
        onProceedToOffer={() => {
          setIsCalculatorOpen(false);
          handleScrollToOffer();
        }} 
      />
    </div>
  );
}
