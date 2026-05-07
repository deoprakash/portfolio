import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const MotionCard = motion.div

export default function Projects({ projects }) {
  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="section-title">Projects</h3>
        <a
          className="glow-button text-sm"
          href="https://github.com/deoprakash"
          target="_blank"
          rel="noreferrer"
        >
          See more...
        </a>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <MotionCard key={project.name} className="glass-panel p-6 project-card" whileHover={{ y: -6 }}>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">{project.name}</h4>
              <a
                className="icon-button"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name} on GitHub`}
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
            <p className="mt-3 text-slate-300 text-justify">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="chip-glow">{tag}</span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <a className="glow-button" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              {project.live ? (
                <a className="glow-button" href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              ) : null}
            </div>
          </MotionCard>
        ))}
      </div>
    </>
  )
}
