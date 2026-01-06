import Image from 'next/image';
import { Terminal, Code2 } from 'lucide-react';

export default function TecnologiaHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 md:pt-32 pb-20">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700 tracking-wide">Clases de Programación</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-dark mb-6 leading-tight">
              Aprende tecnología <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-blue">para la vida real</span>
            </h1>

            <p className="text-xl text-gray-500 font-inter mb-10 leading-relaxed max-w-xl">
              Clases personalizadas 1 a 1 de desarrollo web, Python y lógica de programación. Sin teoría innecesaria.
            </p>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <p className="text-gray-700 font-inter text-lg leading-relaxed">
                <span className="font-bold text-primary">Nuestra propuesta:</span> Avanzas a tu ritmo, haces proyectos reales y entiendes lo que programas.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/tecnologia-hero.png"
                  alt="Persona aprendiendo programación con mentor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-dark text-sm">100% Práctico</p>
                    <p className="text-xs text-gray-500">Proyectos reales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <p className="font-montserrat font-bold text-gray-400 mb-4 text-sm uppercase tracking-wider">Lo que NO hacemos</p>
            <ul className="space-y-3">
              {['Videos genéricos sin respuesta', 'Promesas falsas de empleo rápido', 'Grupos masivos sin atención'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-500 text-sm">
                  <span className="text-red-400 font-bold">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary p-6 rounded-2xl shadow-lg">
            <p className="font-montserrat font-bold text-white/80 mb-4 text-sm uppercase tracking-wider">Lo que SÍ hacemos</p>
            <ul className="space-y-3">
              {['Clases 1 a 1 personalizadas', 'Proyectos reales desde el día 1', 'Mentor disponible para tus dudas'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-sm">
                  <span className="text-accent font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


