import Section from '@/components/ui-custom/Section';
import CountUp from '@/components/CountUp';

export default function Trust() {
  const metrics = [
    { prefix: '+', to: 40, separator: '', label: 'Tutores certificados', description: 'Evaluados uno por uno' },
    { prefix: '+', to: 2500, separator: '.', label: 'Clases dictadas', description: 'Y sumando cada semana' },
    { prefix: '', to: 4.9, separator: '', label: 'Calificación promedio', description: 'De estudiantes reales' },
    { prefix: '', to: 3, separator: '', label: 'Niveles de tutor', description: 'Junior · Senior · Mentor' },
  ];

  return (
    <Section id="confianza" variant="default" className="py-20 border-y border-gray-100">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
        {metrics.map((metric, index) => (
          <div key={index} className="px-2">
            <div className="text-4xl md:text-6xl font-display font-bold text-dark mb-2 tracking-tight inline-flex items-baseline justify-center">
              {metric.prefix && <span>{metric.prefix}</span>}
              <CountUp to={metric.to} separator={metric.separator} duration={2} />
            </div>
            <h3 className="text-sm font-bold text-primary mb-1 uppercase tracking-wider font-display">
              {metric.label}
            </h3>
            <p className="text-gray-400 font-inter text-sm">{metric.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
