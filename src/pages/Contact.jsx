
import {
  Phone,
  MessageSquare,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Code2,
  Search,
  Megaphone,
  Share2,
  Headset,
  Database,
  Users,
  TrendingUp,
  BriefcaseBusiness,
  Target,
  Star,
  CheckCircle2,
  Clock3,
  Globe,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "./Contact.css";

const contacts = [
  {
    id: 1,
    name: "Kaleem Ullah",
    role: "Founder & Digital Growth Lead",
    phone: "03325846725",
    whatsapp: "923325846725",
    email: "kaleemullahktk399@gmail.com",
    initials: "KU",
    department: "Development & Digital Marketing",
    description:
      "Leading NEXORA's digital strategy, website development and online growth solutions.",
    expertise: [
      { label: "Full-Stack Web Development", icon: Code2 },
      { label: "SEO, AEO & GEO", icon: Search },
      { label: "Google & Meta Ads", icon: Megaphone },
      { label: "Social Media Management", icon: Share2 },
    ],
  },
  {
    id: 2,
    name: "M. Waqas",
    role: "Customer Support & CRM Manager",
    phone: "03494027531",
    whatsapp: "923494027531",
    email: "mw5509008@gmail.com",
    initials: "MW",
    department: "Customer Experience & CRM",
    description:
      "Managing customer relationships, support operations and organized client communication.",
    expertise: [
      { label: "Customer Support Management", icon: Headset },
      { label: "CRM Management", icon: Database },
      { label: "Client Communication", icon: MessageCircle },
      { label: "Customer Relationship Management", icon: Users },
    ],
  },
  {
    id: 3,
    name: "Abdullah",
    role: "Business Operations & Growth Manager",
    phone: "03480908638",
    whatsapp: "923480908638",
    email: "m.adullahktk1996@gmail.com",
    initials: "A",
    department: "Business Management & Operations",
    description:
      "Supporting business operations, sales processes, lead generation and growth-focused activities.",
    expertise: [
      { label: "Sales Management", icon: TrendingUp },
      { label: "Lead Generation", icon: Target },
      { label: "Business Operations", icon: BriefcaseBusiness },
      { label: "Business Growth & Reputation", icon: Star },
    ],
  },
];

const communicationChannels = [
  {
    icon: Phone,
    title: "Phone Call",
    description: "Speak directly with the relevant team member.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Send your inquiry and discuss your requirements.",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Share project details and business requirements.",
  },
];

function ContactCard({ person }) {
  const phoneLink = `+92${person.phone.slice(1)}`;

  return (
    <article className="contact-card">
      <div className="contact-card-top">
        <div className="contact-avatar">
          {person.initials}
        </div>

        <span className="contact-status">
          <span className="status-dot"></span>
          NEXORA TEAM
        </span>
      </div>

      <div className="contact-person-info">
        <span className="contact-department">
          {person.department}
        </span>

        <h3>{person.name}</h3>

        <span className="contact-role">
          {person.role}
        </span>

        <p>{person.description}</p>
      </div>

      <div className="contact-phone">
        <Phone size={17} />
        <span>{person.phone}</span>
      </div>

      <div className="contact-expertise">
        <h4>Areas of Expertise</h4>

        <div className="expertise-list">
          {person.expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div className="expertise-item" key={item.label}>
                <Icon size={15} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="contact-actions">
        <a
          href={`tel:${phoneLink}`}
          className="contact-action call-action"
          aria-label={`Call ${person.name}`}
        >
          <Phone size={16} />
          Call
        </a>

        <a
          href={`sms:${phoneLink}`}
          className="contact-action sms-action"
          aria-label={`Send SMS to ${person.name}`}
        >
          <MessageSquare size={16} />
          SMS
        </a>

        <a
          href={`https://wa.me/${person.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-action whatsapp-action"
          aria-label={`WhatsApp ${person.name}`}
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>

        <a
          href={`mailto:${person.email}`}
          className="contact-action email-action"
          aria-label={`Email ${person.name}`}
        >
          <Mail size={16} />
          Email
        </a>
      </div>
    </article>
  );
}

function Contact() {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact NEXORA | Digital & Business Solutions</title>

        <meta
          name="description"
          content="Contact NEXORA for full-stack web development, SEO, digital marketing, customer support, CRM management and complete business solutions."
        />

        <meta
          name="keywords"
          content="Contact NEXORA, web development, SEO services, Google Ads, Meta Ads, CRM management, customer support, business solutions"
        />

        <meta
          property="og:title"
          content="Contact NEXORA | Let's Grow Your Business"
        />

        <meta
          property="og:description"
          content="Connect with the NEXORA team for digital development, marketing and complete business solutions."
        />
      </Helmet>

      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <span className="contact-tag">
            CONTACT NEXORA
          </span>

          <h1>
            Let's Start Something
            <span> Great Together.</span>
          </h1>

          <p>
            Every successful project starts with a conversation.
            Connect with the right NEXORA team member and let's
            discuss how we can develop, manage and grow your business.
          </p>

          <div className="contact-hero-points">
            <span>
              <CheckCircle2 size={16} />
              Dedicated Team
            </span>

            <span>
              <CheckCircle2 size={16} />
              Complete Solutions
            </span>

            <span>
              <CheckCircle2 size={16} />
              Direct Communication
            </span>
          </div>
        </div>
      </section>

      {/* TEAM CONTACTS */}
      <section className="contact-team-section">
        <div className="container">
          <div className="contact-section-heading">
            <span className="section-tag">
              MEET OUR TEAM
            </span>

            <h2 className="section-title">
              Connect With the Right Expert
            </h2>

            <p className="section-description">
              Whether you need development, digital marketing,
              customer support or business management, our team
              is ready to discuss your requirements.
            </p>
          </div>

          <div className="contact-cards-grid">
            {contacts.map((person) => (
              <ContactCard
                key={person.id}
                person={person}
              />
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNICATION OPTIONS */}
      <section className="contact-channels-section">
        <div className="container">
          <div className="contact-section-heading">
            <span className="section-tag">
              HOW TO REACH US
            </span>

            <h2 className="section-title">
              Choose Your Preferred Way to Connect
            </h2>

            <p className="section-description">
              Reach out through your preferred communication
              channel. Our team will guide your inquiry to the
              relevant department.
            </p>
          </div>

          <div className="contact-channels-grid">
            {communicationChannels.map((channel) => {
              const Icon = channel.icon;

              return (
                <div className="contact-channel-card" key={channel.title}>
                  <div className="channel-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{channel.title}</h3>
                  <p>{channel.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKING PROCESS */}
      <section className="contact-process-section">
        <div className="container">
          <div className="contact-process-content">
            <div className="contact-process-text">
              <span className="section-tag">
                WHAT HAPPENS NEXT?
              </span>

              <h2>
                From Your First Message
                <span> to Real Results.</span>
              </h2>

              <p>
                We keep communication simple and organized.
                Once you contact us, we work to understand
                your requirements and identify the right
                solutions for your business.
              </p>

              <Link
                to="/services"
                className="contact-process-button"
              >
                Explore Our Services
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="contact-process-steps">
              <div className="process-step">
                <span className="process-number">01</span>

                <div>
                  <h3>Share Your Requirements</h3>
                  <p>
                    Tell us about your business, project or challenge.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <span className="process-number">02</span>

                <div>
                  <h3>Connect With Our Expert</h3>
                  <p>
                    Your inquiry reaches the relevant team member.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <span className="process-number">03</span>

                <div>
                  <h3>Discuss the Right Solution</h3>
                  <p>
                    We discuss the scope, strategy and next steps.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <span className="process-number">04</span>

                <div>
                  <h3>Start Moving Forward</h3>
                  <p>
                    Once agreed, we begin working towards your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-bottom-cta">
        <div className="container contact-bottom-content">
          <div>
            <span>LET'S BUILD SOMETHING GREAT</span>

            <h2>Have a Business Challenge?</h2>

            <p>
              From digital development to complete business
              management, let's find the right solution together.
            </p>
          </div>

          <a
            href="mailto:kaleemullahktk399@gmail.com"
            className="contact-cta-button"
          >
            Email Our Team
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
