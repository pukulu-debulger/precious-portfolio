"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, FileText, Home, Mail, Menu, MessageSquare, User, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Me", icon: User },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/portfolio", label: "Portfolio", icon: Briefcase },
  { href: "/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="mobile-menu-button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <aside className={`sidebar ${isOpen ? "is-open" : ""}`}>
        <div className="sidebar-profile">
          <div className="sidebar-photo">
            <Image
              src="/images/profile-reference.jpg"
              alt="Precious Pukulu profile"
              fill
              sizes="112px"
              className="object-cover"
              priority
            />
          </div>
          <p className="sidebar-name">Precious Pukulu</p>
        </div>

        <nav className="sidebar-nav" aria-label="Primary navigation">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`sidebar-link ${isActive ? "is-active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={15} aria-hidden />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {isOpen ? (
        <button
          type="button"
          aria-label="Close navigation overlay"
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      ) : null}
    </>
  );
}
