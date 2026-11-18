import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/useTheme';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { DynamicIcon } from '../common/DynamicIcon';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'მთავარი', path: '/', isPage: true },
    { label: 'ჩემ შესახებ', path: '/#about', isAnchor: true },
    { label: 'უნარები', path: '/#skills', isAnchor: true },
    { label: 'პროექტები', path: '/#projects', isAnchor: true },
    { label: 'გამოცდილება', path: '/#experience', isAnchor: true },
    { label: 'მომხმარებლები', path: '/users', isPage: true, badge: 'API' },
    { label: 'კონტაქტი', path: '/#contact', isAnchor: true }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand / Logo */}
        <Link to="/" className="nav-brand" onClick={handleLinkClick}>
          <div className="nav-logo-badge">MS</div>
          <span>
            Mikheil<span className="gradient-text">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links-desktop">
          {navLinks.map((link) => {
            const isUsersActive = link.path === '/users' && location.pathname === '/users';
            const isHomeActive = link.path === '/' && location.pathname === '/' && !location.hash;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isUsersActive || isHomeActive ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <Badge variant={isUsersActive ? 'accent' : 'primary'} style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem' }}>
                    {link.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
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
            <Link to="/#contact">
              <Button
                variant="primary"
                size="sm"
                icon={<DynamicIcon name="Send" size={15} />}
              >
                დამიკავშირდით
              </Button>
            </Link>
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
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${link.path === location.pathname ? 'active' : ''}`}
              onClick={handleLinkClick}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <span>{link.label}</span>
              {link.badge && (
                <Badge variant="primary" style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem' }}>
                  {link.badge}
                </Badge>
              )}
            </Link>
          ))}
        </div>
        <div className="mobile-cta-wrapper">
          <Link to="/#contact" onClick={handleLinkClick}>
            <Button
              variant="primary"
              size="md"
              icon={<DynamicIcon name="Send" size={16} />}
              style={{ width: '100%' }}
            >
              დამიკავშირდით
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
