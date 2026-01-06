import Section from '@/components/ui-custom/Section';
import Card from '@/components/ui-custom/Card';
import { BookOpen, ClipboardList, Users } from 'lucide-react';

export default function EstudiantesServicios() {
  const servicios = [
    {
      icon: BookOpen,
      title: 'Refuerzo académico',
      description: 'Clases personalizadas 1 a 1 en las materias que más te cuesten.',
      features: [
        'Matemáticas, física, química',
        'Lengua, literatura, inglés',
        'Ciencias sociales y naturales',
      ],
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: ClipboardList,
      title: 'Apoyo en tareas',
      description: 'Te acompañamos en trabajos largos, investigaciones y proyectos complejos.',
      features: [
        'Trabajos de investigación',
        'Ensayos y monografías',
        'Proyectos de grado',
      ],
      color: 'text-secondary-blue',
      bg: 'bg-secondary-blue/10',
    },
    {
      icon: Users,
      title: 'Acompañamiento',
      description: 'Seguimiento real de tu proceso académico durante todo el periodo.',
      features: [
        'Sesiones programadas',
        'Seguimiento de notas',
        'Apoyo en exámenes',
      ],
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
  ];

  return (
    <Section variant="colored" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-dark mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-lg text-gray-500 font-inter max-w-2xl mx-auto">
          Diseñados para que alcances tus objetivos académicos sin estrés.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <Card key={index} hover className="flex flex-col h-full border-transparent shadow-premium hover:shadow-premium-hover">
            <div className={`${servicio.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
              <servicio.icon className={`w-8 h-8 ${servicio.color}`} />
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-dark mb-4">
              {servicio.title}
            </h3>
            <p className="text-gray-500 font-inter mb-8 leading-relaxed">
              {servicio.description}
            </p>
            <ul className="space-y-3 mt-auto border-t border-gray-100 pt-6">
              {servicio.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-gray-600 font-inter text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
