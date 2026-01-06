import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/imagotipo_horizontal.png"
                alt="TreaWork Logo"
                width={200}
                height={80}
                className="h-auto w-64 md:w-80"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-inter">
              Elevando el estándar académico y profesional. Soluciones digitales diseñadas para tu crecimiento.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com/treawork_" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/treawork_" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Column 1: Company */}
          <div className="md:col-span-2">
            <h3 className="font-montserrat font-bold text-dark mb-6">Compañía</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-500 hover:text-primary transition-colors text-sm">Inicio</Link></li>
              <li><Link href="/about" className="text-gray-500 hover:text-primary transition-colors text-sm">Nosotros</Link></li>
              <li><Link href="/contacto" className="text-gray-500 hover:text-primary transition-colors text-sm">Contacto</Link></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-primary transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Product */}
          <div className="md:col-span-2">
            <h3 className="font-montserrat font-bold text-dark mb-6">Servicios</h3>
            <ul className="space-y-4">
              <li><Link href="/estudiantes" className="text-gray-500 hover:text-primary transition-colors text-sm">Estudiantes</Link></li>
              <li><Link href="/profesionales" className="text-gray-500 hover:text-primary transition-colors text-sm">Profesionales</Link></li>
              <li><Link href="/tecnologia" className="text-gray-500 hover:text-primary transition-colors text-sm">Tecnología</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4">
            <h3 className="font-montserrat font-bold text-dark mb-4">Boletín informativo</h3>
            <p className="text-gray-500 text-sm mb-6">
              Recibe consejos, actualizaciones e insights para potenciar tu carrera profesional.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
              />
              <button
                type="button"
                className="px-6 py-3 rounded-full bg-accent text-dark font-medium text-sm hover:brightness-105 transition-all shadow-lg shadow-accent/20"
              >
                Suscribirse
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-inter">
          <p>&copy; {currentYear} TreaWork | Desarrollado por <a href="https://leonardomeza.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:font-bold transition-colors">Leonardo Meza</a>. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/contacto" className="hover:text-dark transition-colors">Privacidad</Link>
            <Link href="/contacto" className="hover:text-dark transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

