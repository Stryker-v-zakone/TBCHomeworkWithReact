import { personalInfo } from '../../data/portfolioData';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { DynamicIcon } from '../common/DynamicIcon';

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Text & CTA */}
          <div className="hero-content-col">
            <div className="hero-badge-wrap">
              <Badge variant="success" icon={<span className="status-indicator-dot" />}>
                {personalInfo.status}
              </Badge>
            </div>

            <h1 className="hero-title">
              <span className="hero-greeting">გამარჯობა, მე ვარ</span>
              <span className="gradient-text">{personalInfo.name}</span>
              <br />
              {personalInfo.role}
            </h1>

            <p className="hero-description">{personalInfo.bio}</p>

            <div className="hero-cta-group">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<DynamicIcon name="ArrowUpRight" size={18} />}
              >
                ჩემი პროექტები
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<DynamicIcon name="Mail" size={18} />}
              >
                დამიკავშირდით
              </Button>
            </div>

            <div className="hero-social-row">
              <span className="hero-social-label">სოციალური ქსელები:</span>
              <div className="hero-social-icons">
                <Button
                  href={personalInfo.github}
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  aria-label="GitHub"
                >
                  <DynamicIcon name="Github" size={20} />
                </Button>
                <Button
                  href={personalInfo.linkedin}
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  aria-label="LinkedIn"
                >
                  <DynamicIcon name="Linkedin" size={20} />
                </Button>
                <Button
                  href={`mailto:${personalInfo.email}`}
                  variant="ghost"
                  size="sm"
                  aria-label="Email"
                >
                  <DynamicIcon name="Mail" size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Visual Avatar Profile Card */}
          <div className="hero-visual-wrapper">
            <div className="hero-card-glow" />
            <div className="hero-profile-card">
              <div className="hero-avatar-box">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                  alt={personalInfo.name}
                  className="hero-avatar-img"
                />
              </div>

              <h2 className="hero-card-name">{personalInfo.englishName}</h2>
              <p className="hero-card-subtitle">&lt;React Developer /&gt;</p>

              <div className="hero-tech-pills">
                <Badge variant="primary">⚛️ React</Badge>
                <Badge variant="primary">⚡ Vite</Badge>
                <Badge variant="primary">TypeScript</Badge>
                <Badge variant="primary">Tailwind</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
