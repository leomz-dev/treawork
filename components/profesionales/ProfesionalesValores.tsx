import Section from '@/components/ui-custom/Section';
import Card from '@/components/ui-custom/Card';
import { Lock, Clock, MessageSquareText } from 'lucide-react';

export default function ProfesionalesValores() {
  const valores = [
    {
      icon: Lock,
      title: 'Confidencialidad',
      description: 'Tu información y proyectos están protegidos. Trabajamos con total discreción y respeto por tu privacidad.',
    },
    {
      icon: Clock,
      title: 'Cumplimiento',
      description: 'Respetamos los plazos acordados. Si aceptamos un proyecto, es porque podemos entregarlo a tiempo.',
    },
    {
      icon: MessageSquareText,
      title: 'Claridad',
      description: 'Comunicación directa y transparente. Siempre sabrás en qué estamos trabajando y cuál es el avance.',
    },
  ];

  return (
    <Section variant="colored">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
          Nuestros valores profesionales
        </h2>
        <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
          Lo que nos diferencia y garantiza un trabajo serio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {valores.map((valor, index) => (
          <Card key={index} hover className="text-center">
            <div className="bg-secondary-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <valor.icon className="w-10 h-10 text-secondary-blue" />
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-dark mb-4">
              {valor.title}
            </h3>
            <p className="text-gray-600 font-inter leading-relaxed">
              {valor.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
