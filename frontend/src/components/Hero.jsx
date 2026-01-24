export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#0b0b0b] text-white min-h-[90vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-400 mb-2 text-sm">
            Hi, I’m
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Zeel{" "}
            <span className="text-blue-500">Gajjar</span>
          </h1>

          <p className="mt-5 text-gray-300 max-w-xl">
            I design and develop modern, high-converting websites that help
            businesses grow online with speed, clarity, and performance.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold">
              Book Free Call
            </button>

            <button className="border border-white/20 hover:border-white transition px-6 py-3 rounded-md font-semibold">
              View Portfolio
            </button>
          </div>

          {/* SOCIAL / SMALL TEXT */}
          <div className="mt-10 text-sm text-gray-400">
            Trusted by startups & local businesses
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/src/assets/images/zeelhero.png"
            alt="Zeel Gajjar"
            className="rounded-xl object-cover grayscale"
          />
        </div>

      </div>
    </section>
  )
}
