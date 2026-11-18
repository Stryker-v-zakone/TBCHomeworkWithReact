import { useState, useEffect, useMemo, useCallback } from 'react';
import { SectionTitle, SearchBar, UserCard, UserDetailsModal, Button, DynamicIcon } from '../components/common';

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`API შეცდომა: სტატუსი ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'მონაცემების ჩატვირთვა ვერ მოხერხდა');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let ignore = false;

    const loadInitialData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`API შეცდომა: სტატუსი ${response.status}`);
        }
        const data = await response.json();
        if (!ignore) {
          setUsers(data);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || 'მონაცემების ჩატვირთვა ვერ მოხერხდა');
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };

    loadInitialData();

    return () => {
      ignore = true;
    };
  }, []);

  // Extract unique cities for city filter pills
  const cities = useMemo(() => {
    const list = users.map((u) => u.address?.city).filter(Boolean);
    return ['all', ...Array.from(new Set(list))];
  }, [users]);

  // Filtered users based on search query and city
  const filteredUsers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return users.filter((user) => {
      // City check
      if (selectedCity !== 'all' && user.address?.city !== selectedCity) {
        return false;
      }

      // If no search query, match all
      if (!query) return true;

      const nameMatch = user.name?.toLowerCase().includes(query);
      const usernameMatch = user.username?.toLowerCase().includes(query);
      const emailMatch = user.email?.toLowerCase().includes(query);
      const companyMatch = user.company?.name?.toLowerCase().includes(query);
      const cityMatch = user.address?.city?.toLowerCase().includes(query);

      return nameMatch || usernameMatch || emailMatch || companyMatch || cityMatch;
    });
  }, [users, searchQuery, selectedCity]);

  return (
    <div className="users-page-container section" style={{ paddingTop: '8rem' }}>
      <div className="container">
        {/* Page Title */}
        <SectionTitle
          badge="JSONPlaceholder API • Resources: /users"
          title="პარტნიორები და მომხმარებელთა ქსელი"
          subtitle="მონაცემები დინამიურად იტვირთება JSONPlaceholder API-დან. გამოიყენეთ ძებნის ფუნქციონალი მომხმარებლის, კომპანიის ან ქალაქის მიხედვით გასაფილტრად."
        />

        {/* Search Bar & Counter */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery('')}
          placeholder="მოძებნეთ სახელით, @მომხმარებლით, კომპანიით ან ქალაქით..."
          count={!isLoading && !error ? filteredUsers.length : undefined}
        />

        {/* City Filter Pills */}
        {!isLoading && !error && cities.length > 2 && (
          <div className="project-filters" style={{ marginBottom: '2.5rem' }}>
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                className={`filter-btn ${selectedCity === city ? 'active' : ''}`}
                onClick={() => setSelectedCity(city)}
              >
                {city === 'all' ? '🏙️ ყველა ქალაქი' : city}
              </button>
            ))}
          </div>
        )}

        {/* Loading State with Shimmer Skeletons */}
        {isLoading && (
          <div className="projects-grid">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="skeleton-card">
                <div className="skeleton-shimmer" />
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="skeleton-circle" />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div className="skeleton-line" style={{ height: '18px', width: '70%' }} />
                    <div className="skeleton-line" style={{ height: '14px', width: '40%' }} />
                  </div>
                </div>
                <div className="skeleton-line" style={{ height: '24px', width: '50%', marginTop: '0.5rem' }} />
                <div className="skeleton-line" style={{ height: '14px', width: '90%', marginTop: 'auto' }} />
                <div className="skeleton-line" style={{ height: '14px', width: '75%' }} />
                <div className="skeleton-line" style={{ height: '36px', width: '100%', marginTop: '0.5rem' }} />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div
            style={{
              maxWidth: '540px',
              margin: '3rem auto',
              textAlign: 'center',
              padding: '2.5rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ color: '#ef4444', marginBottom: '1rem' }}>
              <DynamicIcon name="AlertCircle" size={48} />
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>მონაცემები ვერ ჩაიტვირთა</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              {error}
            </p>
            <Button
              variant="primary"
              onClick={fetchUsers}
              icon={<DynamicIcon name="RefreshCw" size={16} />}
            >
              ხელახლა ცდა
            </Button>
          </div>
        )}

        {/* Empty Search Results State */}
        {!isLoading && !error && filteredUsers.length === 0 && (
          <div
            style={{
              maxWidth: '500px',
              margin: '3rem auto',
              textAlign: 'center',
              padding: '3rem 2rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
              <DynamicIcon name="Search" size={42} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>მომხმარებელი ვერ მოიძებნა</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
              საძიებო პარამეტრებით „{searchQuery}“ შედეგი არ არის.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCity('all');
              }}
            >
              ფილტრის გასუფთავება
            </Button>
          </div>
        )}

        {/* Users Grid */}
        {!isLoading && !error && filteredUsers.length > 0 && (
          <div className="projects-grid">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} onSelect={setSelectedUser} />
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedUser && (
        <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};
