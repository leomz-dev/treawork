import Image from 'next/image';
import { BookOpen, Clock, Frown, CheckCircle } from 'lucide-react';

export default function EstudiantesHero() {
  const problems = [
    {
      icon: Frown,
      text: 'No entiendes las clases',
    },
    {
      icon: Clock,
      text: 'Tareas largas sin tiempo',
    },
    {
      icon: BookOpen,
      text: 'Proyectos complejos',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background pt-20 md:pt-32 pb-20">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
              <span className="text-sm font-medium text-primary tracking-wide">Para Estudiantes</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-dark mb-6 leading-tight">
              Acompañamiento académico <br />
              <span className="text-primary">personalizado</span>
            </h1>
            <p className="text-xl text-gray-500 font-inter mb-10 leading-relaxed max-w-xl">
              Clases 1 a 1, refuerzo académico y apoyo en proyectos para estudiantes de primaria, bachillerato y universidad.
            </p>

            <div className="bg-white rounded-2xl p-6 border border-primary/10 shadow-lg">
              <p className="text-lg font-inter text-dark leading-relaxed">
                <span className="text-primary font-bold block mb-2">La solución:</span>
                Acompañamiento académico real, donde trabajamos contigo de forma personalizada para que entiendas, aprendas y logres tus objetivos.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/estudiantes-hero.png"
                  alt="Estudiante recibiendo tutoría personalizada"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-dark text-sm">Atención 1 a 1</p>
                    <p className="text-xs text-gray-500">100% personalizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white/50 backdrop-blur-sm border border-red-100 p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-red-200 transition-colors">
              <div className="bg-red-50 text-red-500 p-4 rounded-full">
                <problem.icon className="w-6 h-6" />
              </div>
              <p className="font-montserrat font-medium text-dark">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

