import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs';
import ContactoFormas from '@/components/contacto/ContactoFormas';
import ContactoFAQ from '@/components/contacto/ContactoFAQ';

export const metadata: Metadata = {
  title: 'Contacto | TreaWork - Hablemos',
  description: '¿Buscas un tutor o quieres postularte como tutor? Escríbenos por WhatsApp, correo o el formulario. Te respondemos rapidísimo.',
};

export default function ContactoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background pt-8 md:pt-12 pb-4">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <Breadcrumbs items={[{ label: 'Contacto' }]} className="mb-8" />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-4 leading-[1.05] tracking-tight text-balance">
              Hablemos
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-inter leading-relaxed">
              Cuéntanos si buscas un tutor o si quieres postularte como tutor. Elige el canal que
              prefieras: te respondemos rapidísimo.
            </p>
          </div>
        </div>
      </section>

      <ContactoFormas />
      <ContactoFAQ />
    </>
  );
}
