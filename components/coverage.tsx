"use client"

import { MapPin, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

const cities = [
  "Viçosa",
  "Teixeiras", 
  "Canaã",
  "Ubá",
  "Ponte Nova",
  "Cajuri",
  "Coimbra",
  "São Geraldo",
  "Piranga",
  "Paula Cândido",
  "Divinésia",
  "Senador Firmino",
]

export function Coverage() {
  return (
    <section id="cobertura" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Truck className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Entrega em toda região</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            A Wegas vai onde seu evento estiver
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Levamos nosso chopp artesanal para toda a Zona da Mata Mineira
          </p>
        </div>

        {/* Animated Marquee */}
        <div className="relative mb-12">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* First Row - Left to Right */}
          <div className="flex overflow-hidden mb-4">
            <div className="flex animate-marquee gap-4">
              {[...cities, ...cities].map((city, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-semibold whitespace-nowrap">{city}</span>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee gap-4" aria-hidden="true">
              {[...cities, ...cities].map((city, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-semibold whitespace-nowrap">{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-reverse gap-4">
              {[...cities.slice().reverse(), ...cities.slice().reverse()].map((city, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-semibold whitespace-nowrap">{city}</span>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee-reverse gap-4" aria-hidden="true">
              {[...cities.slice().reverse(), ...cities.slice().reverse()].map((city, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-semibold whitespace-nowrap">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Não encontrou sua cidade? Entre em contato!
          </p>
          <Button 
            asChild 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
          >
            <a 
              href="https://wa.me/5531999615498?text=Olá! Gostaria de saber se vocês atendem minha região."
              target="_blank"
              rel="noopener noreferrer"
            >
              Verificar disponibilidade
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
