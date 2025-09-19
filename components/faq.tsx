
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
export function FAQItem({q, a}:{q:string,a:string}){
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-neutral-200 rounded-xl bg-white">
      <button onClick={()=>setOpen(!open)} className="w-full text-left px-5 py-4 flex items-center justify-between">
        <span className="font-medium text-brand-navy">{q}</span>
        <span className="text-neutral-500">{open ? '–' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3}} className="px-5 pb-5 text-neutral-700">
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
