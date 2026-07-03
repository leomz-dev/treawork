import { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe,
  Code,
  Blocks,
  Rocket,
  Hammer,
  MessageSquareCode,
  Code2,
  ArrowRight,
} from 'lucide-react';
import Section from '@/components/ui-custom/Section';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import ServiceHero from '@/components/shared/ServiceHero';
import FeatureGrid from '@/components/shared/FeatureGrid';
import AudienceFit from '@/components/shared/AudienceFit';
import CtaBand from '@/components/shared/CtaBand';
import Button from '@/components/ui-custom/Button';
import { waMessages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tecnología | TreaWork - Clases de programación 1 a 1',
  description: 'Aprende desarrollo web, Python y lógica de programación con tutores jóvenes. Clases 1 a 1, enfoque 100% práctico y desde cero.',
};

const areas = [
  {
    icon: Globe,
    title: 'Desarrollo Web',
    description: 'Crea sitios y apps desde cero con las tecnologías que usa la industria.',
    bullets: ['HTML y CSS desde cero', 'JavaScript y el DOM', 'React y Next.js'],
  },
  {
    icon: Code,
    title: 'Python',
    description: 'Automatiza tareas, analiza datos y construye tus primeras aplicaciones.',
    bullets: ['Fundamentos de Python', 'Estructuras de datos', 'Automatización'],
  },
  {
    icon: Blocks,
    title: 'Lógica de programación',
    description: 'Aprende a pensar como programador y a resolver problemas con código.',
    bullets: ['Algoritmos básicos', 'Resolución de problemas', 'Pensamiento computacional'],
  },
];

const enfoque = [
  { icon: Hammer, title: 'Aprendes haciendo', description: 'Nada de solo teoría: construyes proyectos reales desde la primera clase.' },
  { icon: MessageSquareCode, title: 'A tu ritmo', description: 'Clases 1 a 1 adaptadas a tu nivel, sin sentirte perdido en un grupo.' },
  { icon: Rocket, title: 'Con proyección', description: 'Tecnología con alta demanda laboral para tu futuro (o tu presente).' },
];

export default function TecnologiaPage() {
  return (
    <>
      <ServiceHero
        eyebrow="💻 Clases de programación"
        accent="primary"
        title={<>Aprende a programar <span className="text-primary">desde cero</span></>}
        description="Desarrollo web, Python y lógica de programación con tutores jóvenes que hablan tu idioma. Clases 1 a 1 y 100% prácticas."
        image="/images/tecnologia-hero.png"
        imageAlt="Estudiante aprendiendo a programar con TreaWork"
        crumbs={[{ label: 'Tecnología' }]}
        blobClass="clip-blob-1"
        ctas={[
          { label: 'Empezar a aprender', variant: 'primary', waMessage: waMessages.tecnologia },
          { label: 'Ver tutores de tech', variant: 'outline', href: '/tutores' },
        ]}
        floatingBadge={{ icon: <Code2 className="w-6 h-6" />, title: 'Desde cero', subtitle: 'sin conocimientos previos' }}
      />

      <Section variant="default" className="py-20 md:py-28">
        <SectionHeading
          eyebrow="Áreas de aprendizaje"
          title={<>Elige por dónde <span className="text-primary">empezar</span></>}
          subtitle="Tecnología práctica y con alta demanda laboral."
        />
        <FeatureGrid features={areas} accent="primary" columns={3} />
      </Section>

      {/* Enfoque — ritmo propio */}
      <Section variant="colored" className="py-20 md:py-28 bg-gray-50/60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Nuestro enfoque"
              title={<>Menos teoría aburrida, <span className="text-primary">más código real</span></>}
              subtitle="Creemos que se aprende a programar programando. Por eso cada clase termina con algo construido."
              className="mb-8"
            />
            <Link href="/tutores">
              <Button variant="primary" size="large">
                Conoce a los tutores de tech <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {enfoque.map((e) => (
              <div key={e.title} className="flex items-start gap-4 bg-white rounded-card p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <e.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-dark mb-1">{e.title}</h3>
                  <p className="text-gray-500 font-inter text-sm leading-relaxed">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="default" className="py-20 md:py-24">
        <SectionHeading title={<>¿Es para ti?</>} subtitle="Para saber si esta ruta te sirve." />
        <AudienceFit
          yes={[
            'Quieres aprender a programar aunque partas de cero',
            'Prefieres aprender haciendo proyectos reales',
            'Te gustaría dedicarte (o meterte) al mundo tech',
            'Buscas clases a tu ritmo, no un curso grabado más',
          ]}
          no={[
            'Buscas un certificado sin practicar nada',
            'No quieres dedicarle tiempo a ejercitar',
            'Esperas volverte experto en una sola clase',
          ]}
        />
      </Section>

      <CtaBand
        accent="primary"
        title={<>Tu primera línea de código <br /> empieza hoy</>}
        subtitle="Escríbenos por WhatsApp y armamos un plan a tu medida, desde cero y a tu ritmo."
        waMessage={waMessages.tecnologia}
        ctaLabel="Empezar a aprender"
      />
    </>
  );
}
