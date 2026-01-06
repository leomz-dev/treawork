import Section from '@/components/ui-custom/Section';
import Card from '@/components/ui-custom/Card';
import { FolderOpen, FileText, PresentationIcon, Laptop } from 'lucide-react';

export default function ProfesionalesServicios() {
  const servicios = [
    {
      icon: FolderOpen,
      title: 'Proyectos laborales',
      description: 'Apoyo en planificación y ejecución. Te acompañamos para que entregues resultados de calidad.',
      ejemplos: [
        'Proyectos de investigación',
        'Análisis de datos',
        'Propuestas comerciales',
      ],
      color: 'text-secondary-blue',
      bg: 'bg-secondary-blue/10',
    },
    {
      icon: FileText,
      title: 'Investigaciones',
      description: 'Asistencia en investigaciones complejas y documentos que requieren rigor.',
      ejemplos: [
        'Informes ejecutivos',
        'Estudios de mercado',
        'Monografías profesionales',
      ],
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: PresentationIcon,
      title: 'Documentos Office',
      description: 'Optimización de documentos en Word, Excel y PowerPoint con presentación impecable.',
      ejemplos: [
        'Presentaciones corporativas',
        'Hojas de cálculo avanzadas',
        'Plantillas personalizadas',
      ],
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      icon: Laptop,
      title: 'Asesoría tecnológica',
      description: 'Orientación en herramientas digitales y automatización de procesos.',
      ejemplos: [
        'Automatización de tareas',
        'Optimización de flujos',
        'Consultoría tecnológica',
      ],
      color: 'text-dark',
      bg: 'bg-dark/5',
    },
  ];

  return (
    <Section variant="colored" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-dark mb-4">
          Servicios Profesionales
        </h2>
        <p className="text-lg text-gray-500 font-inter max-w-2xl mx-auto">
          Diseñados para aliviar tu carga laboral con excelencia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {servicios.map((servicio, index) => (
          <Card key={index} hover className="flex flex-col h-full shadow-premium hover:shadow-premium-hover border-transparent">
            <div className="flex items-start justify-between mb-6">
              <div className={`${servicio.bg} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                <servicio.icon className={`w-7 h-7 ${servicio.color}`} />
              </div>
              <div className="px-3 py-1 rounded-full bg-gray-50 text-xs font-bold text-gray-400 font-montserrat tracking-wider">
                SERVICIO
              </div>
            </div>

            <h3 className="text-2xl font-montserrat font-bold text-dark mb-3">
              {servicio.title}
            </h3>
            <p className="text-gray-500 font-inter mb-8 leading-relaxed">
              {servicio.description}
            </p>

            <div className="mt-auto bg-gray-50/50 rounded-xl p-5 border border-gray-100">
              <p className="text-xs font-montserrat font-bold text-gray-400 mb-3 uppercase tracking-wider">
                Incluye:
              </p>
              <ul className="space-y-2">
                {servicio.ejemplos.map((ejemplo, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-blue" />
                    <span className="text-gray-600 font-inter text-sm">{ejemplo}</span>
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
