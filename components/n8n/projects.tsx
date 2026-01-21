import { ArrowRight, Check } from "lucide-react"

interface Project {
  title: string
  problem: string
  features: string[]
  techStack: { name: string; colorClass: string }[]
  result: {
    metric: string
    description: string
  }
}

const projects: Project[] = [
  {
    title: "Sistema de soporte al cliente con IA",
    problem: "E-commerce deportivo: 3h/día respondiendo consultas repetitivas de soporte",
    features: [
      "Clasificación automática y respuestas contextuales con IA",
      "Escalado inteligente a humanos solo cuando es necesario",
      "Base de conocimiento trabajada para garantizar calidad de respuestas",
    ],
    techStack: [
      { name: "n8n", colorClass: "bg-[#0066FF]/10 text-[#0066FF]" },
      { name: "OpenAI", colorClass: "bg-purple-100 text-purple-700" },
      { name: "Gmail API", colorClass: "bg-gray-100 text-gray-700" },
    ],
    result: {
      metric: "15h/semana",
      description: "Ahorro en atención al cliente · ROI: 6 semanas",
    },
  },
  {
    title: "Extracción y análisis de datos automatizado",
    problem: "Empresa SaaS: horas semanales recopilando datos de múltiples fuentes para reportes",
    features: [
      "Extracción automática de datos desde APIs, bases de datos y hojas de cálculo",
      "Procesamiento y transformación de datos con IA",
      "Generación automática de reportes y dashboards",
    ],
    techStack: [
      { name: "n8n", colorClass: "bg-[#0066FF]/10 text-[#0066FF]" },
      { name: "OpenAI", colorClass: "bg-purple-100 text-purple-700" },
      { name: "APIs", colorClass: "bg-gray-100 text-gray-700" },
    ],
    result: {
      metric: "Días → Minutos",
      description: "Reportes automáticos · ROI inmediato",
    },
  },
  {
    title: "RAG System para Documentación",
    problem: "Consultora IT: equipo perdiendo 20% del tiempo buscando en documentación dispersa",
    features: [
      "Indexación automática de Notion, Drive y Slack",
      "Chatbot que responde dudas técnicas con referencias a la fuente",
      "Sistema de retroalimentación para mejorar respuestas",
    ],
    techStack: [
      { name: "n8n", colorClass: "bg-[#0066FF]/10 text-[#0066FF]" },
      { name: "LangChain", colorClass: "bg-green-100 text-green-700" },
      { name: "Pinecone", colorClass: "bg-orange-100 text-orange-700" },
    ],
    result: {
      metric: "-80%",
      description: "Reducción en preguntas repetitivas",
    },
  },
]

function ProjectCard({ project, isFullWidth = false }: { project: Project; isFullWidth?: boolean }) {
  return (
    <div
      className={`bg-white p-8 sm:p-10 md:p-12 hover:bg-gray-50 transition-all group border-b border-gray-200 ${
        isFullWidth ? "md:col-span-2" : "md:border-r"
      }`}
    >
      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech.name}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${tech.colorClass}`}
          >
            {tech.name}
          </span>
        ))}
      </div>

      {/* Title + Problem */}
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-base text-gray-500 mb-6">{project.problem}</p>

      {/* Features */}
      <ul className="space-y-2 mb-8">
        {project.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Result Highlight */}
      <div className="bg-[hsl(var(--success-light))] border border-[hsl(var(--success-green))]/20 rounded-xl p-4">
        <div className="text-3xl font-bold text-[hsl(var(--success-green))] mb-1">{project.result.metric}</div>
        <div className="text-sm text-gray-600">{project.result.description}</div>
      </div>
    </div>
  )
}

export function N8nProjects() {
  return (
    <section id="n8n-projects" className="py-20 sm:py-32 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-12 sm:mb-20 text-center">
          Proyectos entregados
        </h2>

        {/* Grid - Apple style con borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-200">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />
        </div>

        {/* CTA al final */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="#n8n-cta"
            className="inline-flex items-center gap-2 text-[#0066FF] text-base font-medium hover:gap-4 transition-all"
          >
            Quiero automatizar mis procesos
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
