
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Bot,
  Search,
  Megaphone,
  Target,
  Headset,
  Users,
  Database,
  TrendingUp,
  Workflow,
  Building2,
  Hotel,
  Stethoscope,
  Utensils,
  BriefcaseBusiness,
  CheckCircle2,
  Sparkles,
  Settings,
  ChartNoAxesCombined,
} from "lucide-react";

import "./Services.css";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "We build modern, responsive and scalable websites that help businesses establish a strong digital presence and convert visitors into customers.",
    features: [
      "Custom website development",
      "React and MERN stack development",
      "WordPress development",
      "E-commerce solutions",
      "Website maintenance",
    ],
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "We develop user-friendly mobile applications that connect businesses with their customers and simplify everyday operations.",
    features: [
      "Business mobile applications",
      "Custom app development",
      "User-focused interfaces",
      "Business app integrations",
    ],
  },
  {
    number: "03",
    icon: Bot,
    title: "AI Integration & Automation",
    description:
      "We integrate intelligent tools and automation into business workflows to reduce repetitive tasks, improve efficiency and support better decisions.",
    features: [
      "AI-powered business workflows",
      "Customer support automation",
      "Workflow automation",
      "AI chatbot integration",
      "Business process optimization",
    ],
  },
  {
    number: "04",
    icon: Search,
    title: "SEO, AEO & GEO",
    description:
      "We improve online visibility through search engine optimization and strategies designed for traditional search engines and AI-powered discovery.",
    features: [
      "Technical and on-page SEO",
      "Local SEO",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "Content and keyword strategy",
    ],
  },
  {
    number: "05",
    icon: Megaphone,
    title: "Google & Meta Advertising",
    description:
      "We plan and manage targeted advertising campaigns to help businesses reach the right audience and generate meaningful enquiries.",
    features: [
      "Google Ads management",
      "Facebook and Instagram Ads",
      "Campaign optimization",
      "Audience targeting",
      "Performance reporting",
    ],
  },
  {
    number: "06",
    icon: Target,
    title: "Lead Generation",
    description:
      "We create lead-generation systems that attract potential customers, capture enquiries and help businesses build a stronger sales pipeline.",
    features: [
      "Lead generation strategies",
      "Landing pages",
      "Enquiry and conversion workflows",
      "Lead tracking systems",
      "Campaign performance analysis",
    ],
  },
  {
    number: "07",
    icon: Headset,
    title: "Customer Support Management",
    description:
      "We help businesses manage customer communication and support operations with professional teams, organized workflows and customer-focused service.",
    features: [
      "Inbound and outbound support",
      "Customer enquiry management",
      "Email, chat and phone support",
      "Customer issue resolution",
      "Support team coordination",
    ],
  },
  {
    number: "08",
    icon: Users,
    title: "Sales Management",
    description:
      "We help businesses organize sales activities, manage customer relationships and improve the way leads move through the sales process.",
    features: [
      "Sales process management",
      "Lead follow-up coordination",
      "Sales pipeline management",
      "Customer communication",
      "Sales performance tracking",
    ],
  },
  {
    number: "09",
    icon: Database,
    title: "CRM Management",
    description:
      "We organize customer information and sales workflows through CRM systems that help teams manage relationships and stay connected with customers.",
    features: [
      "CRM setup and configuration",
      "Customer database management",
      "Sales pipeline organization",
      "Follow-up automation",
      "CRM system integration",
    ],
  },
  {
    number: "10",
    icon: Building2,
    title: "Business Operations Management",
    description:
      "We help businesses improve their daily operations by organizing processes, coordinating teams and creating efficient business workflows.",
    features: [
      "Business process management",
      "Operations coordination",
      "Workflow documentation",
      "Task and team management",
      "Process improvement",
    ],
  },
  {
    number: "11",
    icon: TrendingUp,
    title: "Business Growth Strategy",
    description:
      "We combine digital strategy, operational improvements and marketing execution to help businesses identify opportunities and work towards sustainable growth.",
    features: [
      "Business growth planning",
      "Digital transformation strategy",
      "Customer acquisition planning",
      "Performance monitoring",
      "Continuous optimization",
    ],
  },
  {
    number: "12",
    icon: Workflow,
    title: "Business System Integration",
    description:
      "We connect the tools and platforms your business uses so information can move more efficiently between your systems and teams.",
    features: [
      "Third-party integrations",
      "CRM and website integration",
      "Marketing automation",
      "Business workflow connections",
      "System optimization",
    ],
  },
];

