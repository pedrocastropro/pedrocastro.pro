import { ArrowRight, Zap } from "lucide-react"

export function N8nHero() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0066FF]/20 bg-[#0066FF]/5 px-4 py-1.5 text-sm font-medium text-[#0066FF] mb-6">
          <Zap className="w-4 h-4" />
          n8n + LangChain + IA
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
          Automatizaciones que recuperan su inversión en{" "}
          <span className="text-[#0066FF] whitespace-nowrap">6-8 semanas</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Construyo workflows personalizados con n8n que conectan tus herramientas,
          procesan datos automáticamente y escalan tu operación sin contratar más gente.
        </p>

        {/* CTA */}
        <a
          href="#n8n-cta"
          className="inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#0052CC] hover:scale-105 active:scale-95"
        >
          Consultoría gratuita
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
