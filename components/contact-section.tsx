import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[#FAFAFA]">
      <div className="container max-w-xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-gray-900 mb-4">
            ¿Listo para automatizar?
          </h2>
          <p className="text-lg text-gray-600">
            Cuéntame en qué estás trabajando.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

