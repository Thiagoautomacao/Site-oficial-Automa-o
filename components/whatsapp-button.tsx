
'use client'
const WA_LINK = 'https://wa.me/555181979117?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20automa%C3%A7%C3%B5es%20com%20IA!'
export function WhatsAppButton() {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="fixed z-50 right-4 bottom-4 ripple group flex items-center gap-3 px-5 py-3 rounded-full bg-brand-navy text-white shadow-soft hover:translate-y-[-2px] transition" aria-label="Fale com a Solinte Digital no WhatsApp">
      <span className="font-medium">Falar no WhatsApp</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16.7 13.3a4.3 4.3 0 0 1-6.1 0l-1.2 1.2a6 6 0 0 0 8.5 0l-1.2-1.2zM12 3a9 9 0 0 0-7.9 13.2L3 21l4.8-1A9 9 0 1 0 12 3z" /></svg>
    </a>
  )
}
