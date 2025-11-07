import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react';

const projects = [
  {
    id: 1,
    title: "Agency.ai",
    description: "Responsive digital agency website with modern UI, smooth animations, dark/light theme, and reusable React components. Deployed on Vercel.",
    image: "/Project-2.png",
    tags: ["React.js", "Tailwind CSS", "React Spring", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://agency-ai.vercel.app",
    githubUrl: "https://github.com/sisodiaharsh678-cmd/-Agency.ai",
  },
  {
    id: 2,
    title: "Passop.in",
    description: "Secure password manager web app with JWT authentication, RESTful APIs, CRUD operations, and responsive UI. Deployed on Vercel.",
    image: "Project-1.png.png",
    tags: ["React.js", "Express.js", "MongoDB", "RESTful APIs", "JWT Authentication"],
    demoUrl: "https://passop-in.vercel.app",
    githubUrl: "https://github.com/sisodiaharsh678-cmd/Passop.in",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects, skills, and experience. Built with React.js and Tailwind CSS with smooth scrolling and responsive design.",
    image: "Project.3.png",
    tags: ["React.js", "Tailwind CSS", "Vercel", "GitHub", "Responsive Design"],
    demoUrl: "https://your-portfolio.vercel.app",
    githubUrl: "https://github.com/sisodiaharsh678-cmd/Portfolio",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"></span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Click on the project titles to view the live demos or check out the code on GitHub.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
         <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href='https://github.com/sisodiaharsh678-cmd' target='_blank' rel='noreferrer'>
            Check My Github <ArrowRight size={16} />
         </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
