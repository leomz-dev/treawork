'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { mainNavLinks, whatsappUrl, waMessages } from '@/lib/site';
import { cn } from '@/lib/utils';

const SCROLL_THRESHOLD = 48;

export default function Header() {
  const shellRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > SCROLL_THRESHOLD;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setIsScrolled(next);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    const bar = barRef.current;
    const logo = logoRef.current;
    if (!shell || !bar) return;

    gsap.set(shell, { maxWidth: '100%', paddingTop: 0, paddingLeft: 24, paddingRight: 24 });
    gsap.set(bar, {
      borderRadius: 0,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 0,
      paddingRight: 0,
    });
    if (logo) gsap.set(logo, { scale: 1 });
  }, []);

  useEffect(() => {
    const shell = shellRef.current;
    const bar = barRef.current;
    const logo = logoRef.current;
    if (!shell || !bar) return;

    gsap.killTweensOf([shell, bar, logo]);

    const duration = 0.5;
    const ease = 'power3.out';

    if (isScrolled) {
      gsap.to(shell, {
        maxWidth: '72rem',
        paddingTop: 14,
        paddingLeft: 16,
        paddingRight: 16,
        duration,
        ease,
      });
      gsap.to(bar, {
        borderRadius: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.94)',
        boxShadow: '0 8px 32px -6px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 16,
        duration,
        ease,
      });
      if (logo) gsap.to(logo, { scale: 0.9, duration, ease });
    } else {
      gsap.to(shell, {
        maxWidth: '100%',
        paddingTop: 0,
        paddingLeft: 24,
        paddingRight: 24,
        duration,
        ease,
      });
      gsap.to(bar, {
        borderRadius: 0,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 0,
        paddingRight: 0,
        duration,
        ease,
      });
      if (logo) gsap.to(logo, { scale: 1, duration, ease });
    }
  }, [isScrolled]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div ref={shellRef} className="mx-auto w-full pointer-events-auto">
        <nav
          ref={barRef}
          className={cn(
            'relative backdrop-blur-0 transition-[backdrop-filter]',
            isScrolled && 'backdrop-blur-md'
          )}
        >
          <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
            <Link ref={logoRef} href="/" className="flex shrink-0 items-center origin-left">
              <Image
                src="/logos/isotipo.png"
                alt="TreaWork"
                width={150}
                height={40}
                className="h-8 w-auto lg:h-9"
                priority
              />
            </Link>

            <ul className="hidden lg:flex items-center justify-center gap-1">
              {mainNavLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'rounded-md px-3 py-2 text-sm font-inter text-gray-600 hover:text-dark hover:bg-gray-100/80 transition-colors',
                      isActive(item.href) && 'text-primary font-semibold'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center justify-end gap-3">
              <Link
                href="/hazte-tutor"
                className="text-sm font-inter text-gray-600 hover:text-accent-strong transition-colors"
              >
                Hazte tutor
              </Link>
              <a
                href={whatsappUrl(waMessages.familia)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-display font-semibold',
                  'bg-primary text-white shadow-blue hover:bg-secondary-blue transition-all active:scale-95',
                  isScrolled && 'shadow-md'
                )}
              >
                Agendar clase
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="relative z-20 p-2 text-dark lg:hidden"
            >
              <Menu
                className={cn(
                  'h-6 w-6 transition-all duration-200',
                  menuOpen && 'rotate-180 scale-0 opacity-0'
                )}
              />
              <X
                className={cn(
                  'absolute inset-0 m-auto h-6 w-6 transition-all duration-200',
                  menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'
                )}
              />
            </button>
          </div>

          {menuOpen && (
            <div className="mt-2 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl lg:hidden">
              <ul className="space-y-3 mb-5">
                {mainNavLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block py-1 text-base font-inter',
                        isActive(item.href) ? 'text-primary font-semibold' : 'text-gray-600'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Link
                  href="/hazte-tutor"
                  className="text-base font-inter text-gray-600 hover:text-accent-strong py-1"
                >
                  Hazte tutor
                </Link>
                <a
                  href={whatsappUrl(waMessages.familia)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-display font-semibold bg-primary text-white shadow-blue hover:bg-secondary-blue transition-all active:scale-95 w-full"
                >
                  Agendar clase
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
