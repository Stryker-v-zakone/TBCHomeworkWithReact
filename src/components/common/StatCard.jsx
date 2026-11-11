import { Card } from './Card';
import { DynamicIcon } from './DynamicIcon';

export const StatCard = ({ number, label, sublabel, iconName }) => {
  return (
    <Card className="stat-card" hoverable glow>
      {iconName && (
        <div className="stat-icon-wrapper">
          <DynamicIcon name={iconName} size={26} />
        </div>
      )}
      <div>
        <div className="stat-number">{number}</div>
        <div className="stat-label">{label}</div>
        {sublabel && <div className="stat-sublabel">{sublabel}</div>}
      </div>
    </Card>
  );
};
