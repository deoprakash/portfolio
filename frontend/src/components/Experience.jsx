import { motion } from 'framer-motion'

export default function Experience({ experiences }) {
  return (
    <>
      <h3 className="section-title">Experience</h3>
      <div className="mt-8 space-y-8">
        {experiences.map((exp) => (
          <motion.div key={exp.role} className="timeline-card" whileHover={{ scale: 1.01 }}>
            <div className="timeline-dot" />
            <div className="glass-panel p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-lg font-semibold">{exp.role}</h4>
                <span className="text-sm text-cyan-300">{exp.period}</span>
              </div>
              <p className="text-slate-400">{exp.company}</p>
              <ul className="mt-3 space-y-2 text-slate-300 list-disc ml-5">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}
