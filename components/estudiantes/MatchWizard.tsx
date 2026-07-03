'use client';

import { useState } from 'react';
import {
  Calculator,
  FlaskConical,
  Languages,
  Code2,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  MonitorSmartphone,
  MapPin,
  Blend,
  RotateCcw,
  MessageCircle,
  Sparkles,
  LucideIcon,
} from 'lucide-react';
import { tutors, Tutor, Modalidad } from '@/lib/tutors';
import { whatsappUrl } from '@/lib/site';
import StarRating from '@/components/shared/StarRating';
import LevelBadge, { CertifiedBadge } from '@/components/shared/LevelBadge';
import { cn } from '@/lib/utils';

interface Option {
  value: string;
  label: string;
  icon: LucideIcon;
  materias?: string[];
}

const materias: Option[] = [
  { value: 'Matemáticas', label: 'Matemáticas / Cálculo', icon: Calculator, materias: ['Matemáticas', 'Cálculo', 'Álgebra', 'Estadística'] },
  { value: 'Ciencias', label: 'Física / Química / Bio', icon: FlaskConical, materias: ['Física', 'Química', 'Biología'] },
  { value: 'Idiomas', label: 'Inglés / Español', icon: Languages, materias: ['Inglés', 'Español', 'Lectura crítica'] },
  { value: 'Programación', label: 'Programación / Tech', icon: Code2, materias: ['Programación', 'Python', 'Desarrollo Web', 'React'] },
  { value: 'Otra', label: 'Otra materia', icon: BookOpen, materias: [] },
];

const niveles: Option[] = [
  { value: 'Primaria', label: 'Primaria', icon: BookOpen },
  { value: 'Bachillerato', label: 'Bachillerato', icon: BookOpen },
  { value: 'Universidad', label: 'Universidad', icon: BookOpen },
];

const modalidades: { value: Modalidad; label: string; icon: LucideIcon }[] = [
  { value: 'Online', label: 'Online', icon: MonitorSmartphone },
  { value: 'Presencial', label: 'Presencial', icon: MapPin },
  { value: 'Híbrida', label: 'Híbrida', icon: Blend },
];

function initials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

