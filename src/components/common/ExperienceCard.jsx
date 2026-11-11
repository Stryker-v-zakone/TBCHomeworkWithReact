import { Card } from './Card';
import { Badge } from './Badge';
import { DynamicIcon } from './DynamicIcon';

export const ExperienceCard = ({ item }) => {
  const { period, role, organization, location, description, highlights = [], type } = item;

  return (
    <div className="timeline-card">
      <div className="timeline-connector" />
      <div className="timeline-dot" />

      <Card hoverable className="experience-inner-card">
        <div className="experience-card-header">
          <div>
            <h3 className="experience-role">{role}</h3>
            <div className="experience-org">
              <DynamicIcon
                name={type === 'education' ? 'GraduationCap' : 'Briefcase'}
                size={16}
              />
              <span>{organization}</span>
            </div>
          </div>
          <div className="experience-meta">
            <Badge variant="outline">{period}</Badge>
            {location && <Badge variant="neutral">📍 {location}</Badge>}
          </div>
        </div>

        <p className="experience-desc">{description}</p>

        {highlights && highlights.length > 0 && (
          <div className="experience-highlights">
            {highlights.map((point, idx) => (
              <div key={idx} className="highlight-item">
                <span className="highlight-bullet">▸</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};
