import { MapPin, Clock } from "lucide-react"

export function Location() {
  return (
    <section id="localizacao" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Localização
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Visite Nossa Fábrica
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Venha conhecer onde a magia acontece
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {/* Address */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/50 border border-border/50">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">Endereço</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rua Lavras Novas, 50<br />
                São José do Triunfo<br />
                Viçosa/MG
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/50 border border-border/50">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">Horário de Funcionamento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h<br />
                Domingo: Fechado
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.5!2d-42.8631!3d-20.7539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Lavras%20Novas%2C%2050%20-%20S%C3%A3o%20Jos%C3%A9%20do%20Triunfo%2C%20Vi%C3%A7osa%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Wegas Bier - Viçosa/MG"
              className="w-full aspect-video md:aspect-[16/9] lg:aspect-[21/9]"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Clique no mapa para abrir no Google Maps e traçar sua rota
          </p>
        </div>
      </div>
    </section>
  )
}