function pickTutor(materiaKey: string, nivel: string, modalidad: Modalidad): Tutor {
  const materiaGroup = materias.find((m) => m.value === materiaKey)?.materias ?? [];
  const targetArea = materiaKey === 'Programación' ? 'Tecnología' : nivel === 'Universidad' ? 'Universidad' : 'Colegio';

  const scored = tutors
    .map((t) => {
      let score = 0;
      if (t.materias.some((m) => materiaGroup.includes(m))) score += 4;
      if (t.area === targetArea) score += 3;
      if (t.modalidad === modalidad) score += 2;
      score += t.rating / 2;
      return { t, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored[0].t;
}

const steps = ['Materia', 'Nivel', 'Modalidad'];

export default function MatchWizard() {
  const [step, setStep] = useState(0);
  const [materia, setMateria] = useState('');
  const [nivel, setNivel] = useState('');
  const [modalidad, setModalidad] = useState<Modalidad | ''>('');

  const canNext = (step === 0 && materia) || (step === 1 && nivel) || (step === 2 && modalidad);
  const showResult = step === 3;
  const tutor = showResult && modalidad ? pickTutor(materia, nivel, modalidad as Modalidad) : null;

  const reset = () => {
    setStep(0);
    setMateria('');
    setNivel('');
    setModalidad('');
  };

  const handleContact = () => {
    if (!tutor) return;
    const msg = `Hola TreaWork 👋 Busco tutor de ${materia} para nivel ${nivel}, modalidad ${modalidad}. Me interesa ${tutor.nombre}. ¿Me ayudan a agendar?`;
    window.open(whatsappUrl(msg), '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative rounded-[2rem] bg-white border border-gray-100 shadow-premium p-6 md:p-10 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-primary/5" />

        {/* Progress */}
        {!showResult && (
          <div className="relative flex items-center gap-2 mb-8">
            {steps.map((label, i) => (
              <div key={label} className="flex-1">
                <div className={cn('h-1.5 rounded-full transition-colors', i <= step ? 'bg-primary' : 'bg-gray-100')} />
                <span className={cn('text-xs font-inter mt-2 inline-block', i === step ? 'text-primary font-semibold' : 'text-gray-400')}>
                  {i + 1}. {label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Step 0: Materia */}
        {step === 0 && (
          <div className="relative animate-fade-in-up">
            <h3 className="text-2xl font-display font-bold text-dark mb-1">¿En qué materia necesitas ayuda?</h3>
            <p className="text-gray-500 font-inter mb-6">Elige el área principal.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {materias.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setMateria(m.value)}
                  className={cn(
                    'flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all',
                    materia === m.value ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-primary/30'
                  )}
                >
                  <span className={cn('w-10 h-10 rounded-lg flex items-center justify-center shrink-0', materia === m.value ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500')}>
                    <m.icon className="w-5 h-5" />
                  </span>
                  <span className="font-inter font-medium text-dark">{m.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Nivel */}
        {step === 1 && (
          <div className="relative animate-fade-in-up">
            <h3 className="text-2xl font-display font-bold text-dark mb-1">¿Qué nivel es?</h3>
            <p className="text-gray-500 font-inter mb-6">Así encontramos al tutor indicado.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {niveles.map((n) => (
                <button
                  key={n.value}
                  onClick={() => setNivel(n.value)}
                  className={cn(
                    'p-5 rounded-xl border-2 text-center transition-all font-inter font-medium',
                    nivel === n.value ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 hover:border-primary/30 text-dark'
                  )}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Modalidad */}
        {step === 2 && (
          <div className="relative animate-fade-in-up">
            <h3 className="text-2xl font-display font-bold text-dark mb-1">¿Cómo prefieres las clases?</h3>
            <p className="text-gray-500 font-inter mb-6">Tú eliges lo más cómodo.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {modalidades.map((mo) => (
                <button
                  key={mo.value}
                  onClick={() => setModalidad(mo.value)}
                  className={cn(
                    'flex flex-col items-center gap-2 p-5 rounded-xl border-2 transition-all',
                    modalidad === mo.value ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-primary/30'
                  )}
                >
                  <mo.icon className={cn('w-6 h-6', modalidad === mo.value ? 'text-primary' : 'text-gray-400')} />
                  <span className="font-inter font-medium text-dark">{mo.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result */}
        {showResult && tutor && (
          <div className="relative animate-fade-in-up text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-5">
              <Sparkles className="w-4 h-4" /> ¡Tenemos tu match!
            </div>
            <p className="text-gray-500 font-inter mb-6">
              Para <b className="text-dark">{materia}</b> · <b className="text-dark">{nivel}</b> · <b className="text-dark">{modalidad}</b>, te recomendamos:
            </p>

            <div className="rounded-card border border-gray-100 shadow-sm p-6 text-left max-w-md mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary-blue flex items-center justify-center text-white font-display font-bold text-xl">
                  {initials(tutor.nombre)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-dark text-lg">{tutor.nombre}</h4>
                  <p className="text-sm text-gray-500 font-inter">{tutor.edad} años · {tutor.ciudad}</p>
                  <div className="mt-1"><StarRating rating={tutor.rating} showNumber size={14} /></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <LevelBadge nivel={tutor.nivel} />
                <CertifiedBadge />
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {tutor.materias.map((m) => (
                  <span key={m} className="px-2.5 py-1 rounded-lg bg-primary/5 text-primary text-xs font-medium font-inter">{m}</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 font-inter">{tutor.bio}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
              <button
                onClick={handleContact}
                className="inline-flex items-center justify-center gap-2 rounded-button bg-primary text-white font-display font-semibold px-6 py-3.5 hover:bg-secondary-blue transition-colors active:scale-95"
              >
                <MessageCircle className="w-5 h-5" /> Agendar con {tutor.nombre.split(' ')[0]}
              </button>
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-button border-2 border-gray-200 text-gray-600 font-display font-semibold px-6 py-3.5 hover:border-primary hover:text-primary transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Empezar de nuevo
              </button>
            </div>
          </div>
        )}

        {/* Nav */}
        {!showResult && (
          <div className="relative flex items-center justify-between mt-8">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 text-gray-500 font-inter disabled:opacity-0 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Atrás
            </button>
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext}
              className="inline-flex items-center gap-2 rounded-button bg-primary text-white font-display font-semibold px-6 py-3 hover:bg-secondary-blue transition-colors disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
            >
              {step === 2 ? 'Ver mi tutor' : 'Siguiente'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
