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
      {/* Hero - Minimalist OpenAI Style */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-8">

          {/* Badge sutil */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponible para proyectos
          </div>

          {/* Nombre - más grande */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-gray-900">
            Pedro Castro
          </h1>

          {/* Tagline - más ligero */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-600 max-w-3xl mx-auto">
            Automatiza lo rutinario. <br className="hidden sm:block" />
            Potencia lo estratégico.
          </h2>

          {/* Descripción - más corta */}
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Transformo procesos manuales en sistemas inteligentes usando IA.
          </p>

          {/* CTAs - Primary + Secondary */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0066FF] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#0052CC] hover:scale-105"
            >
              Empezar proyecto
            </a>
            <a
              href="#expertise"
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-900 px-8 py-4 text-base font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
            >
              Ver expertise
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Section - Apple Grid Style */}
      <section id="expertise" className="py-32 bg-white">
        <div className="container max-w-6xl mx-auto px-6">

          {/* Título sección */}
          <h2 className="text-5xl font-semibold text-gray-900 mb-20 text-center">
            Cómo puedo ayudarte
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">

            {/* Card 1 */}
            <div className="bg-white p-12 hover:bg-gray-50 transition-colors group">
              <div className="text-sm font-mono text-gray-400 mb-4">{expertiseAreas[0].number}</div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                {expertiseAreas[0].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {expertiseAreas[0].subtitle}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-12 hover:bg-gray-50 transition-colors group">
              <div className="text-sm font-mono text-gray-400 mb-4">{expertiseAreas[1].number}</div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                {expertiseAreas[1].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {expertiseAreas[1].subtitle}
              </p>
            </div>

            {/* Card 3 - Full Width */}
            <div className="bg-white p-12 md:col-span-2 hover:bg-gray-50 transition-colors group">
              <div className="text-sm font-mono text-gray-400 mb-4">{expertiseAreas[2].number}</div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                {expertiseAreas[2].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                {expertiseAreas[2].subtitle}
              </p>
            </div>
          </div>

          {/* CTA único al final */}
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#0066FF] font-medium hover:gap-4 transition-all"
            >
              Empezar un proyecto
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
