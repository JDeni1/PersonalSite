import { useRef, useState, type MouseEvent } from 'react';
import type { Project } from '../../Types';
import { defaultPillColor, techColors } from './ProjectBoxesData';

interface ProjectBoxProps {
  project: Project;
}

export const ProjectBox = ({ project }: ProjectBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="grid-item-link"
    >
      <div
        className="grid-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {project.video ? (
          <video
            ref={videoRef}
            className="grid-item-media"
            src={project.video}
            poster={project.image}
            muted
            loop
            playsInline
          />
        ) : (
          <img
            className="grid-item-media"
            src={project.image}
            alt={project.title}
          />
        )}
        <p>{project.title}</p>
      </div>

      {isHovered && (
        <div
          className="project-tooltip"
          style={{ left: mousePos.x + 16, top: mousePos.y + 16 }}
        >
          <p className="project-tooltip-description">{project.description}</p>
          <div className="project-tooltip-pills">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="tech-pill"
                style={{ backgroundColor: techColors[tech] || defaultPillColor }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </a>
  );
};