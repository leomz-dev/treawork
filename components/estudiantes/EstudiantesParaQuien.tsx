import Section from '@/components/ui-custom/Section';
import Card from '@/components/ui-custom/Card';
import { Check, X } from 'lucide-react';

export default function EstudiantesParaQuien() {
  const paraQuien = [
    'Estudiantes que necesitan refuerzo académico',
    'Quienes tienen proyectos o trabajos largos',
    'Personas comprometidas con mejorar sus notas',
    'Estudiantes de primaria, bachillerato o universidad',
  ];

  const paraQuienNo = [
    'Quien busca que hagamos el trabajo por ellos',
    'Quien no está dispuesto a participar activamente',
    'Quien espera resultados inmediatos sin esfuerzo',
  ];

  return (
    <Section variant="colored">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
          ¿Es para ti?
        </h2>
        <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
          Claridad sobre quién se beneficia de nuestro acompañamiento
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="border-2 border-green-500/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-500 text-white p-2 rounded-lg">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-dark">
              Es para ti si...
            </h3>
          </div>
          <ul className="space-y-4">
            {paraQuien.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-inter leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="border-2 border-red-500/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-500 text-white p-2 rounded-lg">
              <X className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-montserrat font-bold text-dark">
              No es para ti si...
            </h3>
          </div>
          <ul className="space-y-4">
            {paraQuienNo.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-inter leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
