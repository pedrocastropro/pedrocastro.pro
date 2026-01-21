"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

interface ContactFormProps {
  accentColor?: "blue" | "coral"
}

export function ContactForm({ accentColor = "blue" }: ContactFormProps) {
  const colors = {
    blue: {
      focus: "focus:border-[#0066FF]",
      button: "bg-[#0066FF] hover:bg-[#0052CC]",
    },
    coral: {
      focus: "focus:border-[hsl(4,85%,67%)]",
      button: "bg-[hsl(4,85%,67%)] hover:bg-[hsl(4,85%,57%)]",
    },
  }

  const currentColors = colors[accentColor]
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // Optionally, you could add an error state here to show an error message
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        name="name"
        placeholder="Tu nombre"
        value={formState.name}
        onChange={handleChange}
        required
        className={`w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-base focus:outline-none ${currentColors.focus} transition-colors`}
      />

      <Input
        name="email"
        type="email"
        placeholder="Tu email"
        value={formState.email}
        onChange={handleChange}
        required
        className={`w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-base focus:outline-none ${currentColors.focus} transition-colors`}
      />

      <Textarea
        name="message"
        placeholder="¿Qué tarea repetitiva te está robando más tiempo a ti o a tu equipo ahora mismo?"
        value={formState.message}
        onChange={handleChange}
        required
        rows={6}
        className={`w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-base focus:outline-none ${currentColors.focus} transition-colors resize-none`}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-xl ${currentColors.button} px-8 py-4 text-base font-medium text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>

      {isSubmitted && (
        <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center text-green-800">
          ¡Gracias! Tu mensaje ha sido enviado.
        </div>
      )}
    </form>
  )
}
