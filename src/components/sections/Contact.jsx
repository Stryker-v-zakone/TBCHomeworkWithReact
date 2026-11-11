import { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { SectionTitle } from '../common/SectionTitle';
import { ContactCard } from '../common/ContactCard';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { DynamicIcon } from '../common/DynamicIcon';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success status after 5s
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          badge="კონტაქტი"
          title="დავიწყოთ ახალი პროექტი ერთად"
          subtitle="გაქვთ საინტერესო იდეა, გჭირდებათ React დეველოპერი თუ გსურთ კონსულტაცია? მომწერეთ და სიამოვნებით გიპასუხებთ."
        />

        <div className="contact-grid">
          {/* Contact Channels with Reusable ContactCard */}
          <div className="contact-cards-col">
            <ContactCard
              iconName="Mail"
              label="ელ. ფოსტა"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <ContactCard
              iconName="Phone"
              label="ტელეფონი"
              value={personalInfo.phone}
              href={`tel:${personalInfo.phone}`}
            />
            <ContactCard
              iconName="MapPin"
              label="ლოკაცია"
              value={personalInfo.location}
            />
            <ContactCard
              iconName="Linkedin"
              label="LinkedIn"
              value="linkedin.com/in/mikheil-sagradian"
              href={personalInfo.linkedin}
            />
          </div>

          {/* Contact Form */}
          <Card className="contact-form-card" hoverable={false}>
            {submitted && (
              <div className="form-alert form-alert-success">
                <DynamicIcon name="CheckCircle2" size={20} />
                <span>მადლობა! თქვენი შეტყობინება წარმატებით გაიგზავნა.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  თქვენი სახელი *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="მაგ: მიხეილ"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  ელ-ფოსტის მისამართი *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  თემა / პროექტის ტიპი
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="მაგ: ვებ აპლიკაციის დამზადება"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  შეტყობინება *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="აღწერეთ მოკლედ თქვენი მოთხოვნა..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                icon={<DynamicIcon name="Send" size={16} />}
                style={{ width: '100%' }}
              >
                {isSubmitting ? 'იგზავნება...' : 'შეტყობინების გაგზავნა'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
