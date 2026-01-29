export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0b] border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* LEFT: BRAND */}
        <div className="text-white text-xl font-bold">
          Zeel<span className="text-blue-500">Devlops</span>
        </div>

        {/* CENTER: LINKS (DESKTOP) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#getfreequote" className="hover:text-white transition">
            Get free Quote
          </a>
          <a href="#aboutus" className="hover:text-white transition">
            About Us
          </a>
          <a href="#ourplans" className="hover:text-white transition">
            Our Plans
          </a>
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#ourproject" className="hover:text-white transition">
            Our Projects
          </a>
          <a href="#faqs" className="hover:text-white transition">
            FAQs
          </a>
          <a href="#blogs" className="hover:text-white transition">
            Blogs
          </a>
        </div>

        {/* RIGHT: CTA */}
        <div className="hidden md:block">
          <a href="https://api.whatsapp.com/send/?phone=918758056573&text=Hi+Zeel%2C+I+want+a+website+quote.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer">
                
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-semibold px-5 py-2.5 rounded-md">
            Book Free Call
          </button>
              </a>
        </div>

        {/* MOBILE MENU ICON (simple, no libs) */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>

      </nav>
    </header>
  )
}
