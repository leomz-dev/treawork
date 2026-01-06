export default function ContactoHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 md:pt-32 pb-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
          <span className="text-sm font-medium text-dark tracking-wide">Contacto</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-dark mb-6 leading-tight">
          Conversemos sobre <br />
          <span className="text-primary">tu proyecto</span>
        </h1>
        <p className="text-xl text-gray-500 font-inter max-w-2xl mx-auto leading-relaxed">
          Estamos aquí para ayudar. Cuéntanos qué necesitas y diseñaremos una solución a tu medida.
        </p>
      </div>
    </section>
  );
}
