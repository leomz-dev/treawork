import Image from 'next/image';
import { CheckCircle2, AlertCircle, Briefcase } from 'lucide-react';

export default function ProfesionalesHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 md:pt-32 pb-20">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-secondary-blue/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-blue/5 border border-secondary-blue/10 mb-8">
              <span className="text-sm font-medium text-secondary-blue tracking-wide">Para Profesionales</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-dark mb-6 leading-tight">
              Apoyo profesional para <br />
              <span className="text-secondary-blue">tus proyectos laborales</span>
            </h1>

            <p className="text-xl text-gray-500 font-inter mb-10 leading-relaxed max-w-xl">
              Te ayudamos con proyectos, investigaciones, documentos y asesoría tecnológica de forma confidencial y profesional.
            </p>

            <div className="bg-secondary-blue/5 p-6 rounded-2xl border border-secondary-blue/10">
              <p className="text-dark font-inter text-lg leading-relaxed">
                <span className="font-bold text-secondary-blue">Te entendemos.</span> Trabajamos contigo de forma profesional, confidencial y enfocada en resultados.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-blue/20 to-primary/10 rounded-3xl transform -rotate-3" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/profesionales-hero.png"
                  alt="Profesional trabajando en proyecto con consultor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-blue flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-dark text-sm">Confidencial</p>
                    <p className="text-xs text-gray-500">y profesional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Card */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-card p-8 shadow-premium border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-blue to-primary" />
            <h3 className="text-xl font-montserrat font-bold text-dark mb-6 flex items-center gap-3">
              <AlertCircle className="text-accent w-6 h-6" />
              ¿Te sientes identificado?
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Proyectos complejos sin tiempo suficiente',
                'Informes que requieren mucho detalle',
                'Presentaciones con poco margen de error',
                'Necesitas apoyo técnico especializado'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-secondary-blue mt-0.5 shrink-0" />
                  <span className="text-gray-600 font-inter text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

