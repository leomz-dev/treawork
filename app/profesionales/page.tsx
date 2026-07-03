import { Metadata } from 'next';
import {
  FileText,
  Presentation,
  Search as SearchIcon,
  Laptop,
  ShieldCheck,
  Clock,
  MessagesSquare,
  MessageSquare,
  FileSearch,
  Wrench,
  CheckCircle,
  Briefcase,
} from 'lucide-react';
import Section from '@/components/ui-custom/Section';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import ServiceHero from '@/components/shared/ServiceHero';
import FeatureGrid from '@/components/shared/FeatureGrid';
import ProcessSteps from '@/components/shared/ProcessSteps';
import CtaBand from '@/components/shared/CtaBand';
import { waMessages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Profesionales | TreaWork - Apoyo en proyectos laborales',
  description: 'Apoyo profesional en proyectos, investigaciones, documentos Office y asesoría tecnológica. Confidencialidad y cumplimiento garantizados.',
};

const servicios = [
  { icon: FileText, title: 'Documentos y Office', description: 'Word, Excel y PowerPoint con acabado profesional y bien estructurado.' },
  { icon: SearchIcon, title: 'Investigaciones', description: 'Apoyo en investigaciones, informes y documentos técnicos con rigor.' },
  { icon: Presentation, title: 'Presentaciones', description: 'Diapositivas claras y con impacto para exponer o sustentar.' },
  { icon: Laptop, title: 'Asesoría tecnológica', description: 'Te orientamos en herramientas digitales y automatización de tareas.' },
];

const valores = [
  { icon: ShieldCheck, title: 'Confidencialidad', description: 'Tu información y tu caso se manejan con total discreción. Siempre.' },
  { icon: Clock, title: 'Cumplimiento', description: 'Respetamos plazos y acordamos entregas realistas desde el inicio.' },
  { icon: MessagesSquare, title: 'Comunicación clara', description: 'Te mantenemos al tanto del avance en cada etapa, sin sorpresas.' },
];

const proceso = [
  { icon: MessageSquare, title: 'Cuéntanos tu caso', description: 'Conversamos de forma confidencial sobre tu proyecto o necesidad.' },
  { icon: FileSearch, title: 'Evaluación y propuesta', description: 'Analizamos el alcance y te presentamos una propuesta clara con costos.' },
  { icon: Wrench, title: 'Ejecución', description: 'Trabajamos en tu caso con profesionalismo, manteniéndote informado.' },
  { icon: CheckCircle, title: 'Entrega y soporte', description: 'Entregamos completo y damos soporte posterior si lo necesitas.' },
];

export default function ProfesionalesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="💼 Para profesionales"
        accent="primary"
        title={<>Apoyo real para tus <span className="text-primary">proyectos laborales</span></>}
        description="Cuando el tiempo aprieta, te damos una mano experta. Proyectos, investigaciones, documentos y asesoría, con total confidencialidad."
        image="/images/profesionales-hero.png"
        imageAlt="Profesional trabajando en un proyecto con apoyo de TreaWork"
        crumbs={[{ label: 'Profesionales' }]}
        blobClass="clip-blob-2"
        ctas={[
          { label: 'Cuéntanos tu caso', variant: 'primary', waMessage: waMessages.profesional },
          { label: 'Cómo trabajamos', variant: 'outline', href: '#proceso' },
        ]}
        floatingBadge={{ icon: <Briefcase className="w-6 h-6" />, title: 'Confidencial', subtitle: 'y a tiempo' }}
      />

      <Section variant="default" className="py-20 md:py-28">
        <SectionHeading
          eyebrow="Qué hacemos"
          title={<>Soluciones para <span className="text-primary">cada necesidad</span></>}
          subtitle="Apoyo concreto para que entregues con calidad y a tiempo."
        />
        <FeatureGrid features={servicios} accent="primary" columns={2} />
      </Section>

      {/* Franja de confianza — ritmo propio de esta página */}
      <section className="relative py-16 md:py-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
              Trabajamos con <span className="text-accent">reglas claras</span>
            </h2>
            <p className="text-white/70 font-inter">Tres compromisos que hacemos contigo desde el primer mensaje.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valores.map((v) => (
              <div key={v.title} className="rounded-card bg-white/5 border border-white/10 p-7 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white/60 font-inter text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="proceso" variant="default" className="py-20 md:py-28">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title={<>Un proceso <span className="text-primary">claro y profesional</span></>}
        />
        <ProcessSteps steps={proceso} accent="primary" layout="vertical" />
      </Section>

      <CtaBand
        accent="primary"
        title={<>¿Tienes un proyecto entre manos?</>}
        subtitle="Cuéntanos tu caso por WhatsApp. Confidencial, sin compromiso y con una propuesta clara."
        waMessage={waMessages.profesional}
        ctaLabel="Cuéntanos tu caso"
      />
    </>
  );
}
