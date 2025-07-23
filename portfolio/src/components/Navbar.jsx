// src/components/Navbar.jsx
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show navbar after user scrolls 100px (or tweak as needed)
      setShow(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500 ${
        show
          ? 'bg-[#242424] text-white shadow translate-y-0'
          : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Cathair Rua</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
