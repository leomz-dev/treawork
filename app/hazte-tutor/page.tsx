import { Metadata } from 'next';
import {
  Megaphone,
  GraduationCap,
  ClipboardCheck,
  BadgeCheck,
  UserCircle,
  Handshake,
  Sparkles,
  DollarSign,
  Clock,
  Rocket,
  Brain,
  HeartHandshake,
} from 'lucide-react';
import Section from '@/components/ui-custom/Section';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import ServiceHero from '@/components/shared/ServiceHero';
import ProcessSteps from '@/components/shared/ProcessSteps';
import FeatureGrid from '@/components/shared/FeatureGrid';
import AudienceFit from '@/components/shared/AudienceFit';
import CtaBand from '@/components/shared/CtaBand';
import Niveles from '@/components/hazte-tutor/Niveles';
import { waMessages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Hazte tutor | TreaWork - Gana dinero enseñando lo que sabes',
  description: 'Convocatoria abierta para jóvenes con talento. Te capacitamos, evaluamos y certificamos gratis. Crece de Tutor Junior a Mentor y gana enseñando.',
};

const proceso = [
  { icon: Megaphone, title: '1. Convocatoria', description: 'Te postulas por WhatsApp. Nos cuentas qué materias dominas y por qué quieres enseñar.' },
  { icon: GraduationCap, title: '2. Capacitación', description: 'Aprendes a enseñar de verdad: pedagogía, comunicación y manejo de clases. 100% gratis.' },
  { icon: ClipboardCheck, title: '3. Evaluación', description: 'Pasas tres filtros: académico (dominas el tema), pedagógico (sabes explicar) y psicológico (buen trato).' },
  { icon: BadgeCheck, title: '4. Certificación', description: 'Al aprobar, recibes tu certificación TreaWork como Tutor Junior. Ya eres parte de la comunidad.' },
  { icon: UserCircle, title: '5. Publicación de perfil', description: 'Creamos tu perfil público con tus materias, nivel y calificaciones para que te encuentren.' },
  { icon: Handshake, title: '6. Match con estudiantes', description: 'Te conectamos con estudiantes que buscan justo lo que enseñas. Empiezas a dar clases y a ganar.' },
];

const requisitos = [
  { icon: Brain, title: 'Dominas una materia', description: 'Matemáticas, idiomas, ciencias, programación… lo que se te dé bien de verdad.' },
  { icon: HeartHandshake, title: 'Te gusta la gente', description: 'Tienes paciencia y ganas de ayudar a otros a entender lo que a ti te costó.' },
  { icon: Clock, title: 'Tienes algo de tiempo', description: 'Tú defines tu disponibilidad. Compatible con el estudio o tu primer trabajo.' },
];

const beneficios = [
  { icon: DollarSign, title: 'Ganas dinero', description: 'Cobra por tus clases y genera ingresos con algo que ya sabes hacer.' },
  { icon: Rocket, title: 'Creces de nivel', description: 'De Junior a Senior a Mentor. Más experiencia, más estudiantes, mejores condiciones.' },
  { icon: BadgeCheck, title: 'Te certificas', description: 'Suma una certificación real y experiencia comprobable a tu hoja de vida.' },
];

export default function HazteTutorPage() {
  return (
    <>
      <ServiceHero
        eyebrow="🎯 Convocatoria abierta"
        accent="accent"
        title={<>Enseña lo que sabes. <span className="text-accent-strong">Gana mientras creces.</span></>}
        description="Buscamos jóvenes con talento para enseñar. Te capacitamos, te certificamos y te conectamos con estudiantes. Tú solo pones lo que ya sabes."
        image="/images/tutor-illustration.png"
        imageAlt="Joven tutor certificado de TreaWork"
        crumbs={[{ label: 'Hazte tutor' }]}
        blobClass="clip-blob-2"
        ctas={[
          { label: 'Postularme como tutor', variant: 'accent', waMessage: waMessages.tutor },
          { label: 'Ver requisitos', variant: 'outline', href: '#requisitos' },
        ]}
        floatingBadge={{ icon: <Sparkles className="w-6 h-6" />, title: 'Sin experiencia previa', subtitle: 'nosotros te formamos' }}
      />

      <Section id="requisitos" variant="default" className="py-20 md:py-28">
        <SectionHeading
          eyebrow="¿Puedo postularme?"
          accent="accent"
          title={<>Solo necesitas <span className="text-accent-strong">tres cosas</span></>}
          subtitle="No pedimos que seas profesor. Pedimos que sepas, que quieras y que tengas buena vibra."
        />
        <FeatureGrid features={requisitos} accent="accent" />
      </Section>

      <Section variant="colored" className="py-20 md:py-28 bg-gray-50/60">
        <SectionHeading
          eyebrow="El camino"
          accent="accent"
          title={<>De la postulación a tu <span className="text-accent-strong">primera clase</span></>}
          subtitle="Un proceso serio que garantiza calidad. Así es como te conviertes en Tutor TreaWork."
        />
        <ProcessSteps steps={proceso} accent="accent" layout="vertical" />
      </Section>

      <Niveles />

      <Section variant="default" className="py-20 md:py-28">
        <SectionHeading
          eyebrow="Por qué vale la pena"
          accent="accent"
          title={<>Más que un ingreso extra, <span className="text-accent-strong">una comunidad</span></>}
        />
        <FeatureGrid features={beneficios} accent="accent" />
      </Section>

      <Section variant="colored" className="py-20 md:py-24 bg-gray-50/60">
        <SectionHeading
          title={<>¿Es para ti ser tutor?</>}
          accent="accent"
          subtitle="Seamos honestos para que ambos ganemos."
        />
        <AudienceFit
          yesTitle="Sí, postúlate si..."
          noTitle="Mejor no, si..."
          yes={[
            'Dominas al menos una materia y te gusta explicarla',
            'Eres joven y quieres ganar dinero con flexibilidad',
            'Te comprometes con tus estudiantes y sus horarios',
            'Quieres crecer y aprender a enseñar profesionalmente',
          ]}
          no={[
            'Buscas dinero fácil sin dedicarle tiempo',
            'No te gusta comprometerte con horarios',
            'No estás dispuesto a capacitarte ni a ser evaluado',
          ]}
        />
      </Section>

      <CtaBand
        accent="accent"
        title={<>La convocatoria está abierta. <br /> ¿Te animas?</>}
        subtitle="Postúlate hoy por WhatsApp. Te contamos los siguientes pasos y resolvemos todas tus dudas."
        waMessage={waMessages.tutor}
        ctaLabel="Postularme como tutor"
      />
    </>
  );
}
