'use client';

import { GraduationCap, MonitorSmartphone, MapPin, MessageCircle } from 'lucide-react';
import { Tutor } from '@/lib/tutors';
import { whatsappUrl } from '@/lib/site';
import StarRating from '@/components/shared/StarRating';
import LevelBadge, { CertifiedBadge } from '@/components/shared/LevelBadge';

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  const handleContact = () => {
    const msg = `Hola TreaWork 👋 Me interesa agendar clase con ${tutor.nombre} (${tutor.materias.join(', ')}).`;
    window.open(whatsappUrl(msg), '_blank');
  };

  return (
    <article className="group relative flex flex-col bg-white rounded-card p-6 border border-gray-100 shadow-sm hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary-blue flex items-center justify-center text-white font-display font-bold text-xl">
            {initials(tutor.nombre)}
          </div>
          <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-accent border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">
            ✓
          </span>
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display font-bold text-dark text-lg truncate">{tutor.nombre}</h3>
          </div>
          <p className="text-sm text-gray-500 font-inter">{tutor.edad} años · {tutor.ciudad}</p>
          <div className="mt-1.5">
            <StarRating rating={tutor.rating} showNumber size={14} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <LevelBadge nivel={tutor.nivel} />
        <CertifiedBadge />
      </div>

      <p className="text-sm text-gray-600 font-inter leading-relaxed mb-4 flex-grow">{tutor.bio}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {tutor.materias.map((m) => (
          <span key={m} className="px-2.5 py-1 rounded-lg bg-primary/5 text-primary text-xs font-medium font-inter">
            {m}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-500 font-inter mb-5">
        <span className="inline-flex items-center gap-1.5">
          <GraduationCap className="w-4 h-4 text-primary" /> {tutor.clasesDadas} clases
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MonitorSmartphone className="w-4 h-4 text-primary" /> {tutor.modalidad}
        </span>
      </div>

      <button
        onClick={handleContact}
        className="w-full inline-flex items-center justify-center gap-2 rounded-button bg-primary text-white font-display font-semibold py-3 hover:bg-secondary-blue transition-colors active:scale-95"
      >
        <MessageCircle className="w-4 h-4" />
        Agendar clase
      </button>
    </article>
  );
}
