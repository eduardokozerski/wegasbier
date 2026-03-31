import { Badge } from "@/components/ui/badge"

const products = [
  {
    name: "Chopp Pilsen",
    description: "Leve, refrescante e de fácil degustação. Nosso carro-chefe.",
    abv: "4,8%",
    badge: "Mais pedido",
    color: "from-amber-400/20 to-amber-600/5",
  },
  {
    name: "Chopp Red Ale",
    description: "Maltado com notas de caramelo e tostado sutil.",
    abv: "5,2%",
    badge: null,
    color: "from-red-800/20 to-red-900/5",
  },
  {
    name: "Chopp IPA",
    description: "Intenso amargor e aroma cítrico marcante.",
    abv: "6,5%",
    badge: null,
    color: "from-orange-500/20 to-orange-700/5",
  },
  {
    name: "Chopp Blond",
    description: "Corpo médio com notas frutadas e final seco.",
    abv: "5,0%",
    badge: null,
    color: "from-yellow-400/20 to-yellow-600/5",
  },
  {
    name: "Chopp de Vinho",
    description: "Uvas selecionadas com um toque refrescante único.",
    abv: "4,5%",
    badge: "Especial",
    color: "from-purple-600/20 to-purple-800/5",
  },
]

export function Products() {
  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Nossos Produtos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Conheça nossos Chopps
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Produzidos com ingredientes selecionados seguindo a Lei da Pureza Alemã
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative group p-6 rounded-2xl border border-border/50 bg-gradient-to-b ${product.color} hover:border-primary/30 transition-all duration-300 flex flex-col h-full`}
            >
              {/* Badge placeholder - always reserves space */}
              <div className="h-6 mb-2">
                {product.badge && (
                  <Badge className="bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              {/* Glass Icon */}
              <div className="w-16 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-primary/10 rounded-b-full rounded-t-lg border-2 border-primary/20" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-3 bg-primary/20 rounded-b-full" />
              </div>

              <h3 className="font-serif text-lg font-bold text-foreground text-center mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed flex-grow">
                {product.description}
              </p>
              <div className="text-center mt-auto">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground">
                  {product.abv} ABV
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
