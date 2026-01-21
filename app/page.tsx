import Link from "next/link"
import { ArrowRight, Terminal, Zap, Puzzle, Brain, ShieldCheck, Cpu, LayoutTemplate } from "lucide-react"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - AI Engineer Authority */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">



            <h1 className="flex flex-col gap-3 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
              <span className="leading-tight">Ingeniería de IA aplicada.</span>
              <span className="text-gray-500 font-light leading-tight">Resultados, no hype.</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Creo sistemas de IA aplicados a tus productos y procesos.
              Transformo la complejidad técnica en activos rentables para tu empresa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/n8n"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0066FF] px-8 text-base font-medium text-white transition-colors hover:bg-[#0052CC] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Ver sistema de automatización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#about"
                className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 bg-white px-8 text-base font-medium text-gray-900 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Mi filosofía
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The "Quick Win" Philosophy Section */}
      <section id="about" className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                El problema de la IA hoy:<br />
                <span className="text-gray-500">Inversión ciega sin resultados.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Muchas empresas invierten dinero en IA sin validar primero la utilidad.
                El resultado son herramientas buscando un problema que resolver, en lugar de soluciones resolviendo problemas reales.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Mi enfoque es diferente:</strong> Empiezo pequeño.
                Construyo una automatización que resuelva un dolor real en <span className="text-[#0066FF] font-semibold">2-3 semanas</span>.
                Cuando ves el ROI, escalamos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <Zap className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Valor Inmediato</h3>
                <p className="text-sm text-gray-600">Iteraciones rápidas para validar ideas que aporten valor inmediato.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <LayoutTemplate className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Fiabilidad & Escalabilidad</h3>
                <p className="text-sm text-gray-600">Evalúo y mido cada resultado para garantizar el éxito de la siguiente iteración.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Robustez</h3>
                <p className="text-sm text-gray-600">Sistemas resilientes diseñados para gestionar errores sin detener tu operación.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <Cpu className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Tecnología de Vanguardia</h3>
                <p className="text-sm text-gray-600">Sin dogmas tecnológicos. Elijo la tecnología que mejor resuelve tu problema de forma eficiente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Preview */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Empezamos por aquí</h2>
            <p className="text-xl text-gray-600">La puerta de entrada más rápida al ROI con IA.</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-gray-900 text-white max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10 p-8 md:p-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  ¿Empezamos ya?
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">Automatización de Procesos con n8n</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Conecto tus herramientas actuales (Gmail, Notion, Slack, CRM) con IA para automatizar tareas repetitivas.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">1</div>
                    Auditoría de 30 min (Gratis)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">2</div>
                    Propuesta de valor en 48h
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">3</div>
                    Entrega en 2-3 semanas
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    href="/n8n"
                    className="inline-flex bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    Ver detalles del servicio
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="relative h-64 md:h-full min-h-[300px] bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden flex items-center justify-center">
                {/* Visual placeholder for workflow */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <svg className="w-full h-full p-8 text-gray-600" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <path vectorEffect="non-scaling-stroke" strokeWidth="0.5" d="M10 50h20l10-10 10 20 10-20 10 10h20" />
                    <circle cx="10" cy="50" r="2" fill="currentColor" />
                    <circle cx="30" cy="50" r="2" fill="currentColor" />
                    <circle cx="90" cy="50" r="2" fill="currentColor" />
                  </svg>
                </div>
                <div className="z-10 bg-gray-900/80 backdrop-blur border border-gray-700 px-6 py-4 rounded-xl shadow-xl text-center">
                  <p className="text-gray-400 text-xs mb-1 font-mono">AHORRO PROMEDIO</p>
                  <p className="text-3xl font-bold text-white">15h<span className="text-sm font-normal text-gray-500 ml-1">/semana</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        title="Agenda tu auditoría"
        subtitle="Hablemos 30 minutos sobre tus cuellos de botella."
      />
      <Footer />
    </main>
  )
}
