import Threads from '../blocks/Backgrounds/Threads/Threads.jsx';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolledRef.current) {
        hasScrolledRef.current = true;

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {window.removeEventListener('scroll', handleScroll);};
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Threads background and foreground content go here */}
      {/* Threads background full-screen */}
      <div className="absolute inset-0 z-0">
        <Threads
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm Cathaír Rua<br /> Mac an Bheatha
        </h1>
        <p className="text-xl md:text-2xl">
          App Developer &nbsp;|&nbsp; UX Designer &nbsp;|&nbsp; Dreamer
        </p>
      </div>
    </section>
  );
}