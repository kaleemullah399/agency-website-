
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowUpRight,
  Target,
  Eye,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
  Handshake,
  CheckCircle2,
  Code2,
  Rocket,
  Users,
  Workflow,
  Headset,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Smartphone,
  Database,
  Megaphone,
  Bot,
  Search,
  Settings,
} from "lucide-react";

import "./About.css";

const values = [
  {
    icon: Target,
    title: "Results-Oriented",
    description:
      "Every strategy starts with your business objectives. We focus on practical solutions that create measurable opportunities for growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We use modern technologies, creative thinking and intelligent systems to solve business challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Accountability",
    description:
      "We follow agreed project standards, take ownership of our work and keep communication transparent.",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description:
      "We build professional relationships through collaboration, trust and consistent support.",
  },
];

const businessSolutions = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Professional WordPress websites, custom websites and full-stack web applications built around your business requirements.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Modern application solutions that help businesses connect with customers and deliver better digital experiences.",
  },
  {
    icon: Headset,
    title: "Customer Support Management",
    description:
      "Structured customer communication, inquiry handling and support workflows that improve the customer experience.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Sales Management",
    description:
      "Sales process organization, lead follow-ups and conversion-focused workflows to help teams manage opportunities.",
  },
  {
    icon: Database,
    title: "CRM Management",
    description:
      "CRM setup, customer data organization, pipeline management and smarter customer relationship workflows.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Business Growth Strategy",
    description:
      "Digital strategy, business positioning and growth planning to help identify new opportunities.",
  },
  {
    icon: Workflow,
    title: "Business Operations",
    description:
      "Improve daily operations, organize workflows and connect different business processes into a more efficient system.",
  },
  {
    icon: Bot,
    title: "AI & Business Automation",
    description:
      "Integrate AI tools and automation to reduce repetitive tasks and improve operational efficiency.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Advertising",
    description:
      "SEO, Google Ads, Meta Ads and digital campaigns designed to reach relevant audiences.",
  },
  {
    icon: Search,
    title: "SEO, AEO & GEO",
    description:
      "Improve your online visibility across traditional search engines, answer engines and AI-powered discovery platforms.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Build lead acquisition systems and customer journeys that help generate and organize business opportunities.",
  },
  {
    icon: Settings,
    title: "Business System Integration",
    description:
      "Connect your website, CRM, communication channels and business tools into coordinated workflows.",
  },
];

const teamAreas = [
  {
    icon: Code2,
    title: "Development Team",
    description:
      "Websites, full-stack applications, mobile solutions and technical integrations.",
  },
  {
    icon: Megaphone,
    title: "Marketing & SEO Team",
    description:
      "Search visibility, advertising, content strategy and lead generation.",
  },
  {
    icon: Headset,
    title: "Customer Support Team",
    description:
      "Customer communication, inquiry handling and relationship management.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Sales Team",
    description:
      "Sales workflows, CRM management, business operations and growth support.",
  },
];

const commitments = [
  "Clearly defined project scope and deliverables",
  "Professional standards and quality-focused execution",
  "Transparent communication and progress updates",
  "Solutions aligned with your business objectives",
  "Support throughout the agreed project or service period",
];

function About() {
  return (
    <>
      <Helmet>
        <title>About NEXORA | Complete Digital & Business Solutions</title>
        <meta
          name="description"
          content="Meet NEXORA, a digital and business solutions team providing web and app development, customer support, sales management, CRM, marketing and business automation."
        />
        <meta
          property="og:title"
          content="About NEXORA | Complete Digital & Business Solutions"
        />
        <meta
          property="og:description"
          content="One team for digital development, customer support, sales, CRM, marketing and business automation."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="about-page">

        {/* Hero */}
        <section className="about-hero">
          <div className="about-container about-hero-layout">
            <div className="about-hero-content">
              <span className="about-label">ABOUT NEXORA</span>

              <h1>
                One Team.
                <span> Complete Business</span>
                Solutions.
              </h1>

              <p>
                We bring technology, people and business strategy
                together to help companies build, manage and grow.
                From websites and applications to customer support,
                sales, marketing and business automation, we help
                connect the essential parts of your business.
              </p>

              <div className="about-hero-actions">
                <Link to="/contact" className="about-primary-btn">
                  Work With Us <ArrowUpRight size={19} />
                </Link>

                <Link to="/services" className="about-text-btn">
                  Explore Our Expertise
                </Link>
              </div>
            </div>

            <div className="about-hero-visual">
              <img
                src="/images/about/about-hero.webp"
                alt="NEXORA digital technology and business strategy"
              />

              <div className="about-hero-badge">
                <span>IDEAS</span>
                <ArrowUpRight size={18} />
                <strong>IMPACT</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="about-intro about-section">
          <div className="about-container about-intro-layout">
            <div>
              <span className="about-label">WHO WE ARE</span>
              <h2>
                More Than an Agency.
                <span> Your Complete Business Partner.</span>
              </h2>
            </div>

            <div className="about-intro-text">
              <p>
                NEXORA — Digital & Business Solutions brings together
                different areas of digital development, marketing and
                business operations under one coordinated team.
              </p>

              <p>
                We understand that running a business involves much
                more than having a website. It requires effective
                customer communication, organized sales processes,
                reliable systems, marketing and continuous improvement.
              </p>

              <p>
                Our goal is to help businesses connect these functions
                through the right people, technology and strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="about-purpose about-section">
          <div className="about-container purpose-grid">
            <article className="purpose-card purpose-dark">
              <div className="purpose-icon">
                <Target size={27} />
              </div>
              <span className="about-label">OUR MISSION</span>
              <h2>Make Business Growth Simpler.</h2>
              <p>
                Our mission is to provide connected digital and
                business solutions that help companies improve their
                online presence, streamline operations, serve customers
                better and work towards sustainable growth.
              </p>
            </article>

            <article className="purpose-card purpose-yellow">
              <div className="purpose-icon">
                <Eye size={27} />
              </div>
              <span className="about-label">OUR VISION</span>
              <h2>One Team. A Smarter Business Future.</h2>
              <p>
                Our vision is to become a trusted business solutions
                partner for companies worldwide, bringing development,
                marketing, customer management and automation together
                in one coordinated approach.
              </p>
            </article>
          </div>
        </section>

        {/* Complete Business Solutions */}
        <section className="about-solutions about-section">
          <div className="about-container">
            <div className="about-section-heading">
              <span className="about-label">WHAT WE BRING TO YOUR BUSINESS</span>
              <h2>
                Your Business Has Many Needs.
                <span> We Bring Them Together.</span>
              </h2>
              <p>
                From building your digital presence to supporting
                daily operations, our team covers multiple areas
                of your business journey.
              </p>
            </div>

            <div className="business-solutions-grid">
              {businessSolutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <article
                    className="business-solution-card"
                    key={solution.title}
                  >
                    <div className="business-solution-icon">
                      <Icon size={24} />
                    </div>

                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Growth Statement */}
        <section className="about-growth about-section">
          <div className="about-container growth-layout">
            <div className="growth-content">
              <span className="about-label">GROWTH WITH PURPOSE</span>
              <h2>
                Your Growth Is More Than a Goal.
                <span> It's Our Focus.</span>
              </h2>

              <p>
                We combine technology, business operations, customer
                experience and digital marketing to help your business
                discover new opportunities and work more efficiently.
              </p>

              <p>
                Our ambition is to help businesses work towards up to
                5x growth potential through the right strategy,
                coordinated execution and continuous optimization.
                Actual results depend on your business, market,
                investment and other factors.
              </p>

              <Link to="/contact" className="about-primary-btn">
                Discuss Your Growth Goals <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="growth-visual">
              <div className="growth-visual-inner">
                <TrendingUp size={43} />
                <strong>GROWTH</strong>
                <span>People. Technology. Strategy.</span>
              </div>
              <div className="growth-corner growth-corner-one"></div>
              <div className="growth-corner growth-corner-two"></div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="about-team about-section">
          <div className="about-container">
            <div className="about-section-heading">
              <span className="about-label">ONE COORDINATED TEAM</span>
              <h2>
                Different Expertise.
                <span> One Shared Vision.</span>
              </h2>
              <p>
                Our team brings together different areas of expertise
                to support the connected needs of modern businesses.
              </p>
            </div>

            <div className="about-team-grid">
              {teamAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article className="about-team-card" key={area.title}>
                    <div className="about-team-icon">
                      <Icon size={26} />
                    </div>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="team-bottom-note">
              <Users size={22} />
              <p>
                One coordinated team working across your digital,
                customer and business operations.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values about-section">
          <div className="about-container">
            <div className="about-section-heading">
              <span className="about-label">WHAT DRIVES US</span>
              <h2>
                The Values Behind
                <span> Everything We Do.</span>
              </h2>
              <p>
                Strong partnerships and meaningful results begin
                with the right principles.
              </p>
            </div>

            <div className="about-values-grid">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article className="about-value-card" key={value.title}>
                    <div className="about-value-icon">
                      <Icon size={25} />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="about-commitment about-section">
          <div className="about-container commitment-layout">
            <div className="commitment-heading">
              <span className="about-label">OUR COMMITMENT</span>
              <h2>
                Clear Promises.
                <span> Professional Delivery.</span>
              </h2>
              <p>
                We stand behind the quality of our work and the
                commitments agreed with every client. Our focus is
                on transparency, accountability and professional
                execution.
              </p>
            </div>

            <div className="commitment-list">
              {commitments.map((item) => (
                <div className="commitment-item" key={item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Working Process */}
        <section className="about-process about-section">
          <div className="about-container">
            <div className="about-section-heading">
              <span className="about-label">OUR APPROACH</span>
              <h2>
                From First Conversation
                <span> to Real Progress.</span>
              </h2>
            </div>

            <div className="about-process-grid">
              <div className="about-process-card">
                <span>01</span>
                <Target size={26} />
                <h3>Understand</h3>
                <p>We learn about your business, challenges and goals.</p>
              </div>

              <div className="about-process-card">
                <span>02</span>
                <Lightbulb size={26} />
                <h3>Strategize</h3>
                <p>We identify the right approach and define priorities.</p>
              </div>

              <div className="about-process-card">
                <span>03</span>
                <Workflow size={26} />
                <h3>Execute</h3>
                <p>Our team works on the agreed solutions and deliverables.</p>
              </div>

              <div className="about-process-card">
                <span>04</span>
                <Rocket size={26} />
                <h3>Improve</h3>
                <p>We identify opportunities for ongoing improvement and growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="about-final-cta">
          <div className="about-container">
            <div className="about-final-cta-inner">
              <span className="about-label">YOUR BUSINESS. ONE TEAM. MORE POSSIBILITIES.</span>
              <h2>
                Let's Build, Manage
                <span> and Grow Together.</span>
              </h2>
              <p>
                Whether you need a website, a complete digital strategy
                or support with your business operations, let's find
                the right solution together.
              </p>
              <Link to="/contact" className="about-dark-btn">
                Start a Conversation <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default About;
