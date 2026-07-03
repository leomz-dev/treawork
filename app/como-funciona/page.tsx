import { Metadata } from 'next';
import Section from '@/components/ui-custom/Section';
import Breadcrumbs from '@/components/ui-custom/Breadcrumbs';
import Flows from '@/components/como-funciona/Flows';

export const metadata: Metadata = {
  title: 'Cómo funciona | TreaWork - Dos caminos, una comunidad',
  description: 'Descubre cómo funciona TreaWork según lo que buscas: encontrar un tutor certificado o convertirte en tutor. Dos flujos claros, paso a paso.',
};

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background pt-8 md:pt-12 pb-12">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <Breadcrumbs items={[{ label: 'Cómo funciona' }]} className="mb-8" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-5 text-sm font-semibold text-dark">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Dos caminos, una comunidad
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-5 leading-[1.05] tracking-tight text-balance">
              ¿Cómo funciona <span className="text-gradient-brand">TreaWork</span>?
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-inter leading-relaxed">
              Somos una plataforma de dos lados. Elige tu camino y te mostramos exactamente qué sigue,
              paso a paso.
            </p>
          </div>
        </div>
      </section>

      <Section variant="default" className="pt-4 pb-20 md:pb-28">
        <Flows />
      </Section>
    </>
  );
}
