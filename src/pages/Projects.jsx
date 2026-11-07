
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Search,
  Headset,
  Megaphone,
  Users,
  CalendarCheck,
  BriefcaseBusiness,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "Driving School | Australia",
    name: "LC Driving Academy",
    website: "https://lcdrivingacademy.com.au",
    image: "/images/projects/lc-driving-academy.webp",
    description:
      "A complete digital presence and business support solution for a driving academy in Australia. Our work covers website development, online visibility, customer communication and marketing support.",
    services: [
      "Website Development",
      "SEO & Local SEO",
      "Google Business Profile",
      "Amelia Booking System",
      "Customer Support Management",
      "Sales Management",
      "Google Ads",
      "Meta Ads",
    ],
    featured: true,
  },
  {
    number: "02",
    category: "Cleaning Services | Australia",
    name: "CleanSlate by Saleh",
    website: "https://cleanslatebysaleh.au",
    image: "/images/projects/cleanslate.webp",
    description:
      "A professional website for a cleaning service business, designed to present its services clearly, strengthen its online presence and make it easier for potential customers to enquire.",
    services: [
      "Website Development",
      "WordPress & Elementor",
      "Local SEO",
      "Google Business Profile",
      "Contact Form Integration",
      "Service Presentation",
    ],
  },
  {
    number: "03",
    category: "Automotive | Australia",
    name: "Radiance Detailing",
    website: "https://radiancedetailing.com.au",
    image: "/images/projects/radiance-detailing.webp",
    description:
      "A modern digital presence for an automotive detailing business, focused on professional service presentation, brand positioning and helping customers explore available detailing solutions.",
    services: [
      "Website Development",
      "WordPress & Elementor",
      "SEO Optimization",
      "Local Search Visibility",
      "Service & Package Presentation",
      "Customer Enquiry Setup",
    ],
  },
  {
    number: "04",
    category: "Events & Digital Presence",
    name: "MUX Events",
    website: "https://muxevents.com.au",
    image: "/images/projects/mux-events.webp",
    description:
      "An event-focused digital project showcasing the brand through a professional online presence and an accessible website experience.",
    services: [
      "Website Development",
      "Responsive Design",
      "Digital Brand Presentation",
    ],
  },
];

const projectStats = [
  { number: "100+", label: "Featured Projects" },
  { number: "20+", label: "Service Capabilities" },
  { number: "05", label: "Business Industries" },
];

