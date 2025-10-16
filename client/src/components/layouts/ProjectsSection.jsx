import { Github , ArrowRight} from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    image: "",
    tags: ["React", "Node.js"],
    github: "",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "",
    tags: ["Express", "MongoDB"],
    github: "",
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    image: "",
    tags: ["PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/MohamedMatar001/E-commerce",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className=" text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Click on the
          GitHub icon to view the code.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex felx-warp gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
          <div className="text-center mt-12">
            <a href="https://github.com/MohamedMatar001" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
              Check My Github <ArrowRight size={16}/>
            </a>
          </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
