import { useActiveSection } from "../hooks/useActiveSection"
import { cn } from "../utils"

const Navbar = () => {
  const activeSection = useActiveSection(["hero", "about", "projects", "contact"])

  return (
    <nav className="fixed top-0 left-0 w-full border-b-4 border-black bg-white z-50 font-mono">
      <div className="flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <div className="text-xl font-bold text-black font-['Rubik_Mono_One']">CAX</div>

        {/* Center Nav */}
        <ul className="flex gap-10 text-base font-semibold text-black">
          <li>
            <a
              href="#about"
              className={cn(
                "transition duration-150 hover:underline underline-offset-4",
                activeSection === "about" && "underline underline-offset-4"
              )}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={cn(
                "transition duration-150 hover:underline underline-offset-4",
                activeSection === "projects" && "underline underline-offset-4"
              )}
            >
              PROJECTS
            </a>
          </li>
        </ul>

        {/* Right: Contact */}
        <div>
          <a
            href="#contact"
            className={cn(
              "text-base font-semibold text-black transition duration-150 hover:underline underline-offset-4",
              activeSection === "contact" && "underline underline-offset-4"
            )}
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
