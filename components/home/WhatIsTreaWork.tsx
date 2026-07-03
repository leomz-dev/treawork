import Section from '@/components/ui-custom/Section';
import Image from 'next/image';
import { BadgeCheck, HeartHandshake, Rocket, Users } from 'lucide-react';

export default function WhatIsTreaWork() {
  const benefits = [
    { icon: BadgeCheck, text: 'Tutores certificados de verdad' },
    { icon: Users, text: 'Jóvenes enseñando a jóvenes' },
    { icon: HeartHandshake, text: 'Match según lo que necesitas' },
    { icon: Rocket, text: 'Crecimiento real para tutores' },
  ];

  return (
    <Section variant="default" className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
            <div className="absolute inset-4 bg-accent/15 animate-blob" />
            <div className="relative w-full h-full overflow-hidden clip-blob-2 shadow-xl bg-white">
              <Image src="/images/match-illustration.png" alt="Familia buscando el tutor ideal" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-primary text-white rounded-2xl shadow-blue p-5 animate-float">
              <p className="text-3xl font-display font-bold leading-none">98%</p>
              <p className="text-xs text-white/80 mt-1">repetiría con su tutor</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft border border-accent/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent-strong">Qué es TreaWork</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-5 leading-[1.1] tracking-tight text-balance">
            No somos una agencia.{' '}
            <span className="text-primary">Somos una comunidad.</span>
          </h2>

          <p className="text-lg text-gray-500 font-inter leading-relaxed mb-8">
            Buscamos jóvenes con talento para enseñar, los formamos y certificamos, y los conectamos
            con estudiantes que necesitan apoyo. De un lado, familias que encuentran un tutor confiable.
            Del otro, jóvenes que ganan dinero y crecen haciendo lo que aman.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <li key={b.text} className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5" />
                </span>
                <span className="text-gray-700 font-inter text-sm">{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
