import { useInView } from 'react-intersection-observer';
import { ProjectCardComponentProps } from './types';

const ProjectCard = ({ project }: ProjectCardComponentProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`project-card ${inView ? 'visible' : ''}`}
    >
      <div className="project-image">
        <div className="project-icon">
          {/* <i className={project.icon}></i> */}
        </div>
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.githubUrl} className="repo-link" target="_blank" rel="noopener noreferrer">
            Repository
          </a>
          {project.url && (
            <a href={project.url} className="demo-link" target="_blank" rel="noopener noreferrer">
              Access here
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;