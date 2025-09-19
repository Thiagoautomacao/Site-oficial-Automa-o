
'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
export function Stat({ label, value, suffix = '' }:{ label:string, value:number, suffix?:string }){
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return;
    const start = performance.now(), duration = 1200
    const step = (t:number) => { const p = Math.min(1, (t - start)/duration); setCount(Math.round(value * p)); if (p < 1) requestAnimationFrame(step) }
    requestAnimationFrame(step)
  }, [inView, value])
  return (
    <motion.div ref={ref} initial={{opacity:0, y:10}} animate={inView?{opacity:1, y:0}:{}} transition={{duration:.6}} className="text-center">
      <div className="text-4xl font-semibold text-brand-navy">{count.toLocaleString()}{suffix}</div>
      <div className="mt-1 text-sm text-neutral-600">{label}</div>
    </motion.div>
  )
}
