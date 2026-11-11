import { Card } from './Card';
import { DynamicIcon } from './DynamicIcon';

export const ContactCard = ({ iconName, label, value, href }) => {
  const CardContent = (
    <>
      <div className="contact-card-icon">
        <DynamicIcon name={iconName} size={22} />
      </div>
      <div className="contact-card-info">
        <span className="contact-card-label">{label}</span>
        <span className="contact-card-value">{value}</span>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
        <Card className="contact-card" hoverable>
          {CardContent}
        </Card>
      </a>
    );
  }

  return (
    <Card className="contact-card" hoverable>
      {CardContent}
    </Card>
  );
};
