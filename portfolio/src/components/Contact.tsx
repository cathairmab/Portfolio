import { Mail, Github, Linkedin } from "lucide-react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white text-black font-mono py-20 px-6 sm:px-20 scroll-mt-28"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <div className="inline-block border-7 bg-yellow-300 border-black px-4 py-2 mb-12 -rotate-6">
          <h2 className="text-4xl font-['Rubik_Mono_One'] tracking-wider">Contact Me</h2>
        </div>

        <p className="mb-12 text-lg font-medium">
          Let’s connect — choose a platform below.
        </p>

        {/* Contact Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/cathair-mac-an-bheatha-4a6953372/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black bg-yellow-100 hover:bg-yellow-300 transition-colors rounded-xl p-6 shadow-[6px_6px_0px_0px_black] flex flex-col gap-2 items-start"
          >
            <Linkedin size={24} />
            <span className="font-bold text-lg">LinkedIn</span>
            <span className="text-sm">Connect with me professionally</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/cathairmab"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black bg-yellow-100 hover:bg-yellow-300 transition-colors rounded-xl p-6 shadow-[6px_6px_0px_0px_black] flex flex-col gap-2 items-start"
          >
            <Github size={24} />
            <span className="font-bold text-lg">GitHub</span>
            <span className="text-sm">Explore my code and projects</span>
          </a>

          {/* Email */}
          <a
            href="mailto:cathairmab@gmail.com"
            className="border-2 border-black bg-yellow-100 hover:bg-yellow-300 transition-colors rounded-xl p-6 shadow-[6px_6px_0px_0px_black] flex flex-col gap-2 items-start"
          >
            <Mail size={24} />
            <span className="font-bold text-lg">Email</span>
            <span className="text-sm">Send me a direct message</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
