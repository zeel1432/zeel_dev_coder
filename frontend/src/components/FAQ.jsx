const faqs = [
  {
    question: "What services do you offer for web development?",
    answer:
      "I offer complete website solutions including UI/UX design, frontend & backend development, performance optimization, SEO-ready structure, and deployment.",
  },
  {
    question: "Which technologies do you use in your projects?",
    answer:
      "I work with modern technologies such as React, Tailwind CSS, Node.js, Express, MongoDB, PostgreSQL, and REST APIs.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "Yes, I provide 1 year of free domain and hosting with selected plans. Renewal options are also available.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard website usually takes 5–10 working days depending on complexity and features.",
  },
  {
    question: "Do you offer website maintenance after delivery?",
    answer:
      "Yes, I provide free technical support for a limited period and paid maintenance plans for long-term support.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. I can redesign and modernize your existing website to improve performance, UI, and conversion rates.",
  },
]

export default function FAQ() {
  return (
    <section className="bg-[#0b0b0b] py-24 text-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold mb-2">
            Frequently Asked Questions
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group bg-[#111] border border-white/10 rounded-xl p-5 cursor-pointer transition hover:border-blue-500"
            >
              {/* QUESTION */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm md:text-base font-medium">
                  {faq.question}
                </h3>
                <span className="text-blue-500 text-xl font-bold transition group-hover:rotate-45">
                  +
                </span>
              </div>

              {/* ANSWER */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                <div className="overflow-hidden">
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
