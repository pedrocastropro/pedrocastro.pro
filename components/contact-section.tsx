import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#FAFAFA]">
      <div className="container max-w-xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 px-4">
            Consultoría IA GRATIS
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4 mb-4">
            Cuéntame en qué estás trabajando.
          </p>
          <a
            href="mailto:pedro@pedrocastro.pro"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-[#0066FF] hover:text-[#0052CC] transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            pedro@pedrocastro.pro
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}