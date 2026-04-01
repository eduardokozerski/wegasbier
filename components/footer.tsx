import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Clock, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Link href="/" className="relative inline-block h-20 w-40 mb-6">
              <Image
                src="https://raw.githubusercontent.com/eduardokozerski/wegasbier/main/logo-novo.png"
                alt="Wegas Bier"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Nascida no interior de Minas Gerais, a Wegas Bier traz o melhor
              chopp artesanal da região desde 2017.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Rua Lavras Novas, 50
                  <br />
                  São José do Triunfo, Viçosa/MG
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Seg–Sex 07h30–17h30</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+5531997051109"
                  className="hover:text-primary transition-colors"
                >
                  (31) 9 9705-1109
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@wegaschopp.com.br"
                  className="hover:text-primary transition-colors"
                >
                  contato@wegaschopp.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">
              Redes Sociais
            </h4>
            <a
              href="https://instagram.com/cervejaria_wegas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <span>@cervejaria_wegas</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cervejaria Wegas. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
