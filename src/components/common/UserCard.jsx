import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { DynamicIcon } from './DynamicIcon';

export const UserCard = ({ user, onSelect }) => {
  const { name, username, email, phone, website, address, company } = user;

  // Generate initials for avatar (e.g. "Leanne Graham" -> "LG")
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  // Consistent pleasant gradient hue based on user id
  const hues = [
    'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)'
  ];
  const avatarGradient = hues[(user.id - 1) % hues.length];

  return (
    <Card className="user-card" hoverable glow>
      {/* Top Header: Avatar + Name + Username */}
      <div className="user-card-header">
        <div className="user-avatar" style={{ background: avatarGradient }}>
          {initials}
        </div>
        <div className="user-header-info">
          <h3 className="user-name">{name}</h3>
          <span className="user-username">@{username}</span>
        </div>
      </div>

      {/* Badges: Company & City */}
      <div className="user-badges-row">
        {company?.name && (
          <Badge variant="primary" icon={<DynamicIcon name="Building2" size={12} />}>
            {company.name}
          </Badge>
        )}
        {address?.city && (
          <Badge variant="neutral" icon={<DynamicIcon name="MapPin" size={12} />}>
            {address.city}
          </Badge>
        )}
      </div>

      {/* Contact Details List */}
      <div className="user-details-list">
        <a href={`mailto:${email}`} className="user-detail-row" title="ელ-ფოსტის გაგზავნა">
          <span className="user-detail-icon">
            <DynamicIcon name="Mail" size={15} />
          </span>
          <span className="user-detail-text">{email}</span>
        </a>

        <a href={`tel:${phone}`} className="user-detail-row" title="დარეკვა">
          <span className="user-detail-icon">
            <DynamicIcon name="Phone" size={15} />
          </span>
          <span className="user-detail-text">{phone}</span>
        </a>

        {website && (
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="user-detail-row user-website-link"
            title="ვებ-საიტის მონახულება"
          >
            <span className="user-detail-icon">
              <DynamicIcon name="Globe" size={15} />
            </span>
            <span className="user-detail-text">{website}</span>
            <DynamicIcon name="ExternalLink" size={12} className="external-hint" />
          </a>
        )}
      </div>

      {/* Card Action */}
      <div className="user-card-footer">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onSelect && onSelect(user)}
          icon={<DynamicIcon name="Info" size={15} />}
          style={{ width: '100%' }}
        >
          სრული დეტალები
        </Button>
      </div>
    </Card>
  );
};
