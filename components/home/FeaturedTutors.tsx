import Link from 'next/link';
import Section from '@/components/ui-custom/Section';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import TutorCard from '@/components/shared/TutorCard';
import Button from '@/components/ui-custom/Button';
import { tutors } from '@/lib/tutors';
import { ArrowRight } from 'lucide-react';

export default function FeaturedTutors() {
  const featured = tutors.slice(0, 3);

  return (
    <Section variant="default" className="py-20 md:py-28">
      <SectionHeading
        eyebrow="Conoce a la comunidad"
        accent="accent"
        title={<>Tutores reales, <span className="text-accent-strong">certificados y bien calificados</span></>}
        subtitle="Cada perfil pasó por capacitación, evaluación y certificación. Estos son solo algunos."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/tutores">
          <Button variant="primary" size="large">
            Ver todos los tutores
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
