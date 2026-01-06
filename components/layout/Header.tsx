'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui-custom/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/estudiantes', label: 'Estudiantes' },
    { href: '/profesionales', label: 'Profesionales' },
    { href: '/tecnologia', label: 'Tecnología' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20'
        : 'bg-transparent border-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logos/isotipo.png"
              alt="TreaWork Logo"
              width={160}
              height={40}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300 font-inter tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contacto">
              <Button size="default" variant="primary" className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                Agendar clase
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-dark hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-dark hover:text-primary transition-colors py-2 border-b border-gray-50 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                <Button size="default" variant="primary" className="w-full">
                  Agendar clase
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
