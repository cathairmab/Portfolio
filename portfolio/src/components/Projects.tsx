import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Campus Induction App",
    description:
      "Gamified mobile app that guides students around campus with AR challenges and location-based tasks.",
    tech: ["SwiftUI", "MapKit", "ARKit", "Supabase"],
    link: "https://github.com/cathairmab/Campus-Induction-App",
  },
  {
    title: "Chronocrypt",
    description:
      "Experimental dungeon game where time manipulation is the main mechanic, affecting gameplay and scoring.",
    tech: ["Unity", "C#", "Custom Time System", "Puzzle Design"],
    link: "https://nusnus.itch.io/chrono-crypt",
  },
  {
    title: "This Webpage!",
    description: "This is a test project to see how the carousel handles overflow.",
    tech: ["React", "TypeScript", "Vite", "Vercel", "Tailwind"],
    link: "#",
  },
    {
    title: "Sheep Herding Game",
    description:
      "3D first-person game where you control a dog to herd sheep into a pen while avoiding a ragdoll-triggering fox.",
    tech: ["Unity", "C#", "Custom Flocking AI", "Ragdoll Physics"],
    link: "null",
  },
    {
    title: "Synergazia",
    description:
      "A 3rd year group project full stack web application with file sharing, messaging and video calling.",
    tech: ["React", "Next.js", "Microsoft Azure", "MySQL"],
    link: "null",
    }
];

const getRotationClass = (index: number) => {
  switch (index % 3) {
    case 0:
      return "-rotate-2";
    case 1:
      return "rotate-3";
    case 2:
      return "-rotate-1";
    default:
      return "";
  }
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-yellow-200 text-black font-mono relative"
    >
      <div className="h-38 -mt-28" aria-hidden="true" />

      <div className="px-6 sm:px-20 max-w-7xl mx-auto">
        {/* Title */}
        <div className="inline-block border-[7px] bg-yellow-300 border-black px-4 py-2 mb-12 -rotate-6">
          <h2 className="text-4xl font-['Rubik_Mono_One'] tracking-wider">
            Other Projects
          </h2>
        </div>

        <Carousel
          opts={{ align: "start" }}
          className="w-full overflow-visible px-1"
        >
          <CarouselContent className="px-2 py-10 sm:py-16">
            {projects.map((project, i) => (
              <CarouselItem
                key={project.title}
                className="basis-full sm:basis-1/2 lg:basis-1/3 px-4"
              >
                <div
                  className={`h-full transform ${getRotationClass(
                    i
                  )} hover:rotate-0 transition-transform duration-300`}
                >
                  <div className="bg-white border-4 border-black p-6 rounded-lg h-full flex flex-col justify-between">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-extrabold mb-3">{project.title}</h3>
                      <p className="text-black mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-yellow-300 text-black border-black border text-xs px-2 py-1 rounded-full font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white bg-black rounded hover:bg-gray-800 transition"
                        >
                          View Code
                        </a>
                      ) : (
                        <span className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-black bg-yellow-200 border border-black rounded cursor-default">
                          Code available upon request
                        </span>
                      )}
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-10 text-yellow-300 bg-black hover:bg-yellow-400 hover:text-black" />
          <CarouselNext className="-right-10 text-yellow-300 bg-black hover:bg-yellow-400 hover:text-black" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
