import ProjectCard from './ProjectCard.tsx';
import { ProjectsComponentProps } from './types.ts';

const Projects = ({ repositories }: ProjectsComponentProps) => {

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {repositories.repositories.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;