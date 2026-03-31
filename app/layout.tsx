import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Wegas Bier | Fábrica de Chopp Artesanal em Viçosa/MG',
  description: 'Chopp artesanal de produção própria para seu evento. Desde 2017 em Viçosa e região. Pilsen, IPA, Red Ale, Blond e Chopp de Vinho. Kombi Bier para festas.',
  keywords: 'chopp artesanal, cerveja artesanal, Viçosa, Minas Gerais, festa, evento, Kombi Bier, chopp para festa',
  openGraph: {
    title: 'Wegas Bier | O Chopp Certo Para o Seu Evento',
    description: 'Chopp artesanal de produção própria para seu evento. Desde 2017 em Viçosa e região.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1611',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
