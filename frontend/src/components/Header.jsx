export default function Header({ resumePdf }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#060914]/70 backdrop-blur-xl">
      <div className="container-max flex items-center justify-between py-4">
        <div className="text-lg font-bold tracking-wide">Deo Prakash</div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          {[
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-white transition">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={resumePdf}
          className="hidden md:inline-flex rounded-full px-4 py-2 text-sm font-semibold bg-white/10 border border-white/10 hover:border-cyan-400/80 hover:text-cyan-200 transition"
        >
          Download Resume
        </a>
      </div>
    </header>
  )
}
