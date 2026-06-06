import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  FileText,
  Home,
  ImageIcon,
  Laptop,
  Mail,
  Megaphone,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  PanelTop,
  Send,
  Smartphone,
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

const filters = ["All", "Print Design", "Web Design", "Photography"];

const projects = [
  { title: "Brand Poster", type: "print design", icon: Palette, tone: "gold" },
  { title: "School Portal", type: "web design", icon: Laptop, tone: "blue" },
  { title: "Campaign Layout", type: "print design", icon: PanelTop, tone: "dark" },
  { title: "Landing Page", type: "web design", icon: MonitorSmartphone, tone: "light" },
  { title: "Dashboard UI", type: "web design", icon: MonitorSmartphone, tone: "slate" },
  { title: "Portrait Edit", type: "photography", icon: ImageIcon, tone: "portrait" },
  { title: "Social Kit", type: "print design", icon: PanelTop, tone: "cyan" },
  { title: "Photo Story", type: "photography", icon: ImageIcon, tone: "field" },
  { title: "Creative Shot", type: "photography", icon: ImageIcon, tone: "photo" },
  { title: "Flyer Set", type: "print design", icon: Palette, tone: "paper" },
  { title: "Portfolio Site", type: "web design", icon: Laptop, tone: "mono" },
  { title: "Infographic", type: "print design", icon: Smartphone, tone: "mint" },
];

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio projects by Precious Pukulu across print design, web design, and photography.",
};

export default function PortfolioPage() {
  return (
    <section className="portfolio-template" aria-labelledby="portfolio-title">
      <aside className="portfolio-template-sidebar" aria-label="Portfolio navigation">
        <div className="portfolio-template-profile">
          <div className="portfolio-template-photo">
            <Image
              src="/images/profile-photo.jpeg"
              alt="Precious Pukulu profile"
              width={172}
              height={172}
              className="portfolio-template-image"
              priority
            />
          </div>
        </div>

        <nav className="portfolio-template-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = link.href === "/portfolio";

            return (
              <Link
                href={link.href}
                className={`portfolio-template-link ${isActive ? "is-active" : ""}`}
                key={link.href}
              >
                <Icon size={15} aria-hidden />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="portfolio-stage">
        <div className="portfolio-heading-row">
          <span className="portfolio-title-line" aria-hidden />
          <h1 id="portfolio-title" className="portfolio-title">
            Portfolio
          </h1>
        </div>

        <div className="portfolio-filters" aria-label="Portfolio categories">
          {filters.map((filter, index) => (
            <span className={index === 0 ? "is-active" : ""} key={filter}>
              {filter}
            </span>
          ))}
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                className={`portfolio-card portfolio-card-${project.tone}`}
                key={project.title}
              >
                <div className="portfolio-card-screen">
                  <Icon size={34} strokeWidth={1.7} aria-hidden />
                  <span />
                </div>
                <div className="portfolio-card-copy">
                  <strong>{project.title}</strong>
                  <small>{project.type}</small>
                </div>
              </article>
            );
          })}
        </div>

        <div className="portfolio-page-rail" aria-hidden>
          <span className="portfolio-page-line" />
          {railIcons.map((Icon, index) => (
            <span className="portfolio-page-icon" key={index}>
              <Icon size={15} />
            </span>
          ))}
          <span className="portfolio-page-line" />
        </div>
      </div>
    </section>
  );
}
