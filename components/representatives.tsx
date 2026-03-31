import { Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const representatives = [
  {
    region: "Viçosa e Região",
    name: "Júnior",
    phone: "(31) 9 9622-8582",
    whatsapp: "5531996228582",
  },
  {
    region: "Ponte Nova-MG",
    name: "Anderson Tadeu",
    phone: "(31) 9 9908-5917",
    whatsapp: "5531999085917",
  },
]

export function Representatives() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Fale Conosco
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossos Representantes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Entre em contato com o representante da sua região
          </p>
        </div>

        {/* Representatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {representatives.map((rep, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {rep.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {rep.region}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground">{rep.phone}</span>
              </div>

              <Button 
                asChild 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a 
                  href={`https://wa.me/${rep.whatsapp}?text=Olá! Gostaria de solicitar um orçamento de chopp para meu evento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Outras cidades disponíveis mediante consulta
        </p>
      </div>
    </section>
  )
}
