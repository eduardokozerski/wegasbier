import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5531997051109?text=Olá! Gostaria de contratar a Kombi Bier para meu evento.";

export function KombiBier() {
  return (
    <section id="kombi" className="relative py-24 overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster="https://raw.githubusercontent.com/eduardokozerski/wegasbier/main/kombi.png"
        >
          <source
            src="https://raw.githubusercontent.com/eduardokozerski/wegasbier/main/wegas-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start text-left w-full max-w-xl mx-auto lg:ml-auto lg:mr-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Destaque</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Kombi Bier — O Chopp{" "}
              <span className="text-primary">Vai Até Você</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Nossa Kombi leva o melhor chopp artesanal direto para o seu evento
              particular. Uma experiência única que transforma qualquer
              celebração em um momento inesquecível.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Estrutura completa de bar móvel",
                "Atendimento personalizado",
                "Chopps frescos e cremosos",
                "Ideal para festas e eventos",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Contratar Kombi Bier
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent" />
              <Image
                src="https://raw.githubusercontent.com/eduardokozerski/wegasbier/main/kombi.png"
                alt="Kombi Bier Wegas"
                fill
                className="object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
