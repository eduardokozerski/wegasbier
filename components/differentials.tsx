import { Factory, Coins, Palette, HeartHandshake, Award, Truck } from "lucide-react"

const differentials = [
  {
    icon: Factory,
    title: "Produção Própria",
    description: "Chopp sempre fresco, direto da nossa fábrica para seu evento",
  },
  {
    icon: Coins,
    title: "Excelente Custo-Benefício",
    description: "Qualidade premium com preço justo e acessível",
  },
  {
    icon: Palette,
    title: "Variedade de Estilos",
    description: "Pilsen, IPA, Red Ale, Blond e Chopp de Vinho",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Próximo",
    description: "Relacionamento direto e confiável com nossos clientes",
  },
  {
    icon: Award,
    title: "Marca Regional",
    description: "Consolidada desde 2017 em Viçosa e região",
  },
  {
    icon: Truck,
    title: "Delivery de Barril",
    description: "Entregamos seu barril de chopp em Viçosa e região",
  },
]

export function Differentials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Por que Escolher a Wegas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossos Diferenciais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            O que faz da Wegas Bier a melhor escolha para seu evento
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <differential.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {differential.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
