import '../ProjectBoxes/ProjectBoxes.css';
import { ProjectBox } from '../ProjectBoxes/ProjectBoxes';
import { miniProjects, projects } from '../ProjectBoxes/ProjectBoxesData';

export const Projects = () => {
  return (
    <>
      <h1 className="project-title">Software Projects</h1>
      <div className="grid-container">
        {projects.map((project) => (
          <ProjectBox key={project.id} project={project} />
        ))}
      </div>

      <h1 className="project-title">Mini-Projects | Code Concept Challenges</h1>
      <div className="grid-container">
        {miniProjects.map((miniproject) => (
          <ProjectBox key={miniproject.id} project={miniproject} />
        ))}
      </div>
    </>
  );
};