export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0b] border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* LEFT: BRAND */}
        <div className="text-white text-xl font-bold">
          Zeel<span className="text-blue-500">Gajjar</span>
        </div>

        {/* CENTER: LINKS (DESKTOP) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* RIGHT: CTA */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold px-5 py-2.5 rounded-md">
            Book Free Call
          </button>
        </div>

        {/* MOBILE MENU ICON (simple, no libs) */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>

      </nav>
    </header>
  )
}
