import { useEffect } from 'react';
import { Badge } from './Badge';
import { Button } from './Button';
import { DynamicIcon } from './DynamicIcon';

export const UserDetailsModal = ({ user, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!user) return null;

  const { name, username, email, phone, website, address, company } = user;

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="დახურვა"
        >
          <DynamicIcon name="X" size={18} />
        </button>

        {/* Profile Header */}
        <div className="modal-profile-header">
          <div
            className="user-avatar"
            style={{
              width: '64px',
              height: '64px',
              fontSize: '1.4rem',
              background: 'var(--accent-gradient)'
            }}
          >
            {initials}
          </div>
          <div>
            <h2 className="user-name" style={{ fontSize: '1.4rem' }}>
              {name}
            </h2>
            <span className="user-username">@{username}</span>
            <div style={{ marginTop: '0.4rem' }}>
              <Badge variant="success" icon={<DynamicIcon name="UserCheck" size={12} />}>
                აქტიური მომხმარებელი
              </Badge>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="modal-grid-info">
          {/* Company Info */}
          <div className="modal-info-block">
            <span className="modal-info-title">
              <DynamicIcon name="Building2" size={14} /> კომპანია & როლი
            </span>
            <div className="modal-info-val">{company?.name || 'ინდივიდუალური'}</div>
            {company?.catchPhrase && (
              <div className="modal-info-sub">"{company.catchPhrase}"</div>
            )}
            {company?.bs && (
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                მიმართულება: {company.bs}
              </div>
            )}
          </div>

          {/* Address Info */}
          <div className="modal-info-block">
            <span className="modal-info-title">
              <DynamicIcon name="MapPin" size={14} /> მისამართი და ლოკაცია
            </span>
            <div className="modal-info-val">
              {address?.city}, {address?.street}
            </div>
            <div className="modal-info-sub">
              {address?.suite} (საფოსტო ინდექსი: {address?.zipcode})
            </div>
            {address?.geo && (
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Geo: {address.geo.lat}, {address.geo.lng}
              </div>
            )}
          </div>

          {/* Contact 1 */}
          <div className="modal-info-block">
            <span className="modal-info-title">
              <DynamicIcon name="Mail" size={14} /> ელ-ფოსტის მისამართი
            </span>
            <a href={`mailto:${email}`} className="modal-info-val" style={{ color: 'var(--accent-primary)' }}>
              {email}
            </a>
          </div>

          {/* Contact 2 */}
          <div className="modal-info-block">
            <span className="modal-info-title">
              <DynamicIcon name="Phone" size={14} /> ტელეფონი & ვებსაიტი
            </span>
            <div className="modal-info-val">{phone}</div>
            {website && (
              <a
                href={`https://${website}`}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}
              >
                {website} <DynamicIcon name="ExternalLink" size={12} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="modal-actions">
          <Button variant="secondary" size="md" onClick={onClose}>
            დახურვა
          </Button>
          <Button
            href={`mailto:${email}`}
            variant="primary"
            size="md"
            icon={<DynamicIcon name="Mail" size={16} />}
          >
            ელ-ფოსტის გაგზავნა
          </Button>
        </div>
      </div>
    </div>
  );
};
