import { projects } from '@/lib/projects-data';
import { ProjectCard } from './project-card';

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const allProjects = projects;

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more? Check out my GitHub profile for additional projects
            and contributions.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
