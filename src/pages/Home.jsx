
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowUpRight,
  Code2,
  Bot,
  Search,
  Megaphone,
  Users,
  Workflow,
  ShieldCheck,
  Zap,
  Target,
  ChevronDown,
  Layers,
  BarChart3,
  Globe,
  CheckCircle2,
} from "lucide-react";

import "./Home.css";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites built to strengthen your digital presence.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Smart AI-powered solutions that improve workflows, productivity and customer experiences.",
  },
  {
    icon: Search,
    title: "SEO, AEO & GEO",
    description:
      "Improve your online visibility and help customers discover your business across search platforms.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic Google Ads and Meta Ads campaigns designed to reach the right audience.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Build effective lead generation systems that connect your business with potential customers.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Simplify repetitive tasks and create smarter business workflows with automation.",
  },
];

const reasons = [
  {
    icon: Target,
    title: "Growth-Focused Approach",
    description:
      "We focus on solutions that support your business objectives and long-term growth.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    description:
      "We value clean execution, dependable communication and professional standards.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description:
      "We use modern tools and technologies to create practical digital solutions.",
  },
  {
    icon: Globe,
    title: "Worldwide Solutions",
    description:
      "We work with businesses looking to build and improve their digital presence worldwide.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, audience and project requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We develop a clear strategy and define the right solution for your needs.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We execute the project with attention to quality, performance and details.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We help you improve, optimize and move forward with your digital presence.",
  },
];

const projects = [
  {
    name: "LC Driving Academy",
    category: "Website Development & Digital Growth",
    image: "/images/projects/lc-driving-academy.webp",
    description:
      "Driving academy website, booking workflows and local search optimization.",
    link: "https://lcdrivingacademy.com.au/",
  },
  {
    name: "CleanSlate by Saleh",
    category: "Website Development & Local SEO",
    image: "/images/projects/cleanslate.webp",
    description:
      "Professional cleaning service website with local search and customer inquiry features.",
    link: "https://cleanslatebysaleh.au/",
  },
  {
    name: "Radiance Detailing",
    category: "Website Development & SEO",
    image: "/images/projects/radiance-detailing.webp",
    description:
      "Automotive detailing website focused on service presentation and online visibility.",
    link: "https://radiancedetailing.com.au/",
  },
];

const faqs = [
  {
    question: "What services does NEXORA provide?",
    answer:
      "NEXORA provides web development, MERN stack development, AI integration, SEO, digital marketing, lead generation, CRM management and business automation services.",
  },
  {
    question: "Can you develop a custom business website?",
    answer:
      "Yes. We develop professional and responsive websites tailored to your business goals, requirements and brand identity.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. NEXORA aims to serve businesses worldwide through digital and technology solutions.",
  },
  {
    question: "How can I start a project with NEXORA?",
    answer:
      "Visit our Contact page and get in touch with our team through phone, email or WhatsApp to discuss your project.",
  },
];

