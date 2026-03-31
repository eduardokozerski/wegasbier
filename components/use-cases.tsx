"use client"

import Image from "next/image"

const eventTypes = [
  {
    label: "Festas Open Bar",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
  },
  {
    label: "Festivais",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
  },
  {
    label: "Eventos Privados",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=80",
  },
  {
    label: "Eventos Corporativos",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
  },
  {
    label: "Feiras",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
]

export function UseCases() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Tipos de Eventos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Para toda ocasião especial
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Atendemos diversos tipos de eventos com estrutura completa
          </p>
        </div>

        {/* Image Grid - Equal Size Row */}
        <div className="flex flex-wrap lg:flex-nowrap gap-3 md:gap-4">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl flex-1 min-w-[calc(50%-0.5rem)] lg:min-w-0 aspect-[4/5]"
            >
              <Image
                src={event.image}
                alt={event.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <span className="text-foreground font-semibold text-sm md:text-base lg:text-lg">
                  {event.label}
                </span>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
