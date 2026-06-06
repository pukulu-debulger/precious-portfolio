import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Camera,
  Code2,
  FileText,
  Home,
  Mail,
  Megaphone,
  MessageSquare,
  Palette,
  Send,
  User,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Me", icon: User },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/portfolio", label: "Portfolio", icon: Briefcase },
  { href: "/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/contact", label: "Contact", icon: Mail },
];

const railIcons = [Home, User, Briefcase, MessageSquare, Megaphone, Send];

const services = [
  {
    title: "Teaching",
    description:
      "Guiding learners through computer science concepts with practical projects and clear explanations.",
    icon: Code2,
  },
  {
    title: "Web Design",
    description:
      "Designing clean, responsive interfaces that feel focused, modern, and easy to use.",
    icon: Palette,
  },
  {
    title: "Photography",
    description:
      "Creating polished visual content for personal brands, campaigns, and digital storytelling.",
    icon: Camera,
  },
];

const facts = [
  { value: "5+", label: "Years Teaching" },
  { value: "25+", label: "Projects Done" },
  { value: "10+", label: "Design Brands" },
  { value: "100+", label: "Happy Students" },
  { value: "3", label: "Creative Skills" },
  { value: "MW", label: "Based in Malawi" },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "About Precious Pukulu, a Computer Science Teacher, Software Developer, and Graphic Designer from Malawi.",
};

export default function AboutPage() {
  return (
    <section className="about-template" aria-labelledby="about-title">
      <aside className="about-template-sidebar" aria-label="About navigation">
        <div className="about-template-profile">
          <div className="about-template-photo">
            <Image
              src="/images/profile-photo.jpeg"
              alt="Precious Pukulu profile"
              fill
              sizes="152px"
              className="about-template-image"
              priority
            />
          </div>
        </div>

        <nav className="about-template-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = link.href === "/about";

            return (
              <Link
                href={link.href}
                className={`about-template-link ${isActive ? "is-active" : ""}`}
                key={link.href}
              >
                <Icon size={15} aria-hidden />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="about-stage">
        <div className="about-heading-row">
          <span className="about-title-line" aria-hidden />
          <h1 id="about-title" className="about-title">
            About Me
          </h1>
        </div>

        <div className="about-intro-block">
          <p className="about-lead">
            I&apos;m <strong>Precious Pukulu</strong>, Computer Science Teacher /
            Software Developer / Graphic Designer.
          </p>
          <p className="about-copy">
            I enjoy turning ideas into practical learning experiences, useful
            software, and sharp visual designs. My work blends education,
            technology, and creativity to help people understand, build, and
            present their ideas with confidence.
          </p>
        </div>

        <div className="about-content-grid">
          <div className="about-services">
            <h2 className="about-pill-title">What I Do?</h2>
            <div className="about-service-list">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="about-service" key={service.title}>
                    <div className="about-service-icon" aria-hidden>
                      <Icon size={34} strokeWidth={1.65} />
                    </div>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="about-facts">
            <h2 className="about-pill-title">Fun Facts</h2>
            <div className="about-fact-grid">
              {facts.map((fact) => (
                <div className="about-fact" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-page-rail" aria-hidden>
          <span className="about-page-line" />
          {railIcons.map((Icon, index) => (
            <span className="about-page-icon" key={index}>
              <Icon size={15} />
            </span>
          ))}
          <span className="about-page-line" />
        </div>
      </div>
    </section>
  );
}
