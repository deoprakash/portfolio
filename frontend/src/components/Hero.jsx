import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function useTypingCycle(items, speed = 45, pause = 1400) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = items[index]
    if (!current) return

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % items.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? speed / 1.5 : speed)

    return () => clearTimeout(timeout)
  }, [items, index, subIndex, deleting, speed, pause])

  return items[index]?.substring(0, subIndex) || ''
}

export default function Hero({ typingItems, summary, resumePdf }) {
  const typing = useTypingCycle(typingItems)

  return (
    <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] items-center">
      <div>
        {/* <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">AI Engineer Portfolio</p> */}
        <h1 className="mt-5 text-5xl md:text-6xl font-extrabold leading-tight">Deo Prakash</h1>
        <h2 className="mt-3 text-xl md:text-2xl font-semibold text-slate-200">AI Engineer & Software Developer</h2>

        <div className="mt-5 flex items-center gap-3 text-cyan-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]" />
          <span className="font-mono text-sm md:text-base">
            {typing}<span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="mt-6 text-slate-300 leading-relaxed">{summary}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 px-6 py-3 font-semibold text-black shadow-[0_0_18px_rgba(99,102,241,0.5)]"
          >
            View Projects
          </a>
          <a
            href={resumePdf}
            className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-cyan-300/80 hover:text-cyan-200 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 px-6 py-3 font-semibold bg-white/5 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      <motion.div
        className="glass-panel p-6"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="text-sm uppercase tracking-[0.3em] text-slate-300">Neural Overview</div>
        <div className="mt-4 space-y-4">
          {typingItems.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <div className="text-slate-200">{item}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-2 w-full rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500"
            initial={{ width: 0 }}
            whileInView={{ width: '85%' }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          />
        </div>
        <div className="mt-4 text-xs text-slate-400">System readiness: 85%</div>
      </motion.div>
    </div>
  )
}
