
'use client'
import Image from 'next/image'
import Link from 'next/link'
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <Image src="/logo-solinte.png" alt="Solinte Digital" width={42} height={42} className="rounded-xl shadow-soft" />
          <span className="text-[15px] sm:text-lg font-medium tracking-wide text-brand-navy">Solinte Digital</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#sobre" className="link-underline text-neutral-700 hover:text-brand-navy">O que é</a>
          <a href="#para-quem" className="link-underline text-neutral-700 hover:text-brand-navy">Para quem</a>
          <a href="#exemplos" className="link-underline text-neutral-700 hover:text-brand-navy">Exemplos</a>
          <a href="#beneficios" className="link-underline text-neutral-700 hover:text-brand-navy">Benefícios</a>
          <a href="#contato" className="px-4 py-2 rounded-xl bg-brand-navy text-white shadow-soft hover:opacity-90 transition">Contato</a>
        </nav>
      </div>
    </header>
  )
}
