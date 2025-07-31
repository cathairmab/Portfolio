import { useEffect, useState } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);

      const sections = ['about', 'projects', 'contact'];

      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500 ${
        show
          ? 'bg-neutral-900 text-white shadow translate-y-0'
          : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Cathaír Rua</h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className={`hover:text-blue-500 ${
                activeSection === 'about' ? 'text-blue-500 font-semibold' : ''
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`hover:text-blue-500 ${
                activeSection === 'projects' ? 'text-blue-500 font-semibold' : ''
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`hover:text-blue-500 ${
                activeSection === 'contact' ? 'text-blue-500 font-semibold' : ''
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}