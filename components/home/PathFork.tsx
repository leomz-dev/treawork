import Link from 'next/link';
import { GraduationCap, Sparkles, ArrowRight, Check } from 'lucide-react';
import ShinyText from '@/components/ShinyText';

const familiaPoints = [
  'Tutores certificados y evaluados',
  'Clases 1 a 1, online o presencial',
  'Encuentra tu match en minutos',
];

const tutorPoints = [
  'Capacitación y certificación gratis',
  'Gana dinero enseñando lo que sabes',
  'Crece: Junior → Senior → Mentor',
];

export default function PathFork() {
  return (
    <section id="elige-tu-camino" className="relative py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4 tracking-tight text-balance">
            ¿Con qué llegaste hoy?
          </h2>
          <p className="text-lg text-gray-500 font-inter">
            TreaWork tiene dos lados. Elige el tuyo y te llevamos justo a donde necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Familias / estudiantes */}
          <Link
            href="/estudiantes"
            className="group relative overflow-hidden rounded-[2rem] bg-white border border-primary/15 p-8 md:p-10 hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7" />
              </div>
              <span className="text-xs font-display font-bold uppercase tracking-wider text-primary">Para familias y estudiantes</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-dark mt-2 mb-3">
                Busco un tutor
              </h3>
              <p className="text-gray-500 font-inter leading-relaxed mb-6">
                Refuerzo académico serio con jóvenes que ya pasaron por lo mismo. Sin enredos, con resultados.
              </p>
              <ul className="space-y-2.5 mb-8">
                {familiaPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-gray-700 font-inter">
                    <Check className="w-4 h-4 text-primary shrink-0" /> {p}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 font-display font-semibold text-primary group-hover:gap-3 transition-all">
                Encontrar mi tutor <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>

          {/* Tutores */}
          <Link
            href="/hazte-tutor"
            className="group relative overflow-hidden rounded-[2rem] bg-dark p-8 md:p-10 hover:shadow-coral hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors animate-blob" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <ShinyText
                text="Para jóvenes con talento"
                className="text-xs font-display font-bold uppercase tracking-wider"
                color="#FF8A63"
                shineColor="#ffffff"
                speed={3}
              />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-2 mb-3">
                Quiero ser tutor
              </h3>
              <p className="text-white/70 font-inter leading-relaxed mb-6">
                ¿Se te da bien una materia? Te capacitamos, te certificamos y te conectamos con estudiantes. Tú pones el talento.
              </p>
              <ul className="space-y-2.5 mb-8">
                {tutorPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-white/90 font-inter">
                    <Check className="w-4 h-4 text-accent shrink-0" /> {p}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 font-display font-semibold text-accent group-hover:gap-3 transition-all">
                Postularme como tutor <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
