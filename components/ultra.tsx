import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function Ultra() {
  const benefits = ["Zero Glúten", "Zero Açúcar", "Baixo em Calorias"];

  return (
    <section id="ultra" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-2xl bg-secondary">
                <Image
                  src="/ultra.jpg"
                  alt="Cerveja Ultra - Zero Glúten, Zero Açúcar, Baixo em Calorias"
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg font-semibold">
                Inovação
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
                Novidade
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Ultra
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conheça a cerveja que une o melhor de dois mundos: o sabor
                autêntico da cerveja com o cuidado à sua saúde. Perfeita para
                quem não abre mão de qualidade e bem-estar.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary border border-border/50"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Highlight */}
            <div className="bg-secondary rounded-xl p-6 border border-border/50">
              <h3 className="font-semibold text-foreground mb-3">
                Informações Nutricionais
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">0g</p>
                  <p className="text-xs text-muted-foreground mt-1">Glúten</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">0g</p>
                  <p className="text-xs text-muted-foreground mt-1">Açúcar</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">31</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Calorias*
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                *Por 335ml. Valores aproximados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
