export type TutorLevel = 'Junior' | 'Senior' | 'Mentor';
export type Modalidad = 'Online' | 'Presencial' | 'Híbrida';

export interface Tutor {
  id: string;
  nombre: string;
  edad: number;
  nivel: TutorLevel;
  materias: string[];
  area: 'Colegio' | 'Universidad' | 'Tecnología';
  rating: number;
  clasesDadas: number;
  modalidad: Modalidad;
  bio: string;
  ciudad: string;
}

export const nivelInfo: Record<
  TutorLevel,
  { label: string; descripcion: string; badgeClasses: string }
> = {
  Junior: {
    label: 'Tutor Junior',
    descripcion: 'Recién certificado, con acompañamiento de un Mentor.',
    badgeClasses: 'bg-primary/10 text-primary border border-primary/20',
  },
  Senior: {
    label: 'Tutor Senior',
    descripcion: 'Experiencia comprobada y excelentes calificaciones.',
    badgeClasses: 'bg-accent-soft text-accent-strong border border-accent/30',
  },
  Mentor: {
    label: 'Tutor Mentor',
    descripcion: 'Forma y guía a nuevos tutores de la comunidad.',
    badgeClasses: 'bg-dark text-white border border-dark',
  },
};

export const tutors: Tutor[] = [
  {
    id: 'valentina-r',
    nombre: 'Valentina R.',
    edad: 21,
    nivel: 'Mentor',
    materias: ['Matemáticas', 'Física', 'Cálculo'],
    area: 'Universidad',
    rating: 5.0,
    clasesDadas: 340,
    modalidad: 'Online',
    bio: 'Estudiante de Ingeniería. Me encanta hacer que el cálculo se sienta fácil y lógico.',
    ciudad: 'Barranquilla',
  },
  {
    id: 'santiago-m',
    nombre: 'Santiago M.',
    edad: 19,
    nivel: 'Senior',
    materias: ['Programación', 'Python', 'Desarrollo Web'],
    area: 'Tecnología',
    rating: 4.9,
    clasesDadas: 180,
    modalidad: 'Online',
    bio: 'Desarrollador junior. Enseño a programar desde cero con proyectos reales.',
    ciudad: 'Bogotá',
  },
  {
    id: 'mariana-l',
    nombre: 'Mariana L.',
    edad: 20,
    nivel: 'Senior',
    materias: ['Inglés', 'Español', 'Lectura crítica'],
    area: 'Colegio',
    rating: 4.8,
    clasesDadas: 210,
    modalidad: 'Híbrida',
    bio: 'Apasionada por los idiomas. Preparo estudiantes para pruebas Saber e ICFES.',
    ciudad: 'Barranquilla',
  },
  {
    id: 'daniel-c',
    nombre: 'Daniel C.',
    edad: 22,
    nivel: 'Mentor',
    materias: ['Química', 'Biología'],
    area: 'Colegio',
    rating: 4.9,
    clasesDadas: 295,
    modalidad: 'Presencial',
    bio: 'Estudiante de Medicina. Explico las ciencias con ejemplos del día a día.',
    ciudad: 'Medellín',
  },
  {
    id: 'laura-g',
    nombre: 'Laura G.',
    edad: 18,
    nivel: 'Junior',
    materias: ['Matemáticas', 'Estadística'],
    area: 'Colegio',
    rating: 4.7,
    clasesDadas: 45,
    modalidad: 'Online',
    bio: 'Recién graduada del cole. Le pongo mucha paciencia y buena energía a cada clase.',
    ciudad: 'Cali',
  },
  {
    id: 'juan-p',
    nombre: 'Juan P.',
    edad: 20,
    nivel: 'Senior',
    materias: ['Cálculo', 'Álgebra', 'Física'],
    area: 'Universidad',
    rating: 4.8,
    clasesDadas: 160,
    modalidad: 'Online',
    bio: 'Estudiante de Ing. Electrónica. Me especializo en salvar semestres complicados.',
    ciudad: 'Bucaramanga',
  },
  {
    id: 'sofia-t',
    nombre: 'Sofía T.',
    edad: 19,
    nivel: 'Junior',
    materias: ['Diseño', 'Ofimática', 'Excel'],
    area: 'Tecnología',
    rating: 4.6,
    clasesDadas: 38,
    modalidad: 'Híbrida',
    bio: 'Creativa y organizada. Te ayudo a dominar herramientas digitales para tus proyectos.',
    ciudad: 'Barranquilla',
  },
  {
    id: 'andres-v',
    nombre: 'Andrés V.',
    edad: 23,
    nivel: 'Mentor',
    materias: ['Programación', 'React', 'Bases de datos'],
    area: 'Tecnología',
    rating: 5.0,
    clasesDadas: 410,
    modalidad: 'Online',
    bio: 'Dev full-stack. Formo a los nuevos tutores de tecnología de la comunidad.',
    ciudad: 'Bogotá',
  },
];

export const filtroAreas = ['Todas', 'Colegio', 'Universidad', 'Tecnología'] as const;
export const filtroNiveles = ['Todos', 'Junior', 'Senior', 'Mentor'] as const;
