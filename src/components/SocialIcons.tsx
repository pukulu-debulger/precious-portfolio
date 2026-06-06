"use client";

import { Mail, Send } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socials = [
  { href: "https://github.com/", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "https://www.instagram.com/", label: "Instagram", icon: FaInstagram },
  { href: "mailto:precious@example.com", label: "Email", icon: Mail },
  { href: "/contact", label: "Contact", icon: Send },
];

export default function SocialIcons() {
  return (
    <aside className="social-rail" aria-label="Social links">
      <span className="social-line" aria-hidden />
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            className="social-link"
            aria-label={social.label}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <Icon size={16} aria-hidden />
          </a>
        );
      })}
      <span className="social-line" aria-hidden />
    </aside>
  );
}
