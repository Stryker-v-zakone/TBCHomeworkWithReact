import { Card } from './Card';
import { DynamicIcon } from './DynamicIcon';

export const SkillCard = ({ category }) => {
  const { title, description, iconName, color = 'var(--accent-primary)', skills = [] } = category;

  return (
    <Card className="skill-card" hoverable>
      <div className="skill-card-top">
        <div
          className="skill-icon-box"
          style={{
            backgroundColor: `${color}1a`, // 10% opacity
            color: color,
            border: `1px solid ${color}40`
          }}
        >
          <DynamicIcon name={iconName} size={24} color={color} />
        </div>
        <div>
          <h3 className="skill-card-title">{title}</h3>
          <p className="skill-card-desc">{description}</p>
        </div>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-item-header">
              <span className="skill-name">{skill.name}</span>
              {skill.tag && <span className="skill-tag-pill">{skill.tag}</span>}
            </div>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{
                  width: `${skill.level}%`,
                  background: `linear-gradient(90deg, ${color}, var(--accent-secondary))`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
