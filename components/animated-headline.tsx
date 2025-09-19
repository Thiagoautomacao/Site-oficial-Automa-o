
'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const phrases = [
  'Automatize o que consome seu tempo.',
  'Agentes de IA que atendem como humanos.',
  'Integrações N8N, CRM e ERP sem fricção.',
  'Operações 24/7, zero pausa.'
]
export function AnimatedHeadline() {
  const [index, setIndex] = useState(0)
  useEffect(() => { const id = setInterval(() => setIndex(i => (i + 1) % phrases.length), 3000); return () => clearInterval(id) }, [])
  return (
    <motion.h1 key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-medium leading-tight text-brand-navy">{phrases[index]}</motion.h1>
  )
}
