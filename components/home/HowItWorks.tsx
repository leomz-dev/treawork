import Section from '@/components/ui-custom/Section';
import { MessageSquare, Search, Lightbulb, Target } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Nos cuentas tu necesidad',
      description: 'Conversamos para entender exactamente qué necesitas y cuáles son tus objetivos.',
    },
    {
      icon: Search,
      number: '02',
      title: 'Evaluamos el caso',
      description: 'Analizamos tu situación de forma profesional y determinamos la mejor forma de ayudarte.',
    },
    {
      icon: Lightbulb,
      number: '03',
      title: 'Diseñamos una solución',
      description: 'Creamos un plan personalizado con pasos claros y plazos realistas.',
    },
    {
      icon: Target,
      number: '04',
      title: 'Acompañamos hasta el resultado',
      description: 'Trabajamos contigo de forma constante hasta lograr el objetivo.',
    },
  ];

  return (
    <Section id="proceso" variant="default" className="bg-gray-50/50">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-gray-700 tracking-wide">Proceso simple</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-dark mb-4">
          ¿Cómo funciona?
        </h2>
        <p className="text-lg text-gray-500 font-inter max-w-2xl mx-auto">
          Un proceso simple y efectivo para acompañarte.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Connecting Line - Desktop */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number Circle */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-montserrat font-bold text-xl shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  {/* Connecting Dot */}
                  <div className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-white shadow-sm" />
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-montserrat font-bold text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-inter text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow for mobile/tablet */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-0.5 h-8 bg-primary/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

