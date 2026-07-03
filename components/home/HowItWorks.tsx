import Link from 'next/link';
import Section from '@/components/ui-custom/Section';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import ProcessSteps from '@/components/shared/ProcessSteps';
import Button from '@/components/ui-custom/Button';
import { Search, Users, CalendarCheck, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Cuéntanos qué necesitas', description: 'Materia, nivel y modalidad. Nos toma menos de un minuto entender tu caso.' },
  { icon: Users, title: 'Te presentamos tu match', description: 'Te sugerimos el tutor certificado que mejor encaja con lo que buscas.' },
  { icon: CalendarCheck, title: 'Agendan la primera clase', description: 'Coordinan horario por WhatsApp y arrancan cuando a ti te sirva.' },
  { icon: TrendingUp, title: 'Ves el progreso', description: 'Acompañamiento constante y seguimiento real, clase a clase.' },
];

export default function HowItWorks() {
  return (
    <Section id="proceso" variant="default" className="bg-gray-50/60">
      <SectionHeading
        eyebrow="Cómo funciona"
        title={<>Encontrar tu tutor es <span className="text-primary">así de simple</span></>}
        subtitle="Del &quot;no entiendo nada&quot; a &quot;ya me quedó claro&quot; en cuatro pasos."
      />
      <ProcessSteps steps={steps} layout="grid" accent="primary" />

      <div className="text-center mt-12">
        <Link href="/como-funciona">
          <Button variant="outline" size="large">
            Ver el flujo completo (y el de tutores)
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