function Home() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      <Helmet>
        <title>NEXORA | Digital & Business Solutions</title>
        <meta
          name="description"
          content="NEXORA delivers professional web development, AI integration, SEO, digital marketing and business automation solutions to help businesses grow."
        />
        <meta
          name="keywords"
          content="NEXORA, web development, MERN stack development, AI integration, SEO, AEO, GEO, digital marketing, business automation"
        />
        <meta property="og:title" content="NEXORA | Digital & Business Solutions" />
        <meta
          property="og:description"
          content="Build your digital future with NEXORA. Explore web development, AI integration, SEO and business solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="home-page">

        {/* Hero Section */}
        <section className="home-hero">
          <div className="home-container hero-layout">
            <div className="hero-content">
              <span className="hero-eyebrow">
                <span className="hero-dot"></span>
                DIGITAL & BUSINESS SOLUTIONS
              </span>

              <h1>
                Transform Your Ideas Into
                <span> Digital Success.</span>
              </h1>

              <p className="hero-description">
                We help businesses grow with innovative technology,
                powerful digital experiences and intelligent business
                solutions designed for the future.
              </p>

              <div className="hero-actions">
                <Link to="/contact" className="home-primary-btn">
                  Start Your Project <ArrowUpRight size={19} />
                </Link>

                <Link to="/projects" className="home-secondary-btn">
                  Explore Our Work
                </Link>
              </div>

              <div className="hero-trust">
                <div className="hero-trust-icon">
                  <CheckCircle2 size={18} />
                </div>
                <p>Technology, Strategy & Digital Growth</p>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <img
                  src="/images/home/hero.webp"
                  alt="Modern digital technology and business workspace"
                />

                <div className="hero-image-overlay"></div>

                <div className="hero-floating-card hero-card-top">
                  <div className="floating-icon">
                    <Layers size={21} />
                  </div>
                  <div>
                    <strong>Digital Solutions</strong>
                    <span>Built for your business</span>
                  </div>
                </div>

                <div className="hero-floating-card hero-card-bottom">
                  <div className="floating-icon">
                    <BarChart3 size={21} />
                  </div>
                  <div>
                    <strong>Smart Growth</strong>
                    <span>Driven by technology</span>
                  </div>
                </div>
              </div>

              <div className="hero-decoration"></div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="home-intro section-padding">
          <div className="home-container intro-layout">
            <div className="section-heading intro-heading">
              <span className="section-label">WHO WE ARE</span>
              <h2>
                Your Partner in
                <span> Digital Transformation.</span>
              </h2>
            </div>

            <div className="intro-content">
              <p>
                NEXORA is a digital and business solutions agency focused
                on helping businesses establish, improve and expand their
                digital presence.
              </p>

              <p>
                From modern websites to intelligent automation and digital
                marketing, we bring technology and strategy together to
                support your business goals.
              </p>

              <Link to="/about" className="text-link">
                Discover NEXORA <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="home-services section-padding">
          <div className="home-container">
            <div className="section-heading centered-heading">
              <span className="section-label">WHAT WE DO</span>
              <h2>
                Solutions That Move
                <span> Your Business Forward.</span>
              </h2>
              <p>
                Everything you need to build, optimize and grow your
                business in the digital world.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div className="home-service-card" key={service.title}>
                    <div className="service-card-top">
                      <div className="service-icon">
                        <Icon size={25} />
                      </div>
                      <span>0{index + 1}</span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <Link to="/services" className="service-card-link">
                      Explore Service <ArrowUpRight size={17} />
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="services-bottom">
              <Link to="/services" className="home-primary-btn">
                Explore All Services <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="home-why section-padding">
          <div className="home-container why-layout">
            <div className="why-content">
              <span className="section-label">WHY NEXORA</span>
              <h2>
                More Than Services.
                <span> A Growth Partner.</span>
              </h2>
              <p>
                We believe successful digital transformation starts with
                understanding your business. Our approach combines
                creativity, technology and practical strategy.
              </p>

              <Link to="/about" className="home-primary-btn">
                Get to Know Us <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="why-grid">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div className="why-card" key={reason.title}>
                    <div className="why-icon">
                      <Icon size={24} />
                    </div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="home-process section-padding">
          <div className="home-container">
            <div className="section-heading centered-heading">
              <span className="section-label">HOW WE WORK</span>
              <h2>
                A Clear Process.
                <span> Meaningful Results.</span>
              </h2>
              <p>
                A structured approach that keeps your project focused
                from the first conversation to the final delivery.
              </p>
            </div>

            <div className="process-grid">
              {process.map((item) => (
                <div className="process-card" key={item.number}>
                  <span className="process-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="home-projects section-padding">
          <div className="home-container">
            <div className="projects-heading">
              <div className="section-heading">
                <span className="section-label">SELECTED WORK</span>
                <h2>
                  Projects That Reflect
                  <span> Our Expertise.</span>
                </h2>
              </div>

              <Link to="/projects" className="text-link">
                View All Projects <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="home-project-card" key={project.name}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-image"
                    aria-label={`Visit ${project.name}`}
                  >
                    <img src={project.image} alt={project.name} loading="lazy" />
                    <span className="project-external">
                      <ArrowUpRight size={21} />
                    </span>
                  </a>

                  <div className="project-info">
                    <span>{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="home-faq section-padding">
          <div className="home-container faq-layout">
            <div className="section-heading faq-heading">
              <span className="section-label">HAVE QUESTIONS?</span>
              <h2>
                Frequently Asked
                <span> Questions.</span>
              </h2>
              <p>
                Find answers to common questions about our services
                and how we work.
              </p>

              <Link to="/contact" className="text-link">
                Ask Us Anything <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${activeFaq === index ? "active" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? -1 : index)
                    }
                    aria-expanded={activeFaq === index}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={20} />
                  </button>

                  {activeFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="home-cta-section">
          <div className="home-container">
            <div className="home-cta">
              <span className="section-label">LET'S BUILD SOMETHING GREAT</span>
              <h2>
                Ready to Take Your Business
                <span> to the Next Level?</span>
              </h2>
              <p>
                Let's discuss your ideas and find the right digital
                solutions to move your business forward.
              </p>

              <Link to="/contact" className="home-dark-btn">
                Let's Talk About Your Project <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Home;
