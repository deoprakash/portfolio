import { motion } from 'framer-motion'

export default function Skills({ skills }) {
  return (
    <>
      <h3 className="section-title">Skills</h3>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {skills.map((group) => (
          <motion.div key={group.title} className="glass-panel p-6" whileHover={{ scale: 1.01 }}>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">{group.title}</h4>
              <div className="text-xs text-slate-400">AI stack</div>
            </div>
            <div className="mt-4 space-y-4">
              {group.items.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-cyan-300">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}
