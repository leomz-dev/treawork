'use client';

import Section from '@/components/ui-custom/Section';
import Card from '@/components/ui-custom/Card';
import Button from '@/components/ui-custom/Button';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactoFormas() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });

  const handleWhatsAppClick = () => {
    const whatsappNumber = '573006426130';
    const message = 'Hola, quiero recibir más información sobre TreaWork';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, mi nombre es ${formData.nombre}.
Email: ${formData.email}
Teléfono: ${formData.telefono}
Servicio: ${formData.servicio}
Mensaje: ${formData.mensaje}`;

    const whatsappNumber = '573006426130';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-dark py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            Contáctanos, déjanos saber<br />cómo podemos ayudarte
          </h2>
        </div>

        <div className="bg-white rounded-card shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-2 p-8 md:p-10 lg:p-12 space-y-8 lg:border-r border-gray-100">

              {/* Email */}
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Email</h3>
                <div className="flex items-center gap-3 text-dark font-medium">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contacto@treawork.com</span>
                </div>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Teléfono</h3>
                <div className="flex items-center gap-3 text-dark font-medium">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+57 300 642 3061</span>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Ubicación</h3>
                <div className="flex items-start gap-3 text-dark font-medium">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>Barranquilla, Colombia<br />Disponible Globalmente</span>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-8">
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-accent text-dark flex items-center justify-center hover:bg-opacity-80 transition-all">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-accent text-dark flex items-center justify-center hover:bg-opacity-80 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-accent text-dark flex items-center justify-center hover:bg-opacity-80 transition-all">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-accent text-dark flex items-center justify-center hover:bg-opacity-80 transition-all">
                    <Instagram className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-3 p-8 md:p-10 lg:p-12 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-bold text-dark">Tu nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary/20 outline-none text-dark placeholder-gray-400 font-inter"
                      placeholder="Nombre completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="servicio" className="text-sm font-bold text-dark">Servicio de interés</label>
                    <div className="relative">
                      <select
                        id="servicio"
                        value={formData.servicio}
                        onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary/20 outline-none text-dark font-inter appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="Estudiantes">Estudiantes (Clases/Tareas)</option>
                        <option value="Profesionales">Profesionales (Proyectos)</option>
                        <option value="Tecnología">Tecnología (Cursos)</option>
                        <option value="Otro">Otro</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-dark">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary/20 outline-none text-dark placeholder-gray-400 font-inter"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-bold text-dark">Teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary/20 outline-none text-dark placeholder-gray-400 font-inter"
                      placeholder="Número de contacto"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-bold text-dark">Mensaje</label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-primary/20 outline-none text-dark placeholder-gray-400 font-inter resize-none"
                    placeholder="Escribe algo..."
                    required
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full bg-primary hover:bg-secondary-blue text-white py-4 text-base font-semibold shadow-none rounded-xl">
                    Enviar mensaje
                  </Button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
