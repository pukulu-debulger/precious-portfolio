import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BookOpen,
  Briefcase,
  Code2,
  FileText,
  GraduationCap,
  Home,
  Mail,
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

const railIcons = [Home, User, FileText, Briefcase, MessageSquare, Send];

const education = [
  {
    year: "2024",
    title: "Computer Science",
    text: "Studied core computing, software development, and problem solving through practical class projects.",
  },
  {
    year: "2025",
    title: "Computer Science",
    text: "Built stronger skills in programming, digital tools, databases, and technology-supported learning.",
  },
  {
    year: "2026",
    title: "Computer Science",
    text: "Focused on applying computer science concepts in education, web projects, and creative digital work.",
  },
];

const experience = [
  {
    year: "2024",
    title: "CS Teacher",
    text: "Guided students through computer science basics using simple explanations and hands-on activities.",
  },
  {
    year: "2025",
    title: "Graphic Designer",
    text: "Created brand visuals, social media artwork, and clean layouts for personal and business projects.",
  },
  {
    year: "2026",
    title: "Software Developer",
    text: "Designed and developed responsive websites with clear user flows and polished interface details.",
  },
];

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Precious Pukulu, covering education and experience in teaching, software development, and graphic design.",
};

export default function ResumePage() {
  return (
    <section className="resume-template" aria-labelledby="resume-title">
      <aside className="resume-template-sidebar" aria-label="Resume navigation">
        <div className="resume-template-profile">
          <div className="resume-template-photo">
            <Image
              src="/images/profile-photo.jpeg"
              alt="Precious Pukulu profile"
              fill
              sizes="500px"
              className="resume-template-image"
              priority
            />
          </div>
        </div>

        <nav className="resume-template-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = link.href === "/resume";

            return (
              <Link
                href={link.href}
                className={`resume-template-link ${isActive ? "is-active" : ""}`}
                key={link.href}
              >
                <Icon size={15} aria-hidden />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="resume-stage">
        <div className="resume-heading-row">
          <span className="resume-title-line" aria-hidden />
          <h1 id="resume-title" className="resume-title">
            Resume
          </h1>
        </div>

        <div className="resume-timeline-wrap">
          <section className="resume-section" aria-labelledby="education-title">
            <div className="resume-section-label">
              <span className="resume-section-line" aria-hidden />
              <h2 id="education-title">Education</h2>
            </div>

            <div className="resume-items">
              {education.map((item) => (
                <article className="resume-item" key={`${item.year}-${item.title}`}>
                  <span className="resume-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section" aria-labelledby="experience-title">
            <div className="resume-section-label">
              <span className="resume-section-line" aria-hidden />
              <h2 id="experience-title">Experience</h2>
            </div>

            <div className="resume-items">
              {experience.map((item) => (
                <article className="resume-item" key={`${item.year}-${item.title}`}>
                  <span className="resume-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="resume-skill-strip" aria-label="Core skills">
          <span>
            <GraduationCap size={16} aria-hidden />
            Teaching
          </span>
          <span>
            <Code2 size={16} aria-hidden />
            Software
          </span>
          <span>
            <Palette size={16} aria-hidden />
            Design
          </span>
          <span>
            <BookOpen size={16} aria-hidden />
            Learning
          </span>
        </div>

        <div className="resume-page-rail" aria-hidden>
          <span className="resume-page-line" />
          {railIcons.map((Icon, index) => (
            <span className="resume-page-icon" key={index}>
              <Icon size={15} />
            </span>
          ))}
          <span className="resume-page-line" />
        </div>

        <Award className="resume-watermark" size={220} strokeWidth={0.55} aria-hidden />
      </div>
    </section>
  );
}