function Projects() {
  return (
    <main className="projects-page">
      <Helmet>
        <title>Our Projects & Portfolio | NEXORA Digital Solutions</title>
        <meta
          name="description"
          content="Explore NEXORA projects including LC Driving Academy, CleanSlate by Saleh, Radiance Detailing and MUX Events. Discover our website development, SEO, customer support, sales and digital marketing work."
        />
        <meta
          name="keywords"
          content="NEXORA portfolio, website development projects, LC Driving Academy, CleanSlate by Saleh, Radiance Detailing, MUX Events, SEO projects, customer support management, Google Ads, Meta Ads"
        />
        <meta
          property="og:title"
          content="Our Projects | NEXORA Digital & Business Solutions"
        />
        <meta
          property="og:description"
          content="Real projects. Practical solutions. Digital and business capabilities."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <section className="projects-hero">
        <div className="projects-container">
          <div className="projects-hero-content">
            <span className="projects-eyebrow">
              <span></span>
              OUR PORTFOLIO
            </span>

            <h1>
              Work That Makes
              <br />
              <span>Ideas Come to Life.</span>
            </h1>

            <p>
              Explore selected projects where we bring together website
              development, digital marketing, customer support and business
              solutions to help brands build a stronger digital presence.
            </p>

            <Link to="/contact" className="projects-primary-btn">
              Start Your Project <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="projects-hero-visual">
            <div className="projects-hero-panel">
              <div className="projects-panel-header">
                <span className="projects-panel-indicator"></span>
                <span>PROJECT SHOWCASE</span>
                <span className="projects-panel-year">NEXORA</span>
              </div>

              <div className="projects-panel-main">
                <span>FROM STRATEGY TO EXECUTION</span>
                <h2>
                  Digital Work.
                  <br />
                  Real Business Needs.
                </h2>
                <div className="projects-panel-line"></div>
              </div>

              <div className="projects-panel-bottom">
                <div>
                  <Code2 size={19} />
                  <span>Development</span>
                </div>
                <div>
                  <TrendingUp size={19} />
                  <span>Growth</span>
                </div>
                <div>
                  <Users size={19} />
                  <span>Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="projects-stats-section">
        <div className="projects-container projects-stats-grid">
          {projectStats.map((stat) => (
            <div className="projects-stat" key={stat.label}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="projects-intro-section">
        <div className="projects-container projects-intro-layout">
          <div>
            <span className="projects-label">WHAT WE HAVE BUILT</span>
            <h2>
              More Than Websites.
              <span> Complete Digital Experiences.</span>
            </h2>
          </div>

          <p>
            Every business has different goals. Our projects reflect how we
            combine technology, online visibility, customer communication
            and business processes to deliver solutions around those needs.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="projects-featured-section">
        <div className="projects-container">
          <div className="projects-section-heading">
            <span className="projects-label">FEATURED CASE STUDY</span>
            <h2>
              A Closer Look at <span>Our Work.</span>
            </h2>
          </div>

          <article className="featured-project-card">
            <div className="featured-project-image">
              <img
                src="/images/projects/lc-driving-academy.webp"
                alt="LC Driving Academy website project by NEXORA"
                loading="lazy"
              />
              <span className="featured-image-label">
                FEATURED PROJECT
              </span>
            </div>

            <div className="featured-project-content">
              <span className="project-category">
                DRIVING SCHOOL | AUSTRALIA
              </span>

              <h3>LC Driving Academy</h3>

              <p>
                We support LC Driving Academy with its digital presence and
                business workflows, bringing website development, booking
                management, online visibility, customer support, sales and
                advertising together.
              </p>

              <div className="featured-project-services">
                {[
                  "Website Development",
                  "SEO & Local SEO",
                  "Amelia Booking System",
                  "Customer Support Management",
                  "Sales Management",
                  "Google Ads & Meta Ads",
                  "Google Business Profile",
                ].map((service) => (
                  <span key={service}>
                    <CheckCircle2 />
                    {service}
                  </span>
                ))}
              </div>

              <div className="featured-project-actions">
                <a
                  href="https://lcdrivingacademy.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-website-btn"
                >
                  Visit Live Website <ExternalLink size={17} />
                </a>

                <Link to="/contact" className="project-contact-link">
                  Discuss a Similar Project <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* All Projects */}
      <section className="all-projects-section">
        <div className="projects-container">
          <div className="projects-section-heading">
            <span className="projects-label">SELECTED PROJECTS</span>
            <h2>
              Explore Our <span>Project Portfolio.</span>
            </h2>
            <p>
              A selection of digital projects across different business
              industries.
            </p>
          </div>

          <div className="projects-grid">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-card-image">
                    <img
                      src={project.image}
                      alt={`${project.name} website project`}
                      loading="lazy"
                    />
                    <span className="project-card-number">
                      {project.number}
                    </span>
                  </div>

                  <div className="project-card-content">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.services.map((service) => (
                        <span key={service}>{service}</span>
                      ))}
                    </div>

                    <div className="project-card-footer">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-website-link"
                      >
                        View Website <ExternalLink size={16} />
                      </a>

                      <span className="project-card-arrow">
                        <ArrowUpRight size={19} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="projects-capabilities-section">
        <div className="projects-container">
          <div className="projects-capabilities-layout">
            <div className="projects-capabilities-content">
              <span className="projects-label">BEYOND DEVELOPMENT</span>
              <h2>
                We Help Manage the
                <span> Bigger Picture.</span>
              </h2>

              <p>
                Our work is not limited to building websites. We also support
                business functions that help companies communicate with
                customers, organize sales activities and improve their
                digital operations.
              </p>

              <Link to="/services" className="projects-capabilities-btn">
                Explore All Services <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="projects-capabilities-list">
              <div>
                <Headset />
                <span>Customer Support Management</span>
              </div>
              <div>
                <Users />
                <span>Sales & CRM Management</span>
              </div>
              <div>
                <Megaphone />
                <span>Google Ads & Meta Ads</span>
              </div>
              <div>
                <Search />
                <span>SEO & Online Visibility</span>
              </div>
              <div>
                <CalendarCheck />
                <span>Booking & Enquiry Workflows</span>
              </div>
              <div>
                <BriefcaseBusiness />
                <span>Business Operations Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="projects-cta-section">
        <div className="projects-container projects-cta-content">
          <div>
            <span className="projects-label">HAVE A PROJECT IN MIND?</span>
            <h2>
              Let's Create Something
              <span> That Moves Your Business Forward.</span>
            </h2>
            <p>
              Whether you need a website, marketing support or complete
              business solutions, our team is ready to discuss your goals.
            </p>
          </div>

          <Link to="/contact" className="projects-primary-btn">
            Let's Talk <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Projects;
