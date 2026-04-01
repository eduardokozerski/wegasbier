import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const products = [
  {
    name: "Chopp Pilsen",
    description: "Leve, refrescante e de fácil degustação. Nosso carro-chefe.",
    abv: "4,8%",
    badge: "Mais pedido",
    color: "from-amber-400/20 to-amber-600/5",
    details: [
      "Origem: estilo criado em Pilsen (República Tcheca), em 1842.",
      "Aparência: amarelo claro, dourado e cristalino, com espuma cremosa e boa retenção.",
      "Aroma: malte levemente adocicado com presença discreta de lúpulo floral ou herbal.",
      "Sabor: maltado e equilibrado, com amargor moderado a baixo e final refrescante.",
      "Corpo e carbonatação: corpo leve, carbonatação média a alta.",
      "Teor alcoólico: geralmente entre 4% e 5% ABV.",
      "Harmonização: saladas, peixes, frutos do mar, petiscos e pizzas.",
      "Temperatura ideal: entre 2°C e 5°C.",
    ],
  },
  {
    name: "Chopp Red Ale",
    description: "Maltado com notas de caramelo e tostado sutil.",
    abv: "5,2%",
    badge: null,
    color: "from-red-800/20 to-red-900/5",
    details: [
      "Aparência: âmbar profundo a vermelho cobreado, com espuma cremosa bege clara.",
      "Aroma: perfil maltado com notas de caramelo, toffee e biscoito.",
      "Sabor: equilíbrio entre doçura maltada e amargor moderado, com final suave.",
      "Corpo: médio, com sensação macia na boca.",
      "Teor alcoólico: normalmente entre 4,5% e 6,5% ABV.",
      "Carbonatação: moderada, trazendo refrescância sem excesso.",
    ],
  },
  {
    name: "Chopp IPA",
    description: "Intenso amargor e aroma cítrico marcante.",
    abv: "6,5%",
    badge: null,
    color: "from-orange-500/20 to-orange-700/5",
    details: [
      "Origem: consolidado nos Estados Unidos com uso de lúpulos cítricos e frutados.",
      "Aparência: dourado intenso a âmbar claro, espuma branca cremosa e persistente.",
      "Aroma: frutas tropicais, maracujá, manga, laranja, tangerina e toque resinoso.",
      "Sabor: base maltada suave com amargor limpo e final seco, aromático e refrescante.",
      "Corpo e carbonatação: corpo médio, carbonatação média a média-alta.",
      "Teor alcoólico: geralmente entre 6% e 7% ABV.",
      "Harmonização: hambúrguer artesanal, carnes grelhadas, pratos picantes e queijos curados.",
      "Temperatura ideal: entre 6°C e 8°C.",
    ],
  },
  {
    name: "Chopp Blonde",
    description: "Corpo médio com notas frutadas e final seco.",
    abv: "5,0%",
    badge: null,
    color: "from-green-500/20 to-green-700/5",
    details: [
      "Aparência: amarela clara a dourada, geralmente límpida e com espuma branca persistente.",
      "Aroma: notas leves de pão, biscoito e cereais, com lúpulo floral ou herbal.",
      "Sabor: maltado suave, leve doçura e amargor moderado, nunca agressivo.",
      "Final: limpo e seco, trazendo alta drinkability.",
      "Corpo e carbonatação: corpo leve a médio e carbonatação moderada.",
      "Teor alcoólico: normalmente entre 4,0% e 6,0% ABV.",
    ],
  },
  {
    name: "Chopp de Vinho",
    description: "Uvas selecionadas com um toque refrescante único.",
    abv: "4,5%",
    badge: "Especial",
    color: "from-purple-600/20 to-purple-800/5",
    details: [
      "Bebida especial com perfil aromático único, combinando notas vínicas e refrescância.",
      "Elaborado com uvas selecionadas para uma experiência mais frutada e elegante.",
      "Ideal para quem busca um chopp diferenciado e marcante no paladar.",
    ],
  },
];

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
            Produzidos com ingredientes selecionados seguindo a Lei da Pureza
            Alemã
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative group p-6 rounded-2xl border border-border/50 bg-gradient-to-b ${product.color} hover:border-primary/30 transition-all duration-300 flex flex-col h-full min-h-[380  px]`}
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      Ver informações
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{product.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-3">
                      {product.details.map((detail) => (
                        <p
                          key={detail}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
