import { useState, useEffect } from 'react';
import { useTheme } from '../../context/useTheme';
import { Button } from '../common/Button';
import { DynamicIcon } from '../common/DynamicIcon';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'მთავარი', href: '#hero' },
    { label: 'ჩემ შესახებ', href: '#about' },
    { label: 'უნარები', href: '#skills' },
    { label: 'პროექტები', href: '#projects' },
    { label: 'გამოცდილება', href: '#experience' },
    { label: 'კონტაქტი', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand / Logo */}
        <a href="#hero" className="nav-brand">
          <div className="nav-logo-badge">MS</div>
          <span>
            Mikheil<span className="gradient-text">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle + Contact CTA */}
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'ღია თემაზე გადართვა' : 'მუქ თემაზე გადართვა'}
            aria-label="Toggle Theme"
          >
            <DynamicIcon name={theme === 'dark' ? 'Sun' : 'Moon'} size={20} />
          </button>

          <div className="nav-cta-btn">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={<DynamicIcon name="Send" size={15} />}
            >
              დამიკავშირდით
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <DynamicIcon name={isMobileMenuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mobile-cta-wrapper">
          <Button
            href="#contact"
            variant="primary"
            size="md"
            onClick={handleLinkClick}
            icon={<DynamicIcon name="Send" size={16} />}
            style={{ width: '100%' }}
          >
            დამიკავშირდით
          </Button>
        </div>
      </div>
    </header>
  );
};
