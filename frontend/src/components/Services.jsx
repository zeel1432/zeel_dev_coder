export default function Services() {
  return (
    <section className="py-20 bg-gray-100">
      <h3 className="text-4xl font-bold text-center text-blue-900 mb-12">
        My Services
      </h3>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h4 className="text-xl font-semibold mb-3">Website Development</h4>
          <p>Modern, responsive websites using React & Tailwind.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h4 className="text-xl font-semibold mb-3">UI Design</h4>
          <p>Clean, professional UI with user-focused design.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h4 className="text-xl font-semibold mb-3">Custom Solutions</h4>
          <p>Custom frontend solutions for businesses.</p>
        </div>

      </div>
    </section>
  )
}
