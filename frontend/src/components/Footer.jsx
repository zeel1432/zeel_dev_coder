import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedinIn, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-4">
            <span className="h-[2px] w-16 bg-blue-500/60" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Get in touch
            </h2>
            <span className="h-[2px] w-16 bg-blue-500/60" />
          </div>
          <p className="text-gray-400 text-sm">
            We answer quickly. Subscribe for updates or reach out directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <p className="text-blue-400 text-sm font-semibold mb-4 tracking-widest">
              LET’S STAY IN TOUCH
            </p>

            <div className="bg-[#111] border border-white/10 rounded-xl p-6 max-w-md shadow-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
              />

              <p className="text-gray-400 text-xs mt-3 mb-6">
                We send occasional updates. No spam. Unsubscribe anytime.
              </p>

              <button className="w-full rounded-full py-3 font-semibold bg-blue-500 text-black hover:bg-blue-400 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            <div>
              <p className="text-blue-400 font-semibold mb-2">Contact</p>
              <p className="text-sm text-gray-300">zeelgajjar123@gmail.com</p>
            </div>

            <div>
              <p className="text-blue-400 font-semibold mb-2">Based in</p>
              <p className="text-sm text-gray-300">Surat, India</p>
            </div>

            <div>
              <p className="text-blue-400 font-semibold mb-2">Policies</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="hover:text-blue-400 transition cursor-pointer">Terms and Conditions</li>
                <li className="hover:text-blue-400 transition cursor-pointer">Privacy Policy</li>
                <li className="hover:text-blue-400 transition cursor-pointer">Cancellation & Refund Policy</li>
              </ul>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="www.linkedin.com/in/zeelgajjardev" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a href="https://wa.me/918758056573" target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}