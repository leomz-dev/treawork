import { Metadata } from 'next';
import TecnologiaHero from '@/components/tecnologia/TecnologiaHero';
import TecnologiaQueEnsenamos from '@/components/tecnologia/TecnologiaQueEnsenamos';
import TecnologiaEnfoque from '@/components/tecnologia/TecnologiaEnfoque';
import TecnologiaParaQuien from '@/components/tecnologia/TecnologiaParaQuien';
import TecnologiaCTA from '@/components/tecnologia/TecnologiaCTA';

export const metadata: Metadata = {
  title: 'Tecnología | TreaWork - Clases Personalizadas de Programación',
  description: 'Aprende desarrollo web, Python y lógica de programación con clases 1 a 1. Enfoque práctico desde cero.',
};

export default function TecnologiaPage() {
  return (
    <>
      <TecnologiaHero />
      <TecnologiaQueEnsenamos />
      <TecnologiaEnfoque />
      <TecnologiaParaQuien />
      <TecnologiaCTA />
    </>
  );
}
