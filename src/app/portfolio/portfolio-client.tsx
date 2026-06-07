"use client";

import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
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

const railIcons = [Home, User, Briefcase, MessageSquare, Megaphone, Send];

const filters = ["All", "Teaching", "Graphic Designing", "Web Design"];

const filterDescriptions: Record<string, string> = {
  All: "Showing a mix of teaching, graphic design, and web design work.",
  Teaching: "Teaching resources, classroom projects, and student-focused learning work.",
  "Graphic Designing": "Showing some of my graphic design work: posters, flyers, branding, and visual campaigns.",
  "Web Design": "Web design work: responsive websites, interface design, and digital experiences.",
};

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

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter.toLowerCase());

  return (
    <section className="portfolio-template" aria-labelledby="portfolio-title">
      <Sidebar />

      <div className="portfolio-stage">
        <div className="portfolio-heading-row">
          <span className="portfolio-title-line" aria-hidden />
          <h1 id="portfolio-title" className="portfolio-title">
            Portfolio
          </h1>
        </div>

        <div className="portfolio-filters" aria-label="Portfolio categories">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={filter === activeFilter ? "is-active" : ""}
              aria-pressed={filter === activeFilter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {activeFilter === "Graphic Designing" ? (
          <p className="portfolio-filter-description">
            {filterDescriptions[activeFilter]}
          </p>
        ) : null}

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
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
