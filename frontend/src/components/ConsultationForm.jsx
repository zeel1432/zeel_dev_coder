import { useState } from "react";

export default function ConsultationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents page refresh
    setLoading(true);

    const formData = { name, email, phone, subject, message };

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        // Clear form
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      alert("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="getfreequote" className="bg-[#0b0b0b] py-24 text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
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
            rel="noopener noreferrer"
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

        {/* FORM */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-10 shadow-lg">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Phone</label>
              <input
                type="tel"
                required
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                required
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">
                Project Description
              </label>
              <textarea
                rows="5"
                required
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 transition px-10 py-3 rounded-full font-semibold disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}