export default function ConsultationForm() {
  return (
    <section id="getfreequote" className="bg-[#0b0b0b] py-24 text-white">
      <div  className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2  className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
            Book a Free Consultation Call
          </h2>
          <p className="text-gray-400 text-sm">
            Get a call back in 30 minutes. Share your requirements or ping on WhatsApp.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://wa.me/918758056573"
            target="_blank"
            className="bg-[#1f2937] border border-white/10 hover:border-blue-500 transition px-6 py-3 rounded-md font-semibold"
          >
            WhatsApp for Quick Quote
          </a>

          <a
            href="tel:+918758056573"
            className="bg-[#1f2937] border border-white/10 hover:border-blue-500 transition px-6 py-3 rounded-md font-semibold"
          >
            Call Now: +91 8758056573
          </a>
        </div>

        {/* FORM CONTAINER */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-10 shadow-lg">

          <form className="grid md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="9XXXXXXXXX"
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Your subject"
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Project Description */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">
                Project Description
              </label>
              <textarea
                rows="5"
                placeholder="Tell us what you need built, timeline, and budget (optional)."
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition px-10 py-3 rounded-full font-semibold"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}
