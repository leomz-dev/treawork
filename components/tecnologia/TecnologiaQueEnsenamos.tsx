import Section from '@/components/ui-custom/Section';
import Card from '@/components/ui-custom/Card';
import { Globe, Code, Blocks } from 'lucide-react';

export default function TecnologiaQueEnsenamos() {
  const areas = [
    {
      icon: Globe,
      title: 'Desarrollo Web',
      description: 'Crea sitios y aplicaciones web desde cero. HTML, CSS, JavaScript y frameworks.',
      temas: [
        'HTML y CSS desde cero',
        'JavaScript y DOM',
        'React y Next.js',
      ],
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: Code,
      title: 'Python',
      description: 'Automatización, análisis de datos y desarrollo de aplicaciones.',
      temas: [
        'Fundamentos de Python',
        'Estructuras de datos',
        'Automatización de tareas',
      ],
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      icon: Blocks,
      title: 'Lógica de programación',
      description: 'Aprende a pensar como programador y resolver problemas con código.',
      temas: [
        'Algoritmos básicos',
        'Resolución de problemas',
        'Pensamiento computacional',
      ],
      color: 'text-secondary-blue',
      bg: 'bg-secondary-blue/10',
    },
  ];

  return (
    <Section variant="colored" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-dark mb-4">
          Áreas de Aprendizaje
        </h2>
        <p className="text-lg text-gray-500 font-inter max-w-2xl mx-auto">
          Tecnología práctica con alta demanda laboral.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <Card key={index} hover className="flex flex-col h-full shadow-premium hover:shadow-premium-hover border-transparent">
            <div className={`${area.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
              <area.icon className={`w-8 h-8 ${area.color}`} />
            </div>

            <h3 className="text-2xl font-montserrat font-bold text-dark mb-3">
              {area.title}
            </h3>
            <p className="text-gray-500 font-inter mb-8 leading-relaxed">
              {area.description}
            </p>

            <div className="mt-auto bg-gray-50 rounded-xl p-4">
              <p className="text-xs font-montserrat font-bold text-gray-400 mb-3 uppercase tracking-wider">
                Temas clave:
              </p>
              <ul className="space-y-2">
                {area.temas.map((tema, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-dark" />
                    <span className="text-gray-600 font-inter text-sm">{tema}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
