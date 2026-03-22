import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function About({ summary, stats, education, publication }) {
  return (
    <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
      <div className="glass-panel p-8">
        <h3 className="section-title">About</h3>
        <p className="mt-4 text-slate-300 leading-relaxed text-justify">{summary}</p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <motion.div key={stat.label} className="stat-card" whileHover={{ scale: 1.02 }}>
              <div className="text-2xl font-bold text-white">{stat.value}+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="glass-panel p-6">
          <h4 className="text-lg font-semibold">Education</h4>
          <p className="mt-2 text-slate-300">{education.degree}</p>
          <p className="text-slate-400">{education.field}</p>
          <p className="text-slate-400">{education.school}</p>
          <p className="text-slate-400">{education.location}</p>
          <p className="text-slate-400">{education.period} | CGPA: {education.cgpa}</p>
        </div>
        <div className="glass-panel p-6">
          <h4 className="text-lg font-semibold">Publication</h4>
          <p className="mt-2 text-slate-300">{publication.title}</p>
          <p className="text-slate-400">{publication.publisher} ({publication.year})</p>
          <a
            href={publication.doi}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-cyan-300 text-sm"
          >
            View DOI <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
