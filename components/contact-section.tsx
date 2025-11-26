import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#FAFAFA]">
      <div className="container max-w-xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 px-4">
            ¿Listo para automatizar?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Cuéntame en qué estás trabajando.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

