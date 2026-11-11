import { useState } from 'react';
import { projectsData, projectCategories } from '../../data/portfolioData';
import { SectionTitle } from '../common/SectionTitle';
import { ProjectCard } from '../common/ProjectCard';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          badge="ნამუშევრები"
          title="ჩემი ბოლო პროექტები"
          subtitle="გაეცანით რეალურ პროექტებს, სადაც გამოყენებულია კომპონენტური არქიტექტურა, API ინტეგრაციები და თანამედროვე UI/UX."
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

        {/* Projects Grid with Reusable ProjectCard */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
