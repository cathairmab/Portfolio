export default function Contact() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-gray-400">Got a project or want to say hi? Let’s talk.</p>

        <a
          href="mailto:cathair@example.com"
          className="inline-block text-blue-400 hover:text-blue-500 transition"
        >
          cathairmab@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/cathairmab" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current text-white hover:text-blue-500" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.7 2 .7 2s.4 0 .7-.1c.7-.4 1.3-.8 1.6-1.4.4-.7.5-1.6.5-2.3 0-1.7-.6-2.9-1.8-3.8.2-.5.7-1.2.2-2.5 0 0-.6-.2-2 .7-.6-.2-1.3-.4-2-.4s-1.4.1-2 .4c-1.4-.9-2-.7-2-.7-.5 1.3 0 2 .2 2.5-1.2.9-1.8 2.1-1.8 3.8 0 .8.2 1.6.5 2.3.3.6.9 1 1.6 1.4.3.1.7.1.7.1s.3-1.9.7-2c0 0 .5-1 1.6-1.1 0 0 1.1 0 .1.7 0 0-.7.3-1.2 1.5 0 0-.6 2.2-3.8 1.5v2.1c0 .3.2.7.8.6C20.7 21.4 24 17.1 24 12c0-6.35-5.15-11.5-11.5-11.5z" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/cathair-mac-an-bheatha-4a6953372/" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current text-white hover:text-blue-500" viewBox="0 0 24 24">
              <path d="M19 0h-14C2.239 0 1 1.239 1 2.762V21.24C1 22.762 2.239 24 3.762 24H20.24C21.762 24 23 22.761 23 21.238V2.762C23 1.239 21.761 0 20.238 0H19zM7.125 20.452H3.916V9.04h3.209v11.412zM5.521 7.669a1.857 1.857 0 1 1 .002-3.714 1.857 1.857 0 0 1-.002 3.714zM20.455 20.452h-3.208v-5.598c0-1.337-.024-3.059-1.864-3.059-1.865 0-2.15 1.456-2.15 2.961v5.696h-3.209V9.04h3.08v1.561h.043c.428-.812 1.473-1.667 3.033-1.667 3.243 0 3.84 2.134 3.84 4.908v6.61z"/>
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">&copy; {new Date().getFullYear()} Cathaír Rua</p>
      </div>
    </footer>
  );
}
