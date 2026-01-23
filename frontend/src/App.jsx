import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ServicesCards from "./components/ServicesCards"
import ConsultationForm from "./components/ConsultationForm"
import About from "./components/About"
import Pricing from "./components/Pricing"
import WhyChooseMe from "./components/WhyChooseMe"
import FAQ from "./components/FAQ"

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ServicesCards />
      <ConsultationForm />
      <About />
      <Services />
      <Services />
      <Pricing />
      <WhyChooseMe />
      <FAQ />
      <Footer /> 
    </div>
  )
}
