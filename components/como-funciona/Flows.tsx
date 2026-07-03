'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Sparkles,
  Search,
  Users,
  CalendarCheck,
  TrendingUp,
  Megaphone,
  ClipboardCheck,
  BadgeCheck,
  UserCircle,
  Handshake,
  LucideIcon,
} from 'lucide-react';
import Button from '@/components/ui-custom/Button';
import WaButton from '@/components/shared/WaButton';
import { waMessages } from '@/lib/site';
import { cn } from '@/lib/utils';

interface FlowStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

const familiaSteps: FlowStep[] = [
  { icon: Search, title: 'Cuéntanos qué necesitas', description: 'Materia, nivel y modalidad (online o presencial). Un mensaje y listo.' },
  { icon: Users, title: 'Te presentamos tu match', description: 'Elegimos el tutor certificado que mejor encaja contigo y te compartimos su perfil.' },
  { icon: CalendarCheck, title: 'Agendan la primera clase', description: 'Coordinan horario directamente y arrancan cuando te sirva.' },
  { icon: TrendingUp, title: 'Ves resultados', description: 'Acompañamiento constante y seguimiento clase a clase. Cambias de tutor si lo necesitas.' },
];

const tutorSteps: FlowStep[] = [
  { icon: Megaphone, title: 'Te postulas', description: 'Nos escribes contando qué materias dominas y por qué quieres enseñar.' },
  { icon: GraduationCap, title: 'Te capacitamos', description: 'Aprendes a enseñar: pedagogía, comunicación y manejo de clase. Gratis.' },
  { icon: ClipboardCheck, title: 'Te evaluamos', description: 'Tres filtros: académico, pedagógico y psicológico. Así garantizamos calidad.' },
  { icon: BadgeCheck, title: 'Te certificamos', description: 'Apruebas y recibes tu certificación como Tutor Junior TreaWork.' },
  { icon: UserCircle, title: 'Publicamos tu perfil', description: 'Tu perfil público con materias, nivel y calificaciones queda visible.' },
  { icon: Handshake, title: 'Te hacemos match', description: 'Te conectamos con estudiantes, empiezas a dar clases y a ganar dinero.' },
];

function FlowColumn({
  accent,
  icon: Icon,
  kicker,
  title,
  description,
  steps,
  cta,
}: {
  accent: 'primary' | 'accent';
  icon: LucideIcon;
  kicker: string;
  title: string;
  description: string;
  steps: FlowStep[];
  cta: React.ReactNode;
}) {
  const isAccent = accent === 'accent';
  return (
    <div
      className={cn(
        'rounded-[2rem] p-6 md:p-8 border',
        isAccent ? 'bg-dark border-dark' : 'bg-white border-gray-100 shadow-sm'
      )}
    >
      <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white', isAccent ? 'bg-accent' : 'bg-primary')}>
        <Icon className="w-7 h-7" />
      </div>
      <span className={cn('text-xs font-display font-bold uppercase tracking-wider', isAccent ? 'text-accent' : 'text-primary')}>{kicker}</span>
      <h3 className={cn('text-2xl md:text-3xl font-display font-bold mt-1 mb-2', isAccent ? 'text-white' : 'text-dark')}>{title}</h3>
      <p className={cn('font-inter leading-relaxed mb-8', isAccent ? 'text-white/70' : 'text-gray-500')}>{description}</p>

      <div className="space-y-4 mb-8">
        {steps.map((step, i) => (
          <div key={i} className="relative flex gap-4">
            {i < steps.length - 1 && (
              <div className={cn('absolute left-[22px] top-12 bottom-0 w-0.5', isAccent ? 'bg-white/10' : 'bg-gray-100')} />
            )}
            <div
              className={cn(
                'relative z-10 w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold shrink-0',
                isAccent ? 'bg-accent/20 text-accent' : 'bg-primary/10 text-primary'
              )}
            >
              {i + 1}
            </div>
            <div className="pt-1">
              <div className="flex items-center gap-2 mb-1">
                <step.icon className={cn('w-4 h-4', isAccent ? 'text-accent' : 'text-primary')} />
                <h4 className={cn('font-display font-bold', isAccent ? 'text-white' : 'text-dark')}>{step.title}</h4>
              </div>
              <p className={cn('text-sm font-inter leading-relaxed', isAccent ? 'text-white/60' : 'text-gray-500')}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {cta}
    </div>
  );
}

export default function Flows() {
  const [active, setActive] = useState<'familia' | 'tutor'>('familia');

  return (
    <div>
      {/* Toggle (protagonista en mobile) */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-full bg-gray-100 border border-gray-200">
          <button
            onClick={() => setActive('familia')}
            className={cn(
              'px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all inline-flex items-center gap-2',
              active === 'familia' ? 'bg-primary text-white shadow-blue' : 'text-gray-600'
            )}
          >
            <GraduationCap className="w-4 h-4" /> Quiero un tutor
          </button>
          <button
            onClick={() => setActive('tutor')}
            className={cn(
              'px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all inline-flex items-center gap-2',
              active === 'tutor' ? 'bg-accent text-white shadow-coral' : 'text-gray-600'
            )}
          >
            <Sparkles className="w-4 h-4" /> Quiero ser tutor
          </button>
        </div>
      </div>

      {/* Lado a lado en desktop; en mobile muestra el seleccionado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        <div className={cn(active === 'familia' ? 'block' : 'hidden lg:block')}>
          <FlowColumn
            accent="primary"
            icon={GraduationCap}
            kicker="Para familias y estudiantes"
            title="Quiero un tutor"
            description="Del &quot;no entiendo&quot; a &quot;ya lo tengo&quot; en cuatro pasos simples."
            steps={familiaSteps}
            cta={<WaButton message={waMessages.familia} label="Agendar clase" variant="primary" size="large" className="w-full" />}
          />
        </div>
        <div className={cn(active === 'tutor' ? 'block' : 'hidden lg:block')}>
          <FlowColumn
            accent="accent"
            icon={Sparkles}
            kicker="Para jóvenes con talento"
            title="Quiero ser tutor"
            description="De la postulación a tu primera clase, con capacitación y certificación incluidas."
            steps={tutorSteps}
            cta={
              <Link href="/hazte-tutor" className="block">
                <Button variant="accent" size="large" className="w-full">Postularme como tutor</Button>
              </Link>
            }
          />
        </div>
      </div>
    </div>
  );
}
