import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  FileText,
  Home,
  Mail,
  Megaphone,
  MessageSquare,
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

const filters = ["All", "Graphic Designing", "Web Design"];

const projects = [
  {
    title: "Academy Fellowship",
    type: "graphic designing",
    src: "/images/academy felloship camerron.jpg",
  },
  { title: "Ausmacks", type: "graphic designing", src: "/images/AUSMACKS 2.jpg" },
  { title: "Burger Flyer", type: "graphic designing", src: "/images/burger flyer.jpg" },
  {
    title: "CCAPSO Poster",
    type: "graphic designing",
    src: "/images/ccapso poster redesigned.jpg",
  },
  {
    title: "CCAPSO Unima",
    type: "graphic designing",
    src: "/images/ccapso unima redesign.jpg",
  },
  { title: "Love Design", type: "graphic designing", src: "/images/love.jpg" },
  { title: "Mwanja Nails", type: "graphic designing", src: "/images/MWANJA NAILS 2.jpg" },
  { title: "Pukulu Works", type: "graphic designing", src: "/images/pukulu works.jpg" },
  {
    title: "Racheal Birthday",
    type: "graphic designing",
    src: "/images/RACHEAL BIRTHDAY.jpg",
  },
  { title: "Unima GLF Club", type: "graphic designing", src: "/images/unima glf club 1.jpg" },
];

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio projects by Precious Pukulu across graphic designing and web design.",
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
            <span className={index === 1 ? "is-active" : ""} key={filter}>
              {filter}
            </span>
          ))}
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="portfolio-card portfolio-work-card" key={project.title}>
              <div className="portfolio-card-screen">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 760px) 50vw, (max-width: 1100px) 30vw, 190px"
                  className="portfolio-work-image"
                />
              </div>
              <div className="portfolio-card-copy">
                <strong>{project.title}</strong>
                <small>{project.type}</small>
              </div>
            </article>
          ))}
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
