// src/components/About.jsx
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiSwift,
  SiUnity,
  //SiTouchdesigner,
  SiFigma,
  SiGithub,
} from 'react-icons/si';

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#242424] text-white px-6 py-20 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: About Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4 leading-relaxed">
            I’m Cathair Rua Mac an Bheatha — a creative developer with a passion
            for clean design, smooth user experiences, and bringing ideas to life.
            I build apps, craft digital experiences, and love solving problems with
            code. Whether it's a mobile prototype or a pixel-perfect interface,
            I care about both beauty and function.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of code, I’m always learning — experimenting with visuals,
            exploring new tools, or thinking about how technology shapes the way
            we connect and create.
          </p>
        </div>

        {/* Right: Tech Icons */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Tools I Use</h3>
          <div className="grid grid-cols-4 gap-6 text-4xl">
            <IconTile icon={SiJavascript} label="JavaScript" />
            <IconTile icon={SiReact} label="React" />
            <IconTile icon={SiTailwindcss} label="Tailwind" />
            <IconTile icon={SiSwift} label="Swift" />
            <IconTile icon={SiUnity} label="Unity" />
            
            <IconTile icon={SiFigma} label="Figma" />
            <IconTile icon={SiGithub} label="GitHub" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Icon tile component
function IconTile({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center group">
      <Icon className="transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-400" />
      <span className="text-sm mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </div>
  );
}
