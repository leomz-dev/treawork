import Link from 'next/link';
import { GraduationCap, Sparkles, ArrowRight } from 'lucide-react';
import WaButton from '@/components/shared/WaButton';
import Button from '@/components/ui-custom/Button';
import SpotlightCard from '@/components/SpotlightCard';
import { waMessages } from '@/lib/site';

export default function GlobalCTA() {
  return (
    <section className="py-14 md:py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Familias */}
        <SpotlightCard
          spotlightColor="rgba(255, 255, 255, 0.35)"
          className="!bg-primary !border-transparent !rounded-[2rem] !p-8 md:!p-10 shadow-blue"
        >
          <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-white/10 animate-blob" />
          <div className="relative">
            <GraduationCap className="w-10 h-10 text-white mb-5" />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight">
              ¿Listo para encontrar tu tutor?
            </h3>
            <p className="text-white/85 font-inter mb-7">
              Cuéntanos qué necesitas y te conectamos con el tutor ideal. Sin costo por buscar.
            </p>
            <WaButton message={waMessages.familia} label="Agendar clase" variant="white" size="large" />
          </div>
        </SpotlightCard>

        {/* Tutores */}
        <SpotlightCard
          spotlightColor="rgba(255, 106, 61, 0.4)"
          className="!bg-dark !border-transparent !rounded-[2rem] !p-8 md:!p-10 shadow-coral"
        >
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-accent/20 animate-blob" />
          <div className="relative">
            <Sparkles className="w-10 h-10 text-accent mb-5" />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-tight">
              ¿Se te da bien enseñar?
            </h3>
            <p className="text-white/70 font-inter mb-7">
              Postúlate, capacítate y empieza a ganar dinero enseñando. Nosotros te certificamos.
            </p>
            <Link href="/hazte-tutor">
              <Button variant="accent" size="large">
                Postularme como tutor
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
