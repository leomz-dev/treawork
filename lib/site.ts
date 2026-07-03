export const WHATSAPP_NUMBER = '573006423061';

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Mensajes pre-armados según la intención del usuario */
export const waMessages = {
  familia: 'Hola TreaWork 👋 Busco un tutor para acompañamiento académico. ¿Me ayudan?',
  tutor: 'Hola TreaWork 👋 Quiero postularme como tutor. ¿Cuáles son los siguientes pasos?',
  profesional: 'Hola TreaWork 👋 Necesito apoyo profesional en un proyecto.',
  tecnologia: 'Hola TreaWork 👋 Me interesan las clases de programación.',
  general: 'Hola TreaWork 👋 Me gustaría más información.',
};

/** Audiencias del marketplace de dos lados */
export type Audience = 'familias' | 'tutores';

/** Links principales del header (simplificado) */
export const mainNavLinks = [
  { href: '/estudiantes', label: 'Estudiantes' },
  { href: '/tutores', label: 'Tutores' },
  { href: '/hazte-tutor', label: 'Hazte tutor' },
  { href: '/como-funciona', label: 'Cómo funciona' },
];

/** Navegación agrupada por audiencia — usada en footer */
export const navGroups: {
  familias: { href: string; label: string }[];
  tutores: { href: string; label: string }[];
  general: { href: string; label: string }[];
} = {
  familias: [
    { href: '/estudiantes', label: 'Estudiantes' },
    { href: '/profesionales', label: 'Profesionales' },
    { href: '/tecnologia', label: 'Tecnología' },
    { href: '/tutores', label: 'Nuestros tutores' },
  ],
  tutores: [
    { href: '/hazte-tutor', label: 'Hazte tutor' },
  ],
  general: [
    { href: '/como-funciona', label: 'Cómo funciona' },
    { href: '/contacto', label: 'Contacto' },
  ],
};

/** Etiqueta legible por ruta, para el pill "Estás en:" del header */
export const sectionLabels: Record<string, string> = {
  '/': 'Inicio',
  '/estudiantes': 'Estudiantes',
  '/profesionales': 'Profesionales',
  '/tecnologia': 'Tecnología',
  '/tutores': 'Tutores',
  '/hazte-tutor': 'Hazte tutor',
  '/como-funciona': 'Cómo funciona',
  '/contacto': 'Contacto',
};
