import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/5531997051109?text=Olá! Gostaria de solicitar um orçamento de chopp para meu evento."

export function FinalCTA() {
  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Vamos Conversar
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Pronto para levar o melhor chopp para o{" "}
            <span className="text-primary">seu evento?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Entre em contato agora mesmo e solicite seu orçamento personalizado. 
            Estamos prontos para tornar seu evento inesquecível!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle size={20} />
                Pedir Orçamento no WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="w-5 h-5" />
            <a 
              href="mailto:contato@wegaschopp.com.br" 
              className="hover:text-primary transition-colors"
            >
              contato@wegaschopp.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
