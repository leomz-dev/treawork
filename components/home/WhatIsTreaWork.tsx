import Section from '@/components/ui-custom/Section';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function WhatIsTreaWork() {
  const benefits = [
    'Atención 100% personalizada',
    'Confidencialidad garantizada',
    'Resultados comprobados',
    'Expertos en cada área',
  ];

  return (
    <Section variant="default" className="py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform -rotate-3" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden">
                <Image
                  src="/images/about-illustration.png"
                  alt="Crecimiento profesional y académico"
                  fill
                  className="object-cover "
                />
              </div>
              {/* Stats Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl shadow-xl p-6">
                <p className="text-4xl font-montserrat font-bold">98%</p>
                <p className="text-sm text-white/80">de satisfacción</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-gray-700">Sobre nosotros</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-dark mb-6 leading-tight">
              Más que una agencia, <br />
              <span className="text-primary">tu aliado estratégico.</span>
            </h2>

            <p className="text-lg text-gray-500 font-inter leading-relaxed mb-8">
              En TreaWork ofrecemos soluciones académicas, profesionales y tecnológicas de alto nivel.
              Trabajamos de forma personalizada para garantizar que alcances tus objetivos con claridad, confidencialidad y excelencia.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-600 font-inter">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

