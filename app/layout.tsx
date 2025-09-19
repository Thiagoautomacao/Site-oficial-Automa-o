
import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Solinte Digital — Soluções Digitais Inteligentes',
  description: 'Automações com IA para empresas e donos de negócios.',
  openGraph: {
    title: 'Solinte Digital — Soluções Digitais Inteligentes',
    description: 'Automações com IA para empresas e donos de negócios.',
    url: 'https://solinte.com.br',
    siteName: 'Solinte Digital',
    images: [{ url: '/logo-solinte.png' }],
    locale: 'pt_BR', type: 'website'
  }
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192.png" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />{children}<Footer />
      </body>
    </html>
  )
}
