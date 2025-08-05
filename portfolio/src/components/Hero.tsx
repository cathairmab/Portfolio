import { cn } from "../utils";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
  return (
    <section id="hero">
    <div className="relative flex h-[50rem] w-full flex-col items-center justify-center bg-yellow-300 dark:bg-black text-center px-4">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
        )}
      />


      {/* Radial mask overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-yellow-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Animated title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 text-sketchy tracking-wider bg-neutral-800 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"
      >
        Cathaír Rua Mac an Bheatha
      </motion.p>

      {/* Static subtitle */}
      {/*<p className="relative z-20 text-sm font-medium text-neutral-600 dark:text-neutral-400 sm:text-lg">*/}
      <p className="relative z-20 text-sm font-mono text-neutral-700 dark:text-neutral-400 sm:text-lg">
      
      <Typewriter
        words={['Full Stack Web Developer', 'Swift Developer', 'Software Engineer']}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
      </p>
      
      <div className="relative z-20 mt-6 flex flex-wrap gap-4 justify-center">
      <a href="#projects">
        <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm font-mono hover:shadow-[4px_4px_0px_0px_black] transition duration-200">
          View Projects
        </button>
      </a>
      <a href="../../public/CathairMacAnBheathaCV.pdf" download>
        <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm font-mono hover:shadow-[4px_4px_0px_0px_black] transition duration-200">
          Download CV
        </button>
      </a>


      </div>
      
    </div>
  </section>
  );
};

export default Hero;
