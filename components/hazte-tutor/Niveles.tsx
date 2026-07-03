import Section from '@/components/ui-custom/Section';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import { Sprout, Star, Crown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const niveles = [
  {
    icon: Sprout,
    nombre: 'Tutor Junior',
    desc: 'Tu punto de partida. Recién certificado y acompañado por un Mentor en tus primeras clases.',
    perks: ['Certificación inicial', 'Acompañamiento de un Mentor', 'Primeros estudiantes asignados'],
    accent: false,
  },
  {
    icon: Star,
    nombre: 'Tutor Senior',
    desc: 'Subes con experiencia y buenas calificaciones. Más estudiantes y mejores condiciones.',
    perks: ['Más demanda de estudiantes', 'Mejores tarifas', 'Prioridad en el match'],
    accent: true,
  },
  {
    icon: Crown,
    nombre: 'Tutor Mentor',
    desc: 'La cima de la comunidad. Además de enseñar, formas y guías a los nuevos tutores.',
    perks: ['Formas a nuevos tutores', 'Ingresos por mentoría', 'Voz en la comunidad'],
    accent: false,
  },
];

export default function Niveles() {
  return (
    <Section id="niveles" variant="colored" className="py-20 md:py-28">
      <SectionHeading
        eyebrow="Tu crecimiento"
        accent="accent"
        title={<>Empiezas Junior. <span className="text-accent-strong">Llegas a Mentor.</span></>}
        subtitle="En TreaWork no te quedas quieto. Tu nivel sube con tu experiencia y tus calificaciones."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {niveles.map((n, i) => (
          <div key={n.nombre} className="relative flex">
            <div
              className={cn(
                'flex flex-col w-full rounded-card p-8 border transition-all duration-300 hover:-translate-y-1',
                n.accent
                  ? 'bg-dark border-dark text-white shadow-coral'
                  : 'bg-white border-gray-100 shadow-sm hover:shadow-premium-hover'
              )}
            >
              <div
                className={cn(
                  'w-14 h-14 rounded-2xl flex items-center justify-center mb-5',
                  n.accent ? 'bg-accent text-white' : 'bg-primary/10 text-primary'
                )}
              >
                <n.icon className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={cn('text-xs font-display font-bold uppercase tracking-wider', n.accent ? 'text-accent' : 'text-primary')}>
                  Nivel {i + 1}
                </span>
              </div>
              <h3 className={cn('text-2xl font-display font-bold mb-3', n.accent ? 'text-white' : 'text-dark')}>{n.nombre}</h3>
              <p className={cn('font-inter leading-relaxed mb-6', n.accent ? 'text-white/70' : 'text-gray-500')}>{n.desc}</p>
              <ul className="space-y-2.5 mt-auto">
                {n.perks.map((p) => (
                  <li key={p} className={cn('flex items-center gap-2.5 text-sm font-inter', n.accent ? 'text-white/90' : 'text-gray-700')}>
                    <ArrowRight className={cn('w-4 h-4 shrink-0', n.accent ? 'text-accent' : 'text-primary')} /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
