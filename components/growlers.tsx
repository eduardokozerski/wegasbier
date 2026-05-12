import Image from "next/image";

const growlers = [
  { name: "Growler Blonde", image: "/growler-Blonde.png" },
  { name: "Growler IPA", image: "/growler-Ipa.png" },
  { name: "Growler Pilsen", image: "/growler-Pilsen.png" },
  { name: "Growler Red", image: "/growler-Red.png" },
  { name: "Growler Vinho", image: "/growler-Vinho.png" },
];

export function Growlers() {
  return (
    <section id="growlers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Veja também nossos Growlers
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Recipientes retornáveis usados para transportar e conservar chope ou
            cerveja artesanal fresca, mantendo qualidade, sabor e aroma.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {growlers.map((growler) => (
            <div
              key={growler.name}
              className="group p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-black">
                <Image
                  src={growler.image}
                  alt={growler.name}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-foreground">
                {growler.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
