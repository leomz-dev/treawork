import Section from '@/components/ui-custom/Section';
import { MessageSquare, FileSearch, Wrench, CheckCircle } from 'lucide-react';

export default function ProfesionalesProceso() {
  const pasos = [
    {
      icon: MessageSquare,
      title: 'Cuéntanos tu caso',
      description: 'Conversamos de forma confidencial sobre tu proyecto o necesidad laboral.',
    },
    {
      icon: FileSearch,
      title: 'Evaluación y propuesta',
      description: 'Analizamos el alcance, plazos y te presentamos una propuesta clara con costos.',
    },
    {
      icon: Wrench,
      title: 'Ejecución del proyecto',
      description: 'Trabajamos en tu caso con profesionalismo, manteniéndote informado del avance.',
    },
    {
      icon: CheckCircle,
      title: 'Entrega y seguimiento',
      description: 'Entregamos el trabajo completo y brindamos soporte posterior si es necesario.',
    },
  ];

  return (
    <Section variant="default">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
          ¿Cómo trabajamos?
        </h2>
        <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
          Un proceso claro, profesional y confidencial
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {pasos.map((paso, index) => (
          <div key={index} className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="bg-secondary-blue text-white w-14 h-14 rounded-xl flex items-center justify-center font-montserrat font-bold text-xl">
                {index + 1}
              </div>
            </div>
            <div className="bg-white rounded-card p-6 flex-grow shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <paso.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-montserrat font-bold text-dark mb-2">
                    {paso.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {paso.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
