import Section from '@/components/ui-custom/Section';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import StarRating from '@/components/shared/StarRating';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tipo = 'Estudiante' | 'Familia' | 'Tutor';

const testimonials: {
  name: string;
  role: string;
  tipo: Tipo;
  rating: number;
  text: string;
}[] = [
  {
    name: 'Kathlenn R.',
    role: 'Estudiante de 11°',
    tipo: 'Estudiante',
    rating: 5,
    text: 'Le tenía pánico a las matemáticas. Mi tutora me explicó a mi ritmo y ahora hasta me gustan. De verdad se nota que es joven y entiende cómo pensamos.',
  },
  {
    name: 'Carolina M.',
    role: 'Mamá de estudiante de 8°',
    tipo: 'Familia',
    rating: 5,
    text: 'Buscaba alguien de confianza y me tranquilizó ver que los tutores están certificados. Mi hijo subió sus notas y va contento a las clases.',
  },
  {
    name: 'Santiago M.',
    role: 'Tutor Senior · Programación',
    tipo: 'Tutor',
    rating: 5,
    text: 'Entré como Junior sin saber cómo dar clases. Me capacitaron, subí a Senior y hoy gano dinero enseñando lo que amo. TreaWork me cambió el semestre.',
  },
];

const tipoStyles: Record<Tipo, string> = {
  Estudiante: 'bg-primary/10 text-primary',
  Familia: 'bg-primary/10 text-primary',
  Tutor: 'bg-accent-soft text-accent-strong',
};

export default function Testimonials() {
  return (
    <Section id="testimonios" className="py-20 md:py-28 bg-gray-50/60">
      <SectionHeading
        eyebrow="Testimonios"
        title={<>Historias de <span className="text-gradient-brand">los dos lados</span></>}
        subtitle="Estudiantes que avanzaron y tutores que crecieron. Así se siente la comunidad."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="group relative flex flex-col h-full bg-white rounded-card p-8 shadow-sm hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 border border-gray-100"
          >
            <div className="absolute top-7 right-7 text-primary/10 group-hover:text-primary/20 transition-colors">
              <Quote size={44} fill="currentColor" />
            </div>

            <div className="flex items-center gap-4 mb-5 relative z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary-blue flex items-center justify-center text-white font-display font-bold text-lg">
                {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <h3 className="font-display font-bold text-dark text-lg">{t.name}</h3>
                <p className="text-sm text-gray-500 font-inter">{t.role}</p>
              </div>
            </div>

            <span className={cn('inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold font-inter mb-4', tipoStyles[t.tipo])}>
              {t.tipo}
            </span>

            <div className="mb-4">
              <StarRating rating={t.rating} />
            </div>

            <p className="text-gray-600 font-inter leading-relaxed flex-grow relative z-10">
              &ldquo;{t.text}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
