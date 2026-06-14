import '../ProjectBoxes/ProjectBoxes.css';
import { ProjectBox } from '../ProjectBoxes/ProjectBoxes';
import { projects } from '../ProjectBoxes/ProjectBoxesData';

export const Projects = () => {
  return (
    <>
      <h1>Software Projects</h1>
      <div className="grid-container">
        {projects.map((project) => (
          <ProjectBox key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};