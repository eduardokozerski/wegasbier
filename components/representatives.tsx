"use client";

import { useState } from "react";
import { Phone, User } from "lucide-react";

type Representative = {
  region: string;
  name: string;
  phone: string;
  cities: string[];
};

const representatives = [
  {
    region: "Teixeiras, Pedra do Anta, Guaraciaba e Região",
    name: "Júnior Zaidan",
    phone: "+55 31 9622-8582",
    cities: ["Teixeiras", "Pedra do Anta", "Guaraciaba"],
  },
  {
    region: "Viçosa e Coimbra",
    name: "Wegas Viçosa",
    phone: "+55 31 9908-5917",
    cities: ["Viçosa", "Coimbra"],
  },
  {
    region: "Paula Cândido, Senador Firmino e Divinésia",
    name: "Glauber Santos",
    phone: "+55 32 9833-2487",
    cities: ["Paula Cândido", "Senador Firmino", "Divinésia"],
  },
  {
    region: "Guidoval, Ubá e Região",
    name: "Vitor Vieira",
    phone: "+55 32 9905-9835",
    cities: ["Guidoval", "Ubá"],
  },
  {
    region: "São Geraldo, Visconde do Rio Branco e Região",
    name: "Glenio Teixeira",
    phone: "+55 32 9836-5772",
    cities: ["São Geraldo", "Visconde do Rio Branco"],
  },
  {
    region: "Canaã, Araponga, São Bento e Região",
    name: "Grasiele",
    phone: "+55 31 9668-7815",
    cities: ["Canaã", "Araponga", "São Bento"],
  },
  {
    region: "Porto Firme e Piranga",
    name: "Bruno Paiva",
    phone: "+55 31 9851-7964",
    cities: ["Porto Firme", "Piranga"],
  },
  {
    region: "Conselheiro Lafaiete e Região",
    name: "Antonio",
    phone: "+55 31 9720-7558",
    cities: ["Conselheiro Lafaiete"],
  },
  {
    region: "Presidente Bernardes, Brás Pires e Senador Firmino",
    name: "Paulo Henrique",
    phone: "+55 31 7501-4919",
    cities: ["Presidente Bernardes", "Brás Pires", "Senador Firmino"],
  },
  {
    region: "Ponte Nova",
    name: "Marlon Luiz",
    phone: "+55 31 9883-8909",
    cities: ["Ponte Nova"],
  },
  {
    region: "Rio Pomba",
    name: "José Antonio",
    phone: "+55 32 8885-0915",
    cities: ["Rio Pomba"],
  },
  {
    region: "Ubá",
    name: "Celsinho",
    phone: "+55 31 8871-0731",
    cities: ["Ubá"],
  },
  {
    region: "Miraí",
    name: "Anderson",
    phone: "+55 31 9527-9451",
    cities: ["Miraí"],
  },
  {
    region: "São Miguel",
    name: "Warley",
    phone: "+55 31 8464-4281",
    cities: ["São Miguel"],
  },
] satisfies Representative[];

export function Representatives() {
  const cities = Array.from(
    new Set(representatives.flatMap((representative) => representative.cities)),
  ).sort((firstCity, secondCity) => firstCity.localeCompare(secondCity, "pt-BR"));
  const [selectedCity, setSelectedCity] = useState<string>("Todas");
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento de chopp para meu evento.",
  );
  const filteredRepresentatives =
    selectedCity === "Todas"
      ? representatives
      : representatives.filter((representative) =>
          representative.cities.includes(selectedCity),
        );

  const renderRepresentativeCard = (
    rep: Representative,
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
        <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto mb-10">
          <button
            type="button"
            onClick={() => setSelectedCity("Todas")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedCity === "Todas"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border/50 text-foreground hover:border-primary/30"
            }`}
          >
            Todas
          </button>
          {cities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => setSelectedCity(city)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCity === city
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border/50 text-foreground hover:border-primary/30"
              }`}
            >
              {city}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {filteredRepresentatives.map((rep, index) =>
            renderRepresentativeCard(rep, index, filteredRepresentatives.length),
          )}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Outras cidades disponíveis mediante consulta
        </p>
      </div>
    </section>
  );
}
