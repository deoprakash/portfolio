

export default function Footer({ contact }) {
  return (
    <footer className="border-t border-white/10 bg-[#070a16]">
      <div className="container-max py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
        <div>© {new Date().getFullYear()} Deo Prakash. All rights reserved.</div>
        <div className="flex gap-4">
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
        </div>
      </div>
    </footer>
  )
}
