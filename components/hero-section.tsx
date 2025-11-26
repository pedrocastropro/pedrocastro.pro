import { ArrowRight } from "lucide-react"

/*expertiseAreas*/
const expertiseAreas = [
  {
    number: "01",
    title: "Automatización con IA",
    subtitle: "De tareas manuales a flujos inteligentes. Extraigo datos, proceso información y genero respuestas automáticas usando n8n, Python e IA.",
  },
  {
    number: "02",
    title: "Ingeniería de Procesos",
    subtitle: "Identifico cuellos de botella, diseño flujos eficientes y convierto horas de trabajo manual en minutos automatizados.",
  },
  {
    number: "03",
    title: "Soluciones Inteligentes a Medida",
    subtitle: "Desde sistemas de planificación deportiva con IA hasta análisis automatizado de contenido. Creo herramientas que piensan contigo, no solo ejecutan.",
  },
]

export function HeroSection() {
  return (
    <>
      {/* Hero - Minimalist OpenAI Style - Mobile Optimized */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full text-center space-y-6 sm:space-y-8">

          {/* Badge sutil */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-gray-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="whitespace-nowrap">Disponible</span>
          </div>

          {/* Nombre - responsivo */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-gray-900 px-4">
            Pedro Castro
          </h1>

          {/* Tagline - mejor espaciado */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Automatiza lo rutinario.<br />
            Potencia lo estratégico.
          </h2>

          {/* Descripción - más legible en mobile */}
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto px-4 leading-relaxed">
            Transformo procesos manuales en sistemas inteligentes usando IA.
          </p>

          {/* CTAs - Optimizado para mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 px-4 w-full max-w-md mx-auto sm:max-w-none">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0066FF] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-white transition-all hover:bg-[#0052CC] active:scale-95 sm:hover:scale-105"
            >
              Empezar proyecto
            </a>
            <a
              href="#expertise"
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-900 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-white active:scale-95"
            >
              Ver expertise
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Section - Apple Grid Style - Mobile Optimized */}
      <section id="expertise" className="py-20 sm:py-32 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">

          {/* Título sección */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-12 sm:mb-20 text-center px-4">
            Cómo puedo ayudarte
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">

            {/* Card 1 */}
            <div className="bg-white p-8 sm:p-10 md:p-12 hover:bg-gray-50 transition-colors group">
              <div className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4">{expertiseAreas[0].number}</div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {expertiseAreas[0].title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {expertiseAreas[0].subtitle}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 sm:p-10 md:p-12 hover:bg-gray-50 transition-colors group">
              <div className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4">{expertiseAreas[1].number}</div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {expertiseAreas[1].title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {expertiseAreas[1].subtitle}
              </p>
            </div>

            {/* Card 3 - Full Width */}
            <div className="bg-white p-8 sm:p-10 md:p-12 md:col-span-2 hover:bg-gray-50 transition-colors group">
              <div className="text-xs sm:text-sm font-mono text-gray-400 mb-3 sm:mb-4">{expertiseAreas[2].number}</div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {expertiseAreas[2].title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                {expertiseAreas[2].subtitle}
              </p>
            </div>
          </div>

          {/* CTA único al final */}
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#0066FF] text-sm sm:text-base font-medium hover:gap-4 transition-all"
            >
              Empezar un proyecto
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
