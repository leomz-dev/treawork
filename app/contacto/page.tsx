import { Metadata } from 'next';
import ContactoHero from '@/components/contacto/ContactoHero';
import ContactoFormas from '@/components/contacto/ContactoFormas';
import ContactoFAQ from '@/components/contacto/ContactoFAQ';

export const metadata: Metadata = {
  title: 'Contacto | TreaWork - Conversemos sobre tu proyecto',
  description: 'Contáctanos por WhatsApp, correo o completa el formulario. Te responderemos a la brevedad.',
};

export default function ContactoPage() {
  return (
    <>
      {/* <ContactoHero /> */}
      <ContactoFormas />
      <ContactoFAQ />
    </>
  );
}
