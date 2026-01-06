import Section from '@/components/ui-custom/Section';

export default function Trust() {
  const metrics = [
    {
      number: '200+',
      label: 'Estudiantes acompañados',
      description: 'En todos los niveles',
    },
    {
      number: '500+',
      label: 'Proyectos realizados',
      description: 'Resultados exitosos',
    },
    {
      number: '100%',
      label: 'Personalizado',
      description: 'Atención 1 a 1',
    },
  ];

  return (
    <Section id="confianza" variant="default" className="py-24 border-y border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {metrics.map((metric, index) => (
          <div key={index} className="pt-8 md:pt-0 px-4">
            <div className="text-5xl md:text-6xl font-montserrat font-bold text-dark mb-2 tracking-tight">
              {metric.number}
            </div>
            <h3 className="text-lg font-bold text-primary mb-1 uppercase tracking-wider font-montserrat">
              {metric.label}
            </h3>
            <p className="text-gray-400 font-inter">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
