import { useEffect, useState } from "react"

/* ================= COUNTDOWN COMPONENT ================= */

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const getEndTime = () => {
      const saved = localStorage.getItem("offerEndTime")
      if (saved) return parseInt(saved)

      const newEnd = Date.now() + 2 * 24 * 60 * 60 * 1000 // 2 days
      localStorage.setItem("offerEndTime", newEnd)
      return newEnd
    }

    const endTime = getEndTime()

    const timer = setInterval(() => {
      const now = Date.now()
      const distance = endTime - now

      if (distance <= 0) {
        const newEnd = Date.now() + 2 * 24 * 60 * 60 * 1000
        localStorage.setItem("offerEndTime", newEnd)
        window.location.reload()
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-3">
      <Box label="Day" value={timeLeft.days} />
      <Box label="Hrs" value={timeLeft.hours} />
      <Box label="Min" value={timeLeft.minutes} />
      <Box label="Sec" value={timeLeft.seconds} />
    </div>
  )
}

function Box({ label, value }) {
  return (
    <div className="bg-[#1a1a1a] border border-cyan-500/30 px-4 py-2 rounded-lg text-center">
      <div className="text-lg font-bold text-cyan-400">{value || 0}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  )
}

/* ================= PRICING DATA ================= */

const plans = [
  {
    badge: "Offer Included",
    title: "Business Website Plan",
    subtitle: "Perfect for small businesses & individuals starting online",
    price: "₹11,999",
    cta: "Call Now",
    highlight: false,
    features: [
      "Up to 5 Pages Professional Website",
      "1 Year Free Domain (.com / .in)",
      "1 Year Free Hosting",
      "Premium Custom Design (Fully Responsive)",
      "Admin Panel Access",
      "Unlimited Images & Videos Upload",
      "Fast SSL Certificate (HTTPS Security)",
      "SEO Friendly & Performance Optimized",
      "100% Mobile Responsive Design",
      "Live Chat Integration",
      "Social Media Integration",
      "Contact Form Integration",
      "Payment Gateway Integration",
      "1 Year Free Technical Support",
      "Annual Renewal ₹3,999",
    ],
  },
  {
    badge: "Most Popular",
    title: "Premium Web Development Package",
    subtitle: "Advanced dynamic websites for growing businesses",
    price: "₹17,999",
    cta: "Call Now",
    highlight: true,
    features: [
      "Up to 10 Pages Premium Dynamic Website",
      "1 Year Free Domain (.com / .in)",
      "1 Year Free Hosting",
      "Premium Custom UI/UX Design",
      "Admin Panel Access",
      "Google Search Console Setup",
      "Unlimited Images & Videos Upload",
      "Fast SSL Certificate (HTTPS Security)",
      "SEO Friendly Website Structure",
      "100% Responsive Design",
      "Live Chat Integration",
      "Payment Gateway Integration",
      "Social Media Integration",
      "WhatsApp Button Integration",
      "Advanced Inquiry Form",
      "WooCommerce Compatible (Optional)",
      "1 Year Free Technical Support",
      "Annual Renewal ₹4,999",
    ],
  },
  {
    badge: "Offer Included",
    title: "Custom Website Plan",
    subtitle: "Fully tailored solution for unique business needs",
    price: "₹???",
    cta: "Call Now",
    highlight: false,
    features: [
      "Custom Pages Based on Requirement",
      "1 Year Free Domain & Hosting",
      "Fully Custom Design & Development",
      "Admin Panel with Full Control",
      "Unlimited Images & Videos",
      "Advanced SEO Setup",
      "Fast SSL Certificate",
      "Live Chat Integration",
      "Payment Gateway Integration",
      "WhatsApp Button Integration",
      "Premium Features (Chat, Checkout)",
      "1 Year Free Technical Support",
      "Annual Renewal Depends on Scope",
    ],
  },
]

/* ================= PRICING COMPONENT ================= */

export default function Pricing() {
  return (
    <section id="ourplans" className="bg-[#0b0b0b] py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Pricing that fits your needs
          </h2>
          <p className="text-gray-400 text-sm">
            Explore our packages and find the perfect solution for your business.
          </p>
        </div>

        {/* OFFER BAR WITH COUNTDOWN */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#111] border border-white/10 rounded-xl px-6 py-4 mb-14">
          <div className="text-sm text-gray-300">
            🎁 <span className="font-semibold text-white">1 Year FREE Domain + Hosting</span>
            <br className="md:hidden" />
            <span className="text-gray-400">Special limited-time offer.</span>
          </div>

          <Countdown />
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#3b216a] to-[#24123f] border-purple-500 scale-105"
                  : "bg-[#111] border-white/10"
              }`}
            >
              <span className="inline-block mb-4 text-xs font-semibold px-3 py-1 rounded-full bg-black/40 border border-white/10">
                {plan.badge}
              </span>

              <h3 className="text-lg font-bold mb-1">{plan.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{plan.subtitle}</p>

              <div className="text-3xl font-bold mb-4">{plan.price}</div>
              <a href="https://api.whatsapp.com/send/?phone=918758056573&text=Hi+Zeel%2C+I+want+a+website+quote.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">

              <button className="w-full mb-6 py-2.5 rounded-md font-semibold bg-blue-600 hover:bg-blue-700 transition">
                {plan.cta}
              </button>
              </a>

              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-2 text-gray-300">
                    <span className="text-blue-500">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}