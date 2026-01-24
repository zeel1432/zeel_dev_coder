const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites built with clean architecture and best practices.",
    image: "/src/assets/services/web.jpg",
  },
  {
    title: "App Development",
    description:
      "Feature-rich mobile applications designed for scalability, performance, and great user experience.",
    image: "/src/assets/services/app.jpg",
  },
  {
    title: "E-commerce Development",
    description:
      "Secure, scalable online stores with smooth checkout and conversion-focused design.",
    image: "/src/assets/services/ecommerce.jpg",
  },
  {
    title: "Cutomer Support",
    description:
      "Always-on assistance with monitoring, fixes, and performance updates to keep your website, app, or software running smoothly.",
    image: "/src/assets/services/ecommerce.jpg",
  },
  {
    title: "Backend Devlopment",
    description:
      "High-performance APIs, secure databases, and scalable backend systems built using Node.js, Fastify, MongoDB & PostgreSQL.",
    image: "/src/assets/services/ecommerce.jpg",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#0b0b0b] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold mb-2">My Services</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What I Can Do For You
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[280px] rounded-2xl overflow-hidden border border-white/10 bg-[#111] cursor-pointer"
            >
              {/* BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-700" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {service.description}
                </p>
              </div>

              {/* ACCENT BORDER */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-blue-500/0 group-hover:ring-blue-500/40 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
