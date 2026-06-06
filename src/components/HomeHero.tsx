"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Home,
  Megaphone,
  MessageSquare,
  Send,
  User,
} from "lucide-react";

const heroIcons = [Home, User, Briefcase, MessageSquare, Megaphone, Send];

export default function HomeHero() {
  return (
    <section className="home-stage" aria-labelledby="home-title">
      <div className="edge-tab edge-tab-left" aria-hidden />
      <div className="edge-tab edge-tab-right" aria-hidden />

      <motion.div
        className="home-copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <p className="eyebrow">HI THERE!</p>
        <h1 id="home-title" className="home-title">
          I&apos;M <span>Precious</span>
        </h1>
        <p className="role-badge role-badge-gold">
          Computer Science Teacher / Software Developer
        </p>
        <p className="role-badge role-badge-dark">Graphic Designer from Malawi</p>
        <p className="home-intro">
          I create thoughtful learning experiences, clean software interfaces,
          and polished visual designs for people who care about craft.
        </p>
        <Link href="/about" className="cta-button">More About Me</Link>
      </motion.div>

      <motion.div
        className="portrait-wrap"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
      >
        <div className="orbit orbit-top" aria-hidden />
        <div className="orbit orbit-bottom" aria-hidden />
        <div className="portrait-ring">
          <Image
            src="/images/profile-photo.jpeg"
            alt="Precious Pukulu portrait"
            fill
            sizes="(max-width: 768px) 68vw, 340px"
            className="portrait-image"
            priority
          />
        </div>
        <div className="hero-icon-rail" aria-label="Portfolio navigation shortcuts">
          {heroIcons.map((Icon, index) => (
            <span key={index} className={`hero-icon hero-icon-${index + 1}`}>
              <Icon size={15} aria-hidden />
            </span>
          ))}
        </div>
        <span className="orbit-dot orbit-dot-top" aria-hidden />
        <span className="orbit-dot orbit-dot-bottom" aria-hidden />
      </motion.div>
    </section>
  );
}
