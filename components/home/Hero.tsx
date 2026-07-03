import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Star, BadgeCheck, ArrowRight } from 'lucide-react';
import Button from '@/components/ui-custom/Button';
import CountUp from '@/components/CountUp';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-4 md:pt-6 pb-16 md:pb-20">
      <div className="absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <div className="absolute -top-32 -right-24 w-[520px] h-[520px] bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 -left-24 w-[380px] h-[380px] bg-accent/10 rounded-full blur-3xl animate-blob" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-dark tracking-wide font-inter">
                Comunidad de tutores jóvenes certificados
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-dark mb-6 leading-[1.02] tracking-tight text-balance">
              Jóvenes que enseñan.{' '}
              <span className="text-gradient-brand">Estudiantes que avanzan.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-xl font-inter leading-relaxed mb-8">
              Identificamos, capacitamos y certificamos jóvenes con talento para enseñar, y los
              conectamos con estudiantes que necesitan una mano. Elige tu camino:
            </p>

            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              <Link href="/estudiantes" className="flex-1">
                <Button size="large" variant="primary" className="w-full shadow-blue">
                  Busco un tutor
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/hazte-tutor" className="flex-1">
                <Button size="large" variant="accent" className="w-full shadow-coral">
                  <Sparkles className="w-5 h-5" />
                  Quiero ser tutor
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <span className="text-gray-600 font-inter">4.9 promedio de tutores</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-inter">
                <BadgeCheck className="w-4 h-4 text-primary" />
                +40 tutores certificados
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-4 bg-primary/15 animate-blob" />
              <div className="relative w-full h-full overflow-hidden clip-blob-1 shadow-2xl bg-white">
                <Image
                  src="/images/hero-illustration.png"
                  alt="Tutor joven enseñando a un estudiante"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-dark text-sm">Tutores certificados</p>
                    <p className="text-xs text-gray-500">evaluados y verificados</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 bg-accent text-white rounded-2xl shadow-coral p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <p className="font-display font-bold text-2xl leading-none inline-flex items-baseline">
                  +<CountUp to={2500} separator="." duration={2.5} />
                </p>
                <p className="text-xs text-white/90">clases dictadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
