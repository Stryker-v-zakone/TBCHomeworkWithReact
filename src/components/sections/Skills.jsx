import { skillsCategories } from '../../data/portfolioData';
import { SectionTitle } from '../common/SectionTitle';
import { SkillCard } from '../common/SkillCard';

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          badge="ტექნოლოგიური სტეკი"
          title="ჩემი უნარები და ინსტრუმენტები"
          subtitle="ტექნოლოგიები და ხელსაწყოები, რომლებსაც ყოველდღიურად ვიყენებ ხარისხიანი პროდუქტების შესაქმნელად."
        />

        <div className="skills-grid">
          {skillsCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
