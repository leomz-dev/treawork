'use client';

import Section from '@/components/ui-custom/Section';
import Card from '@/components/ui-custom/Card';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Kathlenn Rodriguez',
        role: 'Estudiante de 11°',
        university: 'IED Maria Inmaculada',
        image: '/images/testimonial-1.png',
        rating: 5,
        text: 'Gracias a TreaWork logré entender temas de matematicas que me parecian complejos. La atención personalizada hace toda la diferencia.',
    },
    {
        name: 'Carol Rodriguez',
        role: 'Estudiante de 8°',
        university: 'IED CAH',
        image: null,
        rating: 5,
        text: 'Me ayudaron con mis examenes finales de diferentes materias, logre aprobarlos con una nota mayor de 4.5',
    },
    {
        name: 'Ana Martínez',
        role: 'Estudiante de Programación',
        university: 'Autodidacta',
        image: null,
        rating: 5,
        text: 'Las clases 1 a 1 de programación son increíbles. Aprendí más en un mes que en 6 meses con cursos online.',
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-accent fill-accent' : 'text-gray-300'}`}
                />
            ))}
        </div>
    );
}

function TestimonialAvatar({ name, image }: { name: string; image: string | null }) {
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('');

    if (image) {
        return (
            <div className="w-14 h-14 rounded-full overflow-hidden relative">
                <Image src={image} alt={name} fill className="object-cover" />
            </div>
        );
    }

    return (
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary-blue flex items-center justify-center text-white font-montserrat font-bold text-lg">
            {initials}
        </div>
    );
}

export default function Testimonials() {
    return (
        <Section id="testimonios" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-gray-50 to-white -z-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-blue/5 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2" />

            <div className="text-center mb-20 relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary tracking-wide">
                        Testimonios
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-6 tracking-tight">
                    Historias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-blue">éxito real</span>
                </h2>
                <p className="text-lg text-gray-500 font-inter max-w-2xl mx-auto leading-relaxed">
                    Descubre cómo hemos ayudado a estudiantes y profesionales a alcanzar su máximo potencial académico y laboral.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {testimonials.map((testimonial, index) => (
                    <Card
                        key={index}
                        className="group relative flex flex-col h-full bg-white rounded-3xl p-8 shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                    >
                        <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                            <Quote size={48} fill="currentColor" />
                        </div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-1 rounded-full border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                                <TestimonialAvatar name={testimonial.name} image={testimonial.image} />
                            </div>
                            <div>
                                <h3 className="font-montserrat font-bold text-dark text-lg group-hover:text-primary transition-colors">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-500 font-inter font-medium">
                                    {testimonial.role}
                                </p>
                                <p className="text-xs text-primary font-bold mt-0.5">
                                    {testimonial.university}
                                </p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <StarRating rating={testimonial.rating} />
                        </div>

                        <p className="text-gray-600 font-inter leading-relaxed flex-grow relative z-10">
                            "{testimonial.text}"
                        </p>
                    </Card>
                ))}
            </div>

            <div className="mt-24">
                <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-[2rem] p-10 shadow-xl shadow-gray-200/50 border border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <div className="text-center group p-4">
                            <p className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-2 group-hover:scale-110 transition-transform duration-300">200+</p>
                            <p className="text-sm font-medium text-gray-500 font-inter uppercase tracking-wider">Clientes satisfechos</p>
                        </div>
                        <div className="text-center group p-4">
                            <p className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-2 group-hover:scale-110 transition-transform duration-300">4.9</p>
                            <p className="text-sm font-medium text-gray-500 font-inter uppercase tracking-wider">Calificación promedio</p>
                        </div>
                        <div className="text-center group p-4">
                            <p className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-2 group-hover:scale-110 transition-transform duration-300">98%</p>
                            <p className="text-sm font-medium text-gray-500 font-inter uppercase tracking-wider">Tasa de recomendación</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
