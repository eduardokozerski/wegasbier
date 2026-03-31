import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustIndicators } from "@/components/trust-indicators"
import { Products } from "@/components/products"
import { UseCases } from "@/components/use-cases"
import { KombiBier } from "@/components/kombi-bier"
import { Differentials } from "@/components/differentials"
import { Coverage } from "@/components/coverage"
import { Representatives } from "@/components/representatives"
import { Location } from "@/components/location"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustIndicators />
      <Products />
      <UseCases />
      <KombiBier />
      <Differentials />
      <Coverage />
      <Representatives />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
