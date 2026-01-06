import { Metadata } from 'next';
import ProfesionalesHero from '@/components/profesionales/ProfesionalesHero';
import ProfesionalesServicios from '@/components/profesionales/ProfesionalesServicios';
import ProfesionalesProceso from '@/components/profesionales/ProfesionalesProceso';
import ProfesionalesValores from '@/components/profesionales/ProfesionalesValores';
import ProfesionalesCTA from '@/components/profesionales/ProfesionalesCTA';

export const metadata: Metadata = {
  title: 'Profesionales | TreaWork - Apoyo en Proyectos Laborales',
  description: 'Apoyo profesional en proyectos, investigaciones, documentos Office y asesoría tecnológica. Confidencialidad y cumplimiento garantizados.',
};

export default function ProfesionalesPage() {
  return (
    <>
      <ProfesionalesHero />
      <ProfesionalesServicios />
      <ProfesionalesProceso />
      <ProfesionalesValores />
      <ProfesionalesCTA />
    </>
  );
}
