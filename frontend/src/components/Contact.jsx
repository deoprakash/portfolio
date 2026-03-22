import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact({ contact }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <h3 className="section-title">Contact</h3>
        <p className="mt-4 text-slate-300">
          Ready to build the next AI product? Lets collaborate on intelligent systems, automation platforms, and AI research.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={`mailto:${contact.email}`} className="social-pill"><Mail size={16} /> Email</a>
          <a href={contact.github} className="social-pill" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          <a href={contact.linkedin} className="social-pill" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
        </div>
      </div>

      <motion.form
        className="glass-panel p-6 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <label className="text-sm text-slate-300">Name</label>
          <input className="input-glow" placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm text-slate-300">Email</label>
          <input className="input-glow" placeholder="you@email.com" />
        </div>
        <div>
          <label className="text-sm text-slate-300">Message</label>
          <textarea className="input-glow min-h-[120px]" placeholder="Tell me about your project" />
        </div>
        <button type="button" className="glow-button w-full">Send Message</button>
      </motion.form>
    </div>
  )
}
