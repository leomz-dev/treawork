import Section from '@/components/ui-custom/Section';
import { MessageSquare, Calendar, BookOpen, TrendingUp } from 'lucide-react';

export default function EstudiantesProceso() {
  const pasos = [
    {
      icon: MessageSquare,
      title: 'Conversación inicial',
      description: 'Nos cuentas qué materias necesitas reforzar o qué proyecto tienes que hacer.',
    },
    {
      icon: Calendar,
      title: 'Agendar primera sesión',
      description: 'Coordinamos horarios y definimos la mejor forma de trabajar contigo.',
    },
    {
      icon: BookOpen,
      title: 'Clases personalizadas',
      description: 'Comenzamos el acompañamiento con explicaciones claras y ejercicios prácticos.',
    },
    {
      icon: TrendingUp,
      title: 'Seguimiento y resultados',
      description: 'Evaluamos tu progreso constantemente y ajustamos el plan según tus necesidades.',
    },
  ];

  return (
    <Section variant="default">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
          ¿Cómo trabajamos contigo?
        </h2>
        <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
          Un proceso claro y organizado para tu éxito académico
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {pasos.map((paso, index) => (
          <div key={index} className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="bg-primary text-white w-14 h-14 rounded-xl flex items-center justify-center font-montserrat font-bold text-xl">
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
