import Section from '@/components/ui-custom/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ContactoFAQ() {
  const faqs = [
    {
      question: '¿Cómo funciona el servicio?',
      answer: 'Primero conversamos para entender tu necesidad. Luego evaluamos el caso y te presentamos una propuesta clara con plazos y costos. Si estás de acuerdo, comenzamos a trabajar juntos.',
    },
    {
      question: '¿Cuál es el costo de los servicios?',
      answer: 'Los costos varían según el servicio y la complejidad del proyecto. Después de la evaluación inicial, te enviaremos una propuesta detallada con precios claros.',
    },
    {
      question: '¿Cuánto tiempo toma recibir una respuesta?',
      answer: 'Nos comprometemos a responder en menos de 24 horas hábiles. Por WhatsApp, la respuesta suele ser mucho más rápida.',
    },
    {
      question: '¿Ofrecen garantía en sus servicios?',
      answer: 'Sí. Si el trabajo no cumple con lo acordado, lo corregimos hasta que estés satisfecho. Trabajamos con compromiso y profesionalismo.',
    },
    {
      question: '¿Trabajan con estudiantes de todos los niveles?',
      answer: 'Sí, trabajamos con estudiantes de primaria, bachillerato y universidad. Cada caso se evalúa de forma individual para asegurar que podemos brindar el apoyo necesario.',
    },
    {
      question: '¿Las clases de tecnología son presenciales o virtuales?',
      answer: 'Las clases son 100% virtuales a través de plataformas como Google Meet o Zoom. Esto permite mayor flexibilidad de horarios.',
    },
  ];

  return (
    <Section variant="default">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-dark mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Respuestas a las dudas más comunes
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-card px-6 border border-gray-100 shadow-premium data-[state=open]:shadow-lg transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-montserrat font-semibold text-dark hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 font-inter leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
