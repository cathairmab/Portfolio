const Footer = () => {
  return (
    <footer className="bg-black text-yellow-300 font-mono px-6 sm:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cathaír Rua Mac an Bheatha. All rights reserved.</p>

        <div className="flex gap-4 text-sm">
          <a
            href="#"
            className="hover:underline hover:text-yellow-400 transition"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:underline hover:text-yellow-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:underline hover:text-yellow-400 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
