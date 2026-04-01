"use client";

import { useState } from "react";
import { Phone, User } from "lucide-react";

const representatives = [
  {
    region: "Teixeiras, Pedra do Anta, Guaraciaba e Região",
    name: "Júnior Zaidan",
    phone: "+55 31 9622-8582",
  },
  {
    region: "Viçosa e Coimbra",
    name: "Wegas Viçosa",
    phone: "+55 31 9908-5917",
  },
  {
    region: "Paula Cândido, Senador Firmino e Divinésia",
    name: "Glauber Santos",
    phone: "+55 32 9833-2487",
  },
  {
    region: "Guidoval, Ubá e Região",
    name: "Vitor Vieira",
    phone: "+55 32 9905-9835",
  },
  {
    region: "São Geraldo, Visconde do Rio Branco e Região",
    name: "Glenio Teixeira",
    phone: "+55 32 9836-5772",
  },
  {
    region: "Canaã, Araponga, São Bento e Região",
    name: "Grasiele",
    phone: "+55 31 9668-7815",
  },
  {
    region: "Porto Firme e Piranga",
    name: "Bruno Paiva",
    phone: "+55 31 9851-7964",
  },
  {
    region: "Conselheiro Lafaiete e Região",
    name: "Antonio",
    phone: "+55 31 9720-7558",
  },
  {
    region: "Presidente Bernardes, Brás Pires e Senador Firmino",
    name: "Paulo Henrique",
    phone: "+55 31 7501-4919",
  },
  {
    region: "Ponte Nova",
    name: "Marlon Luiz",
    phone: "+55 31 9883-8909",
  },
  {
    region: "Rio Pomba",
    name: "José Antonio",
    phone: "+55 32 8885-0915",
  },
  {
    region: "Ubá",
    name: "Celsinho",
    phone: "+55 31 8871-0731",
  },
  {
    region: "Miraí",
    name: "Anderson",
    phone: "+55 31 9527-9451",
  },
  {
    region: "São Miguel",
    name: "Warley",
    phone: "+55 31 8464-4281",
  },
];

export function Representatives() {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento de chopp para meu evento.",
  );
  const firstRepresentatives = representatives.slice(0, 3);
  const remainingRepresentatives = representatives.slice(3);

  const renderRepresentativeCard = (
    rep: (typeof representatives)[number],
    index: number,
    total: number,
  ) => (
    <a
      key={`${rep.name}-${index}`}
      href={`https://wa.me/${rep.phone.replace(/\D/g, "")}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 block cursor-pointer lg:col-span-2 ${
        total % 3 === 2 && index === total - 2 ? "lg:col-start-2" : ""
      } ${total % 3 === 2 && index === total - 1 ? "lg:col-start-4" : ""}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-foreground">
            {rep.name}
          </h3>
          <p className="text-sm text-muted-foreground">{rep.region}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5 text-primary" />
        <span className="text-foreground">{rep.phone}</span>
      </div>
    </a>
  );

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Fale Conosco
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossos Representantes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Entre em contato com o representante da sua região
          </p>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {representatives.map((rep, index) =>
            renderRepresentativeCard(rep, index, representatives.length),
          )}
        </div>
        <div className="md:hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {firstRepresentatives.map((rep, index) =>
              renderRepresentativeCard(rep, index, firstRepresentatives.length),
            )}
          </div>
          <div
            className={`grid grid-cols-1 gap-8 overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded
                ? "max-h-[4000px] opacity-100 mt-6"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            {remainingRepresentatives.map((rep, index) =>
              renderRepresentativeCard(
                rep,
                index,
                remainingRepresentatives.length,
              ),
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsExpanded((prevState) => !prevState)}
            className="mt-6 w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-center text-sm font-medium text-foreground hover:border-primary/30 transition-colors"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Mostrar menos" : "Mostrar todos"}
          </button>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Outras cidades disponíveis mediante consulta
        </p>
      </div>
    </section>
  );
}
