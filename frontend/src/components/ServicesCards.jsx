const cards = [
  {
    title: "Web Development",
    description:
      "Modern, fast, and responsive websites built using React and the latest frontend technologies.",
    color: "bg-blue-500",
    overlay: "bg-blue-300",
  },
  {
    title: "Android Development",
    description:
      "High-performance Android applications with clean UI and scalable architecture.",
    color: "bg-emerald-500",
    overlay: "bg-emerald-300",
  },
  {
    title: "Ecommerce Development",
    description:
      "Conversion-focused ecommerce stores with secure payments and smooth user experience.",
    color: "bg-purple-500",
    overlay: "bg-purple-300",
  },
]

export default function ServicesCards() {
  return (
    <section className="bg-[#0b0b0b] py-0">
      <div className="max-w-6x0 mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 place-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative w-[220px] h-[320px] ${card.color} rounded-[15px] cursor-pointer flex items-center justify-center text-white text-xl font-bold overflow-hidden`}
            >
              {/* BEFORE */}
              <div
                className={`absolute top-0 right-0 w-[20%] h-[20%] ${card.overlay} rounded-tr-[15px] rounded-bl-[100%] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-[15px]`}
              />

              {/* AFTER */}
              <div
                className={`absolute bottom-0 left-0 w-[20%] h-[20%] ${card.overlay} rounded-br-[15px] rounded-tl-[100%] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-[15px]`}
              />

              {/* CONTENT */}
              <div className="relative z-10 text-center px-4">
                <h3 className="text-xl font-bold mb-3">
                  {card.title}
                </h3>

                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
