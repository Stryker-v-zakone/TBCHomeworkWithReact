import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { DynamicIcon } from './DynamicIcon';

export const ProjectCard = ({ project }) => {
  const { title, description, image, tags = [], featured, demoUrl, githubUrl } = project;

  return (
    <Card className="project-card" hoverable glow>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" loading="lazy" />
        <div className="project-badges-overlay">
          {featured && <Badge variant="accent">⭐ გამორჩეული</Badge>}
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-tags">
          {tags.map((tag, idx) => (
            <Badge key={idx} variant="primary" className="project-tag-item">
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="project-actions">
          {demoUrl && (
            <Button
              href={demoUrl}
              target="_blank"
              variant="primary"
              size="sm"
              icon={<DynamicIcon name="ExternalLink" size={16} />}
            >
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              href={githubUrl}
              target="_blank"
              variant="secondary"
              size="sm"
              icon={<DynamicIcon name="Github" size={16} />}
            >
              GitHub კოდი
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
