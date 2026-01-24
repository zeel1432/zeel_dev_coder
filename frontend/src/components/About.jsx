export default function About() {
  return (
    <section  className="bg-[#0b0b0b] py-24 text-white">
      <div id="aboutus" className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p  className="text-blue-500 font-semibold mb-3">
            About Me!
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Hi, I’m Zeel — No. 1 Website Developer in India.
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            I specialize in building scalable, secure, and user-friendly web
            applications using modern technologies. With a strong foundation
            in both frontend and backend development, I create solutions that
            are not only visually engaging but also performance-driven.
          </p>

          <p className="text-gray-300 mb-8 leading-relaxed">
            From responsive UI design with React to robust server-side
            applications, I love tackling challenges and turning ideas into
            reality. My mission is to deliver projects that provide long-term
            value and help businesses grow in the digital world.
          </p>

          {/* READ MORE BUTTON */}
          <button className="flex items-center justify-between w-full md:w-[280px] border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition px-5 py-3 rounded-md">
            <span className="font-semibold">Read More</span>
            <span className="text-xl font-bold">+</span>
          </button>
        </div>

        {/* RIGHT IMAGE (PLACEHOLDER) */}
        <div className="flex justify-center md:justify-end">
          <div className="flex items-center justify-center text-gray-500">
            <img
            src="/src/assets/images/zeelabout.png"
            alt="Zeel Gajjar"
            className="rounded-xl object-cover grayscale"
          />
          </div>
        </div>

      </div>
    </section>
  )
}
