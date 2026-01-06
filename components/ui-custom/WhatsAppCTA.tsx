'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  const whatsappNumber = '573000000000';
  const message = 'Hola, me gustaría recibir más información sobre TreaWork';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 bg-dark text-white px-4 py-2 rounded-button text-sm font-montserrat font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¿Necesitas ayuda?
      </span>
    </button>
  );
}
