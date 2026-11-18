import { useState, useMemo } from 'react';
import { projectsData, projectCategories } from '../../data/portfolioData';
import { SectionTitle } from '../common/SectionTitle';
import { ProjectCard } from '../common/ProjectCard';
import { SearchBar } from '../common/SearchBar';
import { Button } from '../common/Button';
import { DynamicIcon } from '../common/DynamicIcon';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return projectsData.filter((project) => {
      // Category filter
      if (activeCategory !== 'all' && project.category !== activeCategory) {
        return false;
      }

      // Keyword search
      if (!query) return true;

      const titleMatch = project.title?.toLowerCase().includes(query);
      const descMatch = project.description?.toLowerCase().includes(query);
      const tagsMatch = project.tags?.some((tag) => tag.toLowerCase().includes(query));

      return titleMatch || descMatch || tagsMatch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          badge="ნამუშევრები"
          title="ჩემი ბოლო პროექტები"
          subtitle="გაეცანით რეალურ პროექტებს, სადაც გამოყენებულია კომპონენტური არქიტექტურა, API ინტეგრაციები და თანამედროვე UI/UX."
        />

        {/* Live Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery('')}
          placeholder="მოძებნეთ პროექტი სახელით ან ტექნოლოგიით (მაგ: React, Redux, API)..."
          count={filteredProjects.length}
        />

        {/* Category Filters */}
        <div className="project-filters">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Empty Search Results */}
        {filteredProjects.length === 0 ? (
          <div
            style={{
              maxWidth: '480px',
              margin: '3rem auto',
              textAlign: 'center',
              padding: '2.5rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
              <DynamicIcon name="Search" size={38} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>პროექტი ვერ მოიძებნა</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
              მოცემული საძიებო სიტყვით ან კატეგორიით პროექტი არ არსებობს.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              ფილტრების გასუფთავება
            </Button>
          </div>
        ) : (
          /* Projects Grid with Reusable ProjectCard */
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
