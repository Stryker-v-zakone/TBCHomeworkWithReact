import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/portfolioData';
import { DynamicIcon } from '../common/DynamicIcon';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Brand & bio */}
          <div>
            <div className="footer-brand-title">
              <div className="nav-logo-badge">MS</div>
              <span>
                {personalInfo.name} <span className="gradient-text">.dev</span>
              </span>
            </div>
            <p className="footer-bio">
              React & Front-End დეველოპერი. ვქმნი თანამედროვე, სწრაფ და მომხმარებელზე ორიენტირებულ ციფრულ პროდუქტებს.
            </p>
            <div className="footer-social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <DynamicIcon name="Github" size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <DynamicIcon name="Linkedin" size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-btn"
                aria-label="Email"
              >
                <DynamicIcon name="Mail" size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="footer-column-title">ნავიგაცია</h4>
            <div className="footer-links-list">
              <Link to="/">მთავარი</Link>
              <Link to="/#about">ჩემ შესახებ</Link>
              <Link to="/#skills">ტექნოლოგიური სტეკი</Link>
              <Link to="/#projects">პროექტები</Link>
              <Link to="/#experience">გამოცდილება</Link>
              <Link to="/users">მომხმარებლები (API)</Link>
            </div>
          </div>

          {/* Col 3: Contact quick links */}
          <div>
            <h4 className="footer-column-title">კონტაქტი</h4>
            <div className="footer-links-list">
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              <Link to="/#contact">{personalInfo.location}</Link>
              <Link to="/#contact">შეტყობინების გაგზავნა</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {CURRENT_YEAR} {personalInfo.name}. დამზადებულია React-ით & CSS-ით.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
          >
            <span>ზევით დაბრუნება</span>
            <DynamicIcon name="ChevronRight" size={16} style={{ transform: 'rotate(-90deg)' }} />
          </button>
        </div>
      </div>
    </footer>
  );
};
