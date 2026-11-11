import { Card } from './Card';
import { Badge } from './Badge';
import { DynamicIcon } from './DynamicIcon';

export const ServiceCard = ({ service }) => {
  const { title, description, iconName, badge } = service;

  return (
    <Card className="service-card" hoverable glow>
      <div className="service-top">
        <div className="service-icon-box">
          <DynamicIcon name={iconName} size={24} />
        </div>
        {badge && <Badge variant="accent">{badge}</Badge>}
      </div>
      <div>
        <h3 className="service-title">{title}</h3>
        <p className="service-desc">{description}</p>
      </div>
    </Card>
  );
};
