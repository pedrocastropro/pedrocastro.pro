
import { Footer } from "@/components/footer"
import { N8nPortfolioSection } from "@/components/n8n"
import { ContactSection } from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automatización n8n & Consultoría IA | Pedro Castro",
  description: "Especialista en n8n y LangChain. Automatiza procesos de negocio y recupera tu inversión en 6-8 semanas. Consultoría gratuita de 30 minutos.",
}


export default function N8nPage() {
  return (
    <main className="min-h-screen">
      <N8nPortfolioSection />
      <ContactSection
        title="Agenda tu consultoría gratis"
        subtitle="Cuéntame qué procesos quieres automatizar."
      />
      <Footer />
    </main>
  )
}
