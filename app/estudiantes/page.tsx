import { Metadata } from 'next';
import EstudiantesHero from '@/components/estudiantes/EstudiantesHero';
import EstudiantesServicios from '@/components/estudiantes/EstudiantesServicios';
import EstudiantesProceso from '@/components/estudiantes/EstudiantesProceso';
import EstudiantesParaQuien from '@/components/estudiantes/EstudiantesParaQuien';
import EstudiantesCTA from '@/components/estudiantes/EstudiantesCTA';

export const metadata: Metadata = {
  title: 'Estudiantes | TreaWork - Acompañamiento Académico Personalizado',
  description: 'Clases 1 a 1, refuerzo académico y apoyo en proyectos. Acompañamiento real para estudiantes de primaria, bachillerato y universidad.',
};

export default function EstudiantesPage() {
  return (
    <>
      <EstudiantesHero />
      <EstudiantesServicios />
      <EstudiantesProceso />
      <EstudiantesParaQuien />
      <EstudiantesCTA />
    </>
  );
}
