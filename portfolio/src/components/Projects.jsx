export default function Projects() {
  const projectList = [
    {
      title: "Campus Induction App",
      description:
        "A gamified SwiftUI app using CoreLocation, ARKit, and MapKit to guide students around campus.",
      tech: ["SwiftUI", "ARKit", "MapKit"],
      link: "#",
    },
    {
      title: "Sheep Herding Game",
      description:
        "3D Unity game where you control a dog to herd sheep using flocking and ragdoll physics.",
      tech: ["Unity", "C#", "Physics"],
      link: "#",
    },
    {
      title: "TouchDesigner Motion Grid",
      description:
        "An interactive visual using silhouette detection and point displacement via webcam.",
      tech: ["TouchDesigner", "Webcam", "Shaders"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#242424] text-white px-6 py-20 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#1e1e1e] rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-[#333] text-sm px-2 py-1 rounded-full text-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
