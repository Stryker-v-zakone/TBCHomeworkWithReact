import { Link } from 'react-router-dom';
import { Button, DynamicIcon } from '../components/common';

export const NotFoundPage = () => {
  return (
    <div
      className="section"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '8rem'
      }}
    >
      <div className="container">
        <h1
          style={{
            fontSize: '5rem',
            fontWeight: 800,
            background: 'var(--accent-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            fontFamily: 'var(--font-mono)'
          }}
        >
          404
        </h1>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>გვერდი ვერ მოიძებნა</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto 2rem' }}>
          თქვენ მიერ მოთხოვნილი გვერდი არ არსებობს ან გადატანილია სხვა მისამართზე.
        </p>
        <Link to="/">
          <Button variant="primary" icon={<DynamicIcon name="ChevronRight" size={16} />}>
            მთავარ გვერდზე დაბრუნება
          </Button>
        </Link>
      </div>
    </div>
  );
};
