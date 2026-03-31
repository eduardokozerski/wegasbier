import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5531997051109?text=Olá! Gostaria de solicitar um orçamento de chopp para meu evento."

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://raw.githubusercontent.com/eduardokozerski/wegasbier/main/chopp.jpg"
          alt="Chopp Wegas Bier"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Desde 2017 em Viçosa e Região</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
            O Chopp Certo Para o{" "}
            <span className="text-primary">Seu Evento</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Produção própria, sempre fresco, entregue na sua festa. 
            A maior estrutura de chopp artesanal da região.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle size={20} />
                Peça seu orçamento no WhatsApp
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-border text-white hover:text-white hover:bg-secondary text-base px-8 py-6 rounded-full"
            >
              <a href="#produtos">
                Conheça nossos chopps
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#indicadores" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  )
}
