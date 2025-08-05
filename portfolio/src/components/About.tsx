import { useState } from "react"
import { Palette, Database } from "lucide-react";

const FlipCard = ({ frontText, backItems }: { frontText: React.ReactNode; backItems: string[] }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="w-full max-w-xs sm:max-w-sm perspective mx-auto"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="relative w-full min-h-[6rem] overflow-visible">
        <div
          className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden border-2 border-black shadow-[4px_4px_0px_0px_black] bg-yellow-300 flex flex-col items-start justify-center rounded-xl p-4">
            <h3 className="text-xl font-['Rubik_Mono_One'] tracking-wider text-black mb-2">
              {frontText}
            </h3>
            <p className="text-s text-black font-mono">Hover to see skills -&gt;</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 border-2 border-yellow-200 shadow-[4px_4px_0px_0px_theme(colors.yellow.300)] bg-black p-4 rounded-xl flex flex-wrap gap-2 items-start content-start justify-start">
            {backItems.map((item, index) => (
              <span
                key={index}
                className="border-2 border-yellow-300 bg-black text-yellow-300 text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section id="about" className="py-20 bg-yellow-50 text-black font-mono">
    <div className="h-38 -mt-28" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <div className="inline-block border-7 bg-yellow-500 border-black px-4 py-2 mb-12 mx-auto max-w-xs sm:max-w-sm md:max-w-none -rotate-3 text-center">
          <h2 className="text-4xl font-['Rubik_Mono_One'] tracking-wider">About Me</h2>
        </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text Box */}
        <div className="border-4 border-black rounded-xl p-6 shadow-[6px_6px_0px_0px_black] bg-white max-w-prose w-full mx-auto text-left">
          <p className="mb-4 text-base leading-relaxed">
            I'm Cathaír Rua Mac an Bheatha — a full stack developer with a passion for crafting
            responsive, interactive, and accessible web experiences.
          </p>
          <p className="mb-4 text-base leading-relaxed">
            I build projects using modern tools like React, TypeScript, Tailwind CSS, and Swift.
            Whether it's front-end polish or back-end logic, I enjoy making ideas come to life.
          </p>
          <p className="text-base leading-relaxed">
            Currently exploring creative tech, AR interfaces, and gamified experiences for digital storytelling.
          </p>
        </div>

        {/* Flip Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
          <FlipCard 
            frontText={
              <span className="flex items-center gap-2">
                <Palette size={18} /> Frontend
              </span>
            }
            backItems={["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"]}
          />
          <FlipCard
            frontText={
              <span className="flex items-center gap-2">
                <Database size={18} /> Backend
              </span>
            }
            backItems={["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"]}
          />
          <FlipCard frontText=">_Tools" backItems={["Git", "Docker", "AWS", "Vercel", "Figma"]} />
        </div>
        </div>
      </div>
    </section>
  )
}

export default About
