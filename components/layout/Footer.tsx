import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, GraduationCap, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-14">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/imagotipo_horizontal.png"
                alt="TreaWork"
                width={200}
                height={80}
                className="h-auto w-56 md:w-64"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-inter">
              Jóvenes que enseñan, estudiantes que avanzan. Formamos, certificamos y conectamos a los mejores tutores con quienes los necesitan.
            </p>
            <div className="flex gap-3 pt-1">
              <a href="https://instagram.com/treawork_" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/treawork_" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Busco un tutor */}
          <div className="md:col-span-3">
            <h3 className="flex items-center gap-2 font-display font-bold text-dark mb-5">
              <GraduationCap className="w-4 h-4 text-primary" /> Busco un tutor
            </h3>
            <ul className="space-y-3">
              <li><Link href="/estudiantes" className="text-gray-500 hover:text-primary transition-colors text-sm">Estudiantes</Link></li>
              <li><Link href="/profesionales" className="text-gray-500 hover:text-primary transition-colors text-sm">Profesionales</Link></li>
              <li><Link href="/tecnologia" className="text-gray-500 hover:text-primary transition-colors text-sm">Tecnología</Link></li>
              <li><Link href="/tutores" className="text-gray-500 hover:text-primary transition-colors text-sm">Directorio de tutores</Link></li>
            </ul>
          </div>

          {/* Quiero ser tutor */}
          <div className="md:col-span-3">
            <h3 className="flex items-center gap-2 font-display font-bold text-dark mb-5">
              <Sparkles className="w-4 h-4 text-accent-strong" /> Quiero ser tutor
            </h3>
            <ul className="space-y-3">
              <li><Link href="/hazte-tutor" className="text-gray-500 hover:text-accent-strong transition-colors text-sm">Postúlate</Link></li>
              <li><Link href="/hazte-tutor#niveles" className="text-gray-500 hover:text-accent-strong transition-colors text-sm">Niveles y crecimiento</Link></li>
              <li><Link href="/como-funciona" className="text-gray-500 hover:text-accent-strong transition-colors text-sm">Cómo funciona</Link></li>
            </ul>
          </div>

          {/* Comunidad */}
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-dark mb-5">TreaWork</h3>
            <ul className="space-y-3">
              <li><Link href="/como-funciona" className="text-gray-500 hover:text-primary transition-colors text-sm">Cómo funciona</Link></li>
              <li><Link href="/contacto" className="text-gray-500 hover:text-primary transition-colors text-sm">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-inter">
          <p>&copy; {currentYear} TreaWork · Hecho por jóvenes, para jóvenes. Desarrollado por <a href="https://leonardomeza.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:font-bold transition-colors">Leonardo Meza</a>.</p>
          <div className="flex gap-6">
            <Link href="/contacto" className="hover:text-dark transition-colors">Privacidad</Link>
            <Link href="/contacto" className="hover:text-dark transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
