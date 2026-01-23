const whyChoose = [
  "1 Year Free Domain & Hosting",
  "Premium Custom UI & UX Design",
  "Fast & Secure Website Performance",
  "SEO Optimized & Mobile Friendly",
  "Live Chat & API Integration",
  "Dedicated Support & Maintenance",
]

const projects = [
  "Project Showcase 1",
  "Project Showcase 2",
  "Project Showcase 3",
]

const testimonials = [
  {
    name: "Client Review",
    text: "Excellent service and professional work. The website performs smoothly and looks amazing.",
  },
  {
    name: "Client Review",
    text: "Very responsive and delivered exactly what was promised. Highly recommended.",
  },
  {
    name: "Client Review",
    text: "Great experience from start to finish. The support and communication were outstanding.",
  },
]


export default function WhyChooseMe() {
  return (
    <section className="bg-[#0b0b0b] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* WHY CHOOSE ME */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold mb-2">Why Choose Me?</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Design that looks good and performs better
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
      {whyChoose.map((item, i) => (
        <div
          key={i}
          className="group relative bg-[#111] border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
        >
          {/* GLOW EFFECT */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-xl" />
          </div>

          {/* ICON */}
          <div className="relative z-10 w-14 h-14 mb-5 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-xl font-bold group-hover:scale-110 transition">
            ✓
          </div>

          {/* TEXT */}
          <p className="relative z-10 text-white font-semibold leading-snug">
            {item}
          </p>

          {/* SUBTLE LINE */}
          <div className="relative z-10 mt-4 h-[2px] w-10 bg-blue-500/40 group-hover:w-20 transition-all duration-300" />
        </div>
      ))}
    </div>

        {/* COMPLETED PROJECTS */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold mb-2">My Completed Projects</p>
          <h2 className="text-2xl font-bold">
            Trusted by teams across India, we design and develop websites that simply work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#111] border border-white/10 rounded-xl h-[220px] flex items-center justify-center text-gray-400"
            >
              {project}
            </div>
          ))}
        </div>

        {/* TESTIMONIALS */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold mb-2">What My Clients Say</p>
          <h2 className="text-2xl font-bold">
            Real feedback from recent projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111] border border-white/10 rounded-xl p-6 text-sm text-gray-300"
            >
              <p className="mb-4">"{t.text}"</p>
              <span className="text-blue-500 font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
