'use client';

import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { tutors, filtroAreas, filtroNiveles } from '@/lib/tutors';
import TutorCard from '@/components/shared/TutorCard';
import { cn } from '@/lib/utils';

export default function TutorDirectory() {
  const [area, setArea] = useState<(typeof filtroAreas)[number]>('Todas');
  const [nivel, setNivel] = useState<(typeof filtroNiveles)[number]>('Todos');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return tutors.filter((t) => {
      const matchArea = area === 'Todas' || t.area === area;
      const matchNivel = nivel === 'Todos' || t.nivel === nivel;
      const q = query.trim().toLowerCase();
      const matchQuery =
        q === '' ||
        t.nombre.toLowerCase().includes(q) ||
        t.materias.some((m) => m.toLowerCase().includes(q));
      return matchArea && matchNivel && matchQuery;
    });
  }, [area, nivel, query]);

  return (
    <div>
      {/* Filtros */}
      <div className="bg-white rounded-card border border-gray-100 shadow-sm p-5 md:p-6 mb-10">
        <div className="flex items-center gap-2 mb-5 text-dark">
          <SlidersHorizontal className="w-4 h-4 text-primary" />
          <span className="font-display font-bold text-sm">Filtra y encuentra tu tutor</span>
        </div>

        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca por nombre o materia (ej. matemáticas, Python)"
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/15 outline-none text-dark font-inter placeholder-gray-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-inter">Área</p>
            <div className="flex flex-wrap gap-2">
              {filtroAreas.map((a) => (
                <button
                  key={a}
                  onClick={() => setArea(a)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full text-sm font-medium font-inter transition-colors',
                    area === a ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-inter">Nivel</p>
            <div className="flex flex-wrap gap-2">
              {filtroNiveles.map((n) => (
                <button
                  key={n}
                  onClick={() => setNivel(n)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full text-sm font-medium font-inter transition-colors',
                    nivel === n ? 'bg-accent text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 font-inter mb-6">
        {filtered.length} {filtered.length === 1 ? 'tutor encontrado' : 'tutores encontrados'}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-card border border-dashed border-gray-200">
          <p className="text-gray-500 font-inter">No encontramos tutores con esos filtros.</p>
          <button
            onClick={() => {
              setArea('Todas');
              setNivel('Todos');
              setQuery('');
            }}
            className="mt-3 text-primary font-display font-semibold hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
}
