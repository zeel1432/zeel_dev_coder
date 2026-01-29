import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#0b0b0b] text-white min-h-[90vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-225 grid md:grid-cols-2 gap-18 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h4 className="text-gray-300 mb-0  font-medium">Hi, I’m</h4>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Zeel <span className="text-blue-500">Gajjar</span>
          </h1>

          {/* Typed Animation */}
          <div className="mt-4 text-xl md:text-1xl font-medium text-gray-300 h-[30px]">
            <TypeAnimation
              sequence={[
                "I build high-performance business websites",
                2000,
                "Custom E-Commerce and web applications",
                2000,
                "Modern UI + Speed + SEO that converts",
                2000,
              ]}
              wrapper="relative"
              speed={50}
              repeat={Infinity}
              className="text-blue-300"
            />
          </div>

          <p className="mt-5 text-gray-300 max-w-xl">
            I design and develop modern, high-converting websites that help
            businesses grow online with speed, clarity, and performance.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=918758056573&text=Hi+Zeel%2C+I+want+a+website+quote.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold">
                Whatsapp Now
              </button>
            </a>

            <button 
            onClick={() =>
                document
                  .getElementById("consultation")
                  .scrollIntoView({ behavior: "smooth" })
              } className="border border-white/20 hover:border-white transition px-6 py-3 rounded-md font-semibold">
              Book Free Call
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
  );
}
