import Section from '@/components/ui-custom/Section';
import Card from '@/components/ui-custom/Card';
import { User, Code2, Target, Repeat } from 'lucide-react';

export default function TecnologiaEnfoque() {
  const diferencias = [
    {
      icon: User,
      title: '100% personalizado',
      description: 'Clases 1 a 1 adaptadas a tu nivel y objetivos. No videos pregrabados ni grupos grandes.',
    },
    {
      icon: Code2,
      title: 'Proyectos reales',
      description: 'Desde la primera clase construyes cosas. Aprenderás haciendo, no solo mirando.',
    },
    {
      icon: Target,
      title: 'Enfoque práctico',
      description: 'Te enseñamos lo necesario para que puedas crear tus propios proyectos, sin teoría innecesaria.',
    },
    {
      icon: Repeat,
      title: 'A tu ritmo',
      description: 'Avanzas según tu disponibilidad y capacidad de aprendizaje. Sin presiones ni plazos irreales.',
    },
  ];

  return (
    <Section variant="default">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
          Nuestro enfoque
        </h2>
        <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
          Lo que nos diferencia de otros cursos y bootcamps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {diferencias.map((diferencia, index) => (
          <Card key={index} hover>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                <diferencia.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold text-dark mb-2">
                  {diferencia.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {diferencia.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
