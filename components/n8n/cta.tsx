import { ArrowRight, Check, Clock } from "lucide-react"

export function N8nCta() {
  return (
    <section
      id="n8n-cta"
      className="py-24 sm:py-32 bg-gradient-to-br from-[#0066FF] to-[#0052CC] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-6">
          <Clock className="w-4 h-4" />
          Consultoría gratuita de 30 minutos
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight">
          Veamos si tu caso
          <br />
          tiene ROI claro
        </h2>

        {/* Value props */}
        <div className="max-w-2xl mx-auto mb-10">
          <ul className="space-y-3 text-left inline-block text-white/90 text-base sm:text-lg">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Identificamos tu mayor cuello de botella</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Calculamos cuánto te está costando cada mes</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <span>Decidimos si la automatización tiene sentido económico</span>
            </li>
          </ul>
        </div>

        {/* Subtext */}
        <p className="text-white/80 text-base mb-8">
          Sin compromiso. Sin pitch de ventas. Solo análisis.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-semibold text-[#0066FF] shadow-2xl hover:scale-105 hover:shadow-white/20 transition-all active:scale-95 mb-6"
        >
          Reservar 30 minutos
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Urgency / Scarcity */}
        <p className="text-sm text-white/80 font-medium">
          Solo acepto <span className="font-bold">3 proyectos nuevos</span> al mes para asegurar calidad
        </p>
      </div>
    </section>
  )
}