const supportIndustries = [
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description:
      "Guest enquiries, booking assistance, customer communication and hospitality support workflows.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Medical",
    description:
      "Patient enquiries, appointment coordination and professional administrative support.",
  },
  {
    icon: Utensils,
    title: "Restaurants & Food Businesses",
    description:
      "Customer enquiries, reservations, order-related communication and service assistance.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Large & Enterprise Businesses",
    description:
      "Structured customer communication, support coordination and day-to-day service operations.",
  },
];

const serviceProcess = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, customers, challenges and objectives.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We identify the right services, tools and strategy for your requirements.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Our team works on implementation, management and coordinated delivery.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We review performance and identify opportunities for continuous improvement.",
  },
];

function Services() {
  return (
    <main className="services-page">
      <Helmet>
        <title>Our Services | NEXORA — Digital & Business Solutions</title>
        <meta
          name="description"
          content="Explore NEXORA's complete business solutions, including web and app development, customer support management, CRM, AI automation, SEO, advertising and business operations."
        />
        <meta
          name="keywords"
          content="web development, mobile app development, customer support management, CRM management, AI automation, SEO, AEO, GEO, lead generation, business operations, NEXORA"
        />
        <meta
          property="og:title"
          content="Our Services | NEXORA Digital & Business Solutions"
        />
        <meta
          property="og:description"
          content="One team for technology, customer support, marketing and complete business solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-container">
          <div className="services-hero-content">
            <span className="services-eyebrow">
              <span></span>
              WHAT WE DO
            </span>

            <h1>
              Complete Solutions.
              <br />
              <span>One Business Partner.</span>
            </h1>

            <p>
              From technology and digital marketing to customer support and
              business operations, we bring the expertise together to help
              your business work smarter and grow.
            </p>

            <div className="services-hero-actions">
              <Link to="/contact" className="services-primary-btn">
                Discuss Your Project <ArrowUpRight size={19} />
              </Link>

              <a href="#all-services" className="services-text-link">
                Explore Our Services
              </a>
            </div>

            <div className="services-hero-note">
              <CheckCircle2 size={18} />
              <span>Technology, people and business solutions under one roof.</span>
            </div>
          </div>

          <div className="services-hero-visual">
            <div className="services-visual-main">
              <div className="services-visual-top">
                <span className="services-visual-dot"></span>
                <span>BUSINESS SOLUTIONS</span>
              </div>

              <div className="services-visual-center">
                <div className="services-visual-icon">
                  <Sparkles size={42} />
                </div>
                <h2>One Connected Business</h2>
                <p>Everything working together.</p>
              </div>

              <div className="services-visual-grid">
                <div><Code2 size={18} /><span>Technology</span></div>
                <div><Headset size={18} /><span>Support</span></div>
                <div><Megaphone size={18} /><span>Marketing</span></div>
                <div><Workflow size={18} /><span>Operations</span></div>
              </div>
            </div>

            <div className="services-floating-card">
              <ChartNoAxesCombined size={22} />
              <div>
                <strong>Built Around Your Goals</strong>
                <span>Connected solutions for business growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="services-intro-section">
        <div className="services-container services-intro-layout">
          <div>
            <span className="services-label">OUR APPROACH</span>
            <h2>
              More Than Individual Services.
              <span> A Complete Business Solution.</span>
            </h2>
          </div>

          <p>
            Businesses need more than just a website or an advertising
            campaign. They need technology, customer support, sales,
            marketing and operations working together. NEXORA brings these
            capabilities together through a coordinated team and a practical
            approach to business management.
          </p>
        </div>
      </section>

      {/* All Services */}
      <section className="services-list-section" id="all-services">
        <div className="services-container">
          <div className="services-section-heading">
            <span className="services-label">OUR EXPERTISE</span>
            <h2>
              Everything Your Business <span>Needs to Move Forward.</span>
            </h2>
            <p>
              Explore our services and discover how we can support different
              areas of your business.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <div className="service-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                    <span className="service-number">{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p className="service-description">
                    {service.description}
                  </p>

                  <ul className="service-feature-list">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="service-card-link">
                    Discuss This Service <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Support Experience */}
      <section className="support-experience-section">
        <div className="services-container">
          <div className="support-experience-heading">
            <span className="services-label">CUSTOMER SUPPORT EXPERIENCE</span>
            <h2>
              Supporting Customers Across
              <span> Industries & International Markets.</span>
            </h2>
            <p>
              Our team has experience managing customer support operations
              for businesses serving customers in Australia and the United
              States. We understand that every industry has different
              customer expectations, communication needs and service
              workflows.
            </p>
          </div>

          <div className="support-markets">
            <div className="support-market-card">
              <span className="support-market-symbol">AU</span>
              <div>
                <strong>Australia</strong>
                <span>Customer support operations</span>
              </div>
            </div>

            <div className="support-market-card">
              <span className="support-market-symbol">US</span>
              <div>
                <strong>United States</strong>
                <span>Customer support operations</span>
              </div>
            </div>
          </div>

          <div className="support-industries-grid">
            {supportIndustries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article className="support-industry-card" key={industry.title}>
                  <div className="support-industry-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </article>
              );
            })}
          </div>

          <div className="support-experience-bottom">
            <div>
              <span className="support-bottom-label">OUR APPROACH</span>
              <h3>Professional Support. Better Customer Experiences.</h3>
              <p>
                From customer enquiries and appointment coordination to
                hospitality and business support, we focus on organized
                communication and reliable service delivery.
              </p>
            </div>

            <Link to="/contact" className="services-primary-btn">
              Talk to Our Team <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* Integrated Solutions */}
      <section className="integrated-solutions-section">
        <div className="services-container integrated-solutions-layout">
          <div className="integrated-solutions-content">
            <span className="services-label">THE NEXORA ADVANTAGE</span>
            <h2>
              Your Business Should Work
              <span> As One Connected System.</span>
            </h2>
            <p>
              We look beyond individual tasks. Our goal is to help connect
              your website, marketing, sales, CRM, customer support and
              operations into a more organized business system.
            </p>

            <Link to="/about" className="services-dark-btn">
              Discover NEXORA <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="integrated-solutions-list">
            <div><Code2 /><span>Website & App Development</span><CheckCircle2 /></div>
            <div><Megaphone /><span>Marketing & Lead Generation</span><CheckCircle2 /></div>
            <div><Users /><span>Sales & Customer Support</span><CheckCircle2 /></div>
            <div><Database /><span>CRM & Customer Management</span><CheckCircle2 /></div>
            <div><Settings /><span>Operations & Automation</span><CheckCircle2 /></div>
            <div><TrendingUp /><span>Business Growth Strategy</span><CheckCircle2 /></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-process-section">
        <div className="services-container">
          <div className="services-section-heading">
            <span className="services-label">HOW WE WORK</span>
            <h2>
              A Clear Process. <span>Focused Execution.</span>
            </h2>
            <p>
              A practical approach that keeps your business goals at the
              centre of every project.
            </p>
          </div>

          <div className="services-process-grid">
            {serviceProcess.map((step) => (
              <article className="services-process-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta-section">
        <div className="services-container services-cta-content">
          <div>
            <span className="services-label">LET'S WORK TOGETHER</span>
            <h2>
              Ready to Build a Better
              <span> Business System?</span>
            </h2>
            <p>
              Tell us about your business goals. Let's identify the right
              solutions and create a practical plan to move forward.
            </p>
          </div>

          <Link to="/contact" className="services-cta-btn">
            Start a Conversation <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
