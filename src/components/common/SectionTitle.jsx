import { Badge } from './Badge';

export const SectionTitle = ({
  badge,
  title,
  subtitle,
  center = true,
  className = ''
}) => {
  return (
    <div
      className={`section-header ${center ? 'text-center' : 'text-left'} ${className}`.trim()}
    >
      {badge && (
        <div className="section-badge-wrapper">
          <Badge variant="primary">{badge}</Badge>
        </div>
      )}
      <h2 className="section-title">
        {typeof title === 'string' ? (
          <span>{title}</span>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
