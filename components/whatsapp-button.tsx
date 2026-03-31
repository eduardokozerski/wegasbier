"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5531997051109?text=Olá! Gostaria de solicitar um orçamento de chopp para meu evento."

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </a>
  )
}
