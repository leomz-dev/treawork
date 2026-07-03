import { Metadata } from 'next';
import Link from 'next/link';
import { BadgeCheck, Sparkles } from 'lucide-react';
import Section from '@/components/ui-custom/Section';
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs';
import TutorDirectory from '@/components/tutores/TutorDirectory';
import CtaBand from '@/components/shared/CtaBand';
import Button from '@/components/ui-custom/Button';
import { waMessages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Nuestros tutores | TreaWork - Tutores jóvenes certificados',
  description: 'Explora el directorio de tutores certificados de TreaWork. Filtra por materia, área y nivel. Cada perfil muestra calificación, nivel y clases dictadas.',
};

export default function TutoresPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background pt-8 md:pt-12 pb-12">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <Breadcrumbs items={[{ label: 'Tutores' }]} className="mb-8" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-5 text-sm font-semibold text-primary">
              <BadgeCheck className="w-4 h-4" /> Todos certificados y evaluados
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-5 leading-[1.05] tracking-tight text-balance">
              Conoce a nuestros <span className="text-gradient-brand">tutores</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-inter leading-relaxed">
              Jóvenes con talento que pasaron por capacitación, evaluación y certificación.
              Filtra por materia, área o nivel y encuentra tu match.
            </p>
          </div>
        </div>
      </section>

      <Section variant="default" className="pt-4 pb-20 md:pb-28">
        <TutorDirectory />
      </Section>

      <CtaBand
        accent="primary"
        title={<>¿No sabes cuál elegir?</>}
        subtitle="Cuéntanos qué necesitas y te recomendamos el tutor ideal según tu materia, nivel y horario."
        waMessage={waMessages.familia}
        ctaLabel="Pedir recomendación"
        secondary={
          <Link href="/hazte-tutor">
            <Button variant="outline" size="large" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
              <Sparkles className="w-4 h-4" /> Quiero ser tutor
            </Button>
          </Link>
        }
      />
    </>
  );
}
