import { ArrowRight, MessageSquare, Users, Mail, FileText } from "lucide-react"

const useCases = [
  {
    icon: MessageSquare,
    title: "Atención al cliente con IA",
    description: "90% de emails respondidos en <30 segundos. Tu equipo solo interviene en casos complejos.",
    tags: ["Gmail", "n8n", "OpenAI"],
  },
  {
    icon: Users,
    title: "Cualificación de leads",
    description: "Filtra automáticamente las consultas para que solo hables con leads listos para comprar.",
    tags: ["CRM", "n8n", "IA"],
  },
  {
    icon: Mail,
    title: "Procesamiento de datos",
    description: "Conecta herramientas que no se hablan, sincroniza datos y elimina copiar-pegar manual.",
    tags: ["APIs", "n8n", "Webhooks"],
  },
  {
    icon: FileText,
    title: "Generación de contenido",
    description: "Planes personalizados, reportes y documentación generados automáticamente con IA.",
    tags: ["Claude", "n8n", "Notion"],
  },
]

export function N8nUseCases() {
  return (
    <section className="py-20 sm:py-32 bg-[#FAFAFA]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 text-center">
          Qué puedo automatizar
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          Si tu equipo lo hace manualmente más de dos veces por semana, probablemente puedo automatizarlo.
        </p>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, i) => {
            const Icon = useCase.icon
            return (
              <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#0066FF]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#0066FF]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA secundario */}
        <div className="text-center mt-12">
          <p className="text-base text-gray-600 mb-4">¿No ves tu caso aquí?</p>
          <a
            href="#n8n-cta"
            className="inline-flex items-center gap-2 text-[#0066FF] text-base font-medium hover:gap-4 transition-all"
          >
            Hablemos de tu proyecto
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
