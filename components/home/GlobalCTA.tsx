'use client';

import Section from '@/components/ui-custom/Section';
import Button from '@/components/ui-custom/Button';
import { MessageCircle, ArrowRight } from 'lucide-react';
import NextImage from 'next/image';

export default function GlobalCTA() {
  const handleWhatsAppClick = () => {
    const whatsappNumber = '573000000000';
    const message = 'Hola, quiero recibir una propuesta personalizada de TreaWork';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden bg-primary shadow-2xl shadow-primary/25">

        {/* Background Layer */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <NextImage
            src="/images/cta-wave.png"
            alt="Abstract Wave Background"
            fill
            className="object-cover opacity-30 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-primary/80" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 py-20 px-6 md:py-28 md:px-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6 text-white leading-tight">
            ¿Listo para dar el <br className="hidden md:block" />
            <span className="text-accent">siguiente paso?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 font-inter mb-10 leading-relaxed max-w-2xl mx-auto">
            Cuéntanos tu caso y recibe una propuesta personalizada sin compromiso.
            Deja que la tecnología trabaje por ti today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="large"
              variant="accent"
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-6 rounded-full w-full sm:w-auto shadow-xl shadow-accent/10 hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablemos por WhatsApp
            </Button>

            <Button
              size="large"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:text-white backdrop-blur-sm"
            >
              Ver planes
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
