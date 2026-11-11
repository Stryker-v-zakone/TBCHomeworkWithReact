import { experienceData } from '../../data/portfolioData';
import { SectionTitle } from '../common/SectionTitle';
import { ExperienceCard } from '../common/ExperienceCard';

export const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          badge="კარიერული გზა"
          title="გამოცდილება და განათლება"
          subtitle="ჩემი პროფესიული ზრდის ეტაპები, სასწავლო პროგრამები და პრაქტიკული სამუშაო გამოცდილება."
        />

        <div className="timeline-list">
          {experienceData.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
