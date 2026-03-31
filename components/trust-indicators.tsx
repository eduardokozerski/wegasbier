import { Calendar, Building2, Users } from "lucide-react"

const indicators = [
  {
    icon: Calendar,
    title: "Desde 2017",
    description: "Cervejaria regional consolidada com anos de experiência no mercado",
  },
  {
    icon: Building2,
    title: "Maior Estrutura da Região",
    description: "Capacidade de atender eventos de qualquer porte com excelência",
  },
  {
    icon: Users,
    title: "Atendimento Direto",
    description: "Da fábrica para você, sem intermediários em Viçosa e região",
  },
]

export function TrustIndicators() {
  return (
    <section id="indicadores" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <indicator.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {indicator.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
