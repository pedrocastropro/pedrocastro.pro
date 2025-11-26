import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-white py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
            ¿Listo para automatizar?
          </h2>
          <p className="mb-10 text-gray-600">
          Proceso repetitivo, idea de automatización o proyecto de IA — cuéntame en qué estás trabajando y veamos cómo multiplicar tu tiempo.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

