'use client';

import Section from '@/components/ui-custom/Section';
import Button from '@/components/ui-custom/Button';
import { MessageCircle } from 'lucide-react';

export default function TecnologiaCTA() {
  const handleWhatsAppClick = () => {
    const whatsappNumber = '573000000000';
    const message = 'Hola, quiero empezar con las clases de tecnología';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Section variant="dark">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
          ¿Listo para empezar?
        </h2>
        <p className="text-lg md:text-xl text-white/90 font-inter mb-8 leading-relaxed">
          Agenda una primera clase sin compromiso. Conversamos sobre tus objetivos y diseñamos un plan personalizado.
        </p>
        <Button
          size="large"
          variant="accent"
          onClick={handleWhatsAppClick}
          className="text-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Quiero empezar
        </Button>
      </div>
    </Section>
  );
}
