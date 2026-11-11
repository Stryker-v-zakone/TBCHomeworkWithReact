import { statsData, servicesData } from '../../data/portfolioData';
import { SectionTitle } from '../common/SectionTitle';
import { StatCard } from '../common/StatCard';
import { ServiceCard } from '../common/ServiceCard';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          badge="ჩემ შესახებ"
          title="მოტივაცია, გამოცდილება და მიდგომები"
          subtitle="პროგრამირება ჩემთვის არა უბრალოდ კოდის წერა, არამედ რეალური პრობლემების გადაჭრისა და მოხერხებული ციფრული გამოცდილების შექმნის ხელოვნებაა."
        />

        {/* Story & Stats Grid */}
        <div className="about-grid">
          <div className="about-story">
            <p>
              გამარჯობა! მე ვარ <strong>მიხეილ</strong>, Front-End დეველოპერი, რომელიც სპეციალიზდება
              თანამედროვე <strong>React</strong> ეკოსისტემაზე. ჩემი მთავარი ფოკუსია სუფთა,
              მოდულარული და მრავალჯერ გამოყენებადი (reusable) კომპონენტების შექმნა, რომლებიც
              აპლიკაციას ხდის მარტივად მასშტაბირებადს და ადვილად შესანახს.
            </p>
            <p>
              დიდ ყურადღებას ვუთმობ UI/UX დეტალებს, პერფორმანსს, რესპონსიულობასა და კოდის
              საუკეთესო პრაქტიკებს (SOLID, DRY პრინციპები). მუდმივად ვეცნობი ინდუსტრიის სიახლეებს
              და ვცდილობ თითოეულ პროექტში შევიტანო მაქსიმალური ხარისხი.
            </p>
          </div>

          {/* Reusable Stat Cards */}
          <div className="about-stats-grid">
            {statsData.map((stat) => (
              <StatCard
                key={stat.id}
                number={stat.number}
                label={stat.label}
                sublabel={stat.sublabel}
                iconName={stat.iconName}
              />
            ))}
          </div>
        </div>

        {/* What I Do / Services Section */}
        <div className="services-section">
          <SectionTitle
            badge="სერვისები & უპირატესობები"
            title="რას ვქმნი და რაში შემიძლია დაგეხმაროთ"
            subtitle="სრული Front-End ციკლი იდეიდან და Figma დიზაინიდან მზა, სრულფასოვან პროდუქტამდე."
          />

          <div className="services-grid">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
