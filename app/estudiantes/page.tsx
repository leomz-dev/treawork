import { Metadata } from 'next';
import {
  BookOpen,
  Users,
  ClipboardList,
  Target,
  Search,
  CalendarCheck,
  TrendingUp,
  GraduationCap,
} from 'lucide-react';
import Section from '@/components/ui-custom/Section';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import ServiceHero from '@/components/shared/ServiceHero';
import FeatureGrid from '@/components/shared/FeatureGrid';
import ProcessSteps from '@/components/shared/ProcessSteps';
import AudienceFit from '@/components/shared/AudienceFit';
import CtaBand from '@/components/shared/CtaBand';
import MatchWizard from '@/components/estudiantes/MatchWizard';
import { waMessages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Estudiantes | TreaWork - Encuentra tu tutor ideal',
  description: 'Clases 1 a 1 con tutores jóvenes certificados. Refuerzo académico para primaria, bachillerato y universidad. Encuentra tu match en minutos.',
};

const servicios = [
  { icon: BookOpen, title: 'Clases 1 a 1', description: 'Atención 100% personalizada al ritmo del estudiante, sin salones llenos.' },
  { icon: ClipboardList, title: 'Refuerzo académico', description: 'Repasamos lo que no quedó claro en el cole o la U, tema por tema.' },
  { icon: Target, title: 'Prep. de exámenes', description: 'Preparación para parciales, finales y pruebas Saber / ICFES.' },
  { icon: Users, title: 'Apoyo en proyectos', description: 'Acompañamiento en tareas y trabajos largos, aprendiendo a hacerlos.' },
];

const proceso = [
  { icon: Search, title: 'Nos cuentas qué necesitas', description: 'Materia, nivel y modalidad. Con el buscador de arriba en menos de un minuto.' },
  { icon: GraduationCap, title: 'Te presentamos tu tutor', description: 'El tutor certificado que mejor encaja contigo, con perfil y calificaciones.' },
  { icon: CalendarCheck, title: 'Agendan la primera clase', description: 'Coordinan horario por WhatsApp y arrancan cuando te sirva.' },
  { icon: TrendingUp, title: 'Ves el progreso', description: 'Seguimiento clase a clase. Si algo no encaja, cambias de tutor.' },
];

export default function EstudiantesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="👨‍👩‍👧 Para familias y estudiantes"
        accent="primary"
        title={<>Un tutor que <span className="text-primary">sí te entiende</span></>}
        description="Jóvenes certificados que ya pasaron por lo mismo que tú. Refuerzo académico serio para primaria, bachillerato y universidad."
        image="/images/match-illustration.png"
        imageAlt="Familia encontrando el tutor ideal en TreaWork"
        crumbs={[{ label: 'Estudiantes' }]}
        blobClass="clip-blob-1"
        ctas={[
          { label: 'Agendar clase', variant: 'primary', waMessage: waMessages.familia },
          { label: 'Ver tutores', variant: 'outline', href: '/tutores' },
        ]}
        floatingBadge={{ icon: <GraduationCap className="w-6 h-6" />, title: 'Clases 1 a 1', subtitle: '100% personalizadas' }}
      />

      {/* Mini-flujo de match — protagonista de la página */}
      <Section id="match" variant="default" className="py-16 md:py-24 bg-gray-50/60">
        <SectionHeading
          eyebrow="Encuentra tu match"
          title={<>Cuéntanos qué buscas y te <span className="text-primary">sugerimos un tutor</span></>}
          subtitle="Tres pasos rápidos. Al final te conectamos por WhatsApp, sin compromiso."
        />
        <MatchWizard />
      </Section>

      <Section variant="default" className="py-20 md:py-28">
        <SectionHeading
          eyebrow="Qué ofrecemos"
          title={<>Apoyo para <span className="text-primary">cada momento</span></>}
          subtitle="Desde entender una clase hasta salvar el semestre."
        />
        <FeatureGrid features={servicios} accent="primary" columns={2} />
      </Section>

      <Section variant="colored" className="py-20 md:py-28 bg-gray-50/60">
        <SectionHeading
          eyebrow="Cómo funciona"
          title={<>De la duda a la <span className="text-primary">primera clase</span></>}
        />
        <ProcessSteps steps={proceso} accent="primary" layout="grid" />
      </Section>

      <Section variant="default" className="py-20 md:py-24">
        <SectionHeading title={<>¿Es para ti?</>} subtitle="Para que sepas si somos lo que buscas." />
        <AudienceFit
          yes={[
            'Necesitas reforzar una o varias materias',
            'Quieres entender de verdad, no solo aprobar',
            'Estudias en primaria, bachillerato o universidad',
            'Buscas un tutor cercano y de confianza',
          ]}
          no={[
            'Buscas que alguien haga el trabajo por ti',
            'No quieres participar en tus propias clases',
            'Esperas resultados sin ponerle nada de tu parte',
          ]}
        />
      </Section>

      <CtaBand
        accent="primary"
        title={<>Tu próxima buena nota <br /> empieza con una clase</>}
        subtitle="Escríbenos por WhatsApp y te conectamos con el tutor ideal. La primera conversación es gratis."
        waMessage={waMessages.familia}
        ctaLabel="Agendar clase"
      />
    </>
  );
}
