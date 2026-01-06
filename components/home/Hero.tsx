'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GraduationCap, Briefcase, Code2, ArrowRight } from 'lucide-react';
import Button from '@/components/ui-custom/Button';

export default function Hero() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Estudiantes',
      description: 'Refuerzo académico y acompañamiento.',
      href: '/estudiantes',
      color: 'text-primary',
      bg: 'bg-primary/5',
    },
    {
      icon: Briefcase,
      title: 'Profesionales',
      description: 'Apoyo en proyectos y documentos.',
      href: '/profesionales',
      color: 'text-secondary-blue',
      bg: 'bg-secondary-blue/5',
    },
    {
      icon: Code2,
      title: 'Tecnología',
      description: 'Clases de programación 1 a 1.',
      href: '/tecnologia',
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background pt-20 md:pt-32 pb-20">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Hero Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-secondary mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-gray-700 tracking-wide">Soluciones académicas y profesionales</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-dark mb-8 leading-tight tracking-tight">
              Eleva tu potencial <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-blue">
                al siguiente nivel
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-xl font-inter leading-relaxed mb-10">
              Acompañamiento experto para estudiar, trabajar y avanzar.
              Sin complicaciones, con resultados reales.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contacto">
                <Button size="large" variant="primary" className="shadow-premium hover:shadow-premium-hover min-w-[180px]">
                  Agenda tu consulta gratis
                </Button>
              </Link>
              <Link href="#proceso">
                <Button size="large" variant="outline" className="min-w-[180px]">
                  Ver cómo funciona
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/hero-main.png"
                  alt="Equipo colaborando en proyecto académico"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg">
                    ✓
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-dark">+500 proyectos</p>
                    <p className="text-sm text-gray-500">completados con éxito</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative bg-white/50 backdrop-blur-sm border border-border/50 rounded-card p-8 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`${service.bg} ${service.color} p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-montserrat font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 font-inter leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

