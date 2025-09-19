
export function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-neutral-600">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Solinte Digital — Todos os direitos reservados.</p>
          <div className="space-x-6">
            <a className="hover:text-brand-navy" href="/privacidade">Política de Privacidade</a>
            <span className="text-neutral-400">|</span>
            <span>CNPJ: 07.907.109/0001-56 • Águas Claras / Viamão-RS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
