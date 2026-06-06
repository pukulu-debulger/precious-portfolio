"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

const roles = ["Computer Science Teacher", "Software Developer", "Graphic Designer"];

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
        <div className="role-badges" aria-label="Professional roles">
          {roles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
        <p className="home-location">
          <MapPin size={16} aria-hidden />
          Malawi
        </p>
        <p className="home-intro">
          I build thoughtful learning experiences, polished digital products,
          and clean visual systems for people who care about craft.
        </p>
        <Link href="/about" className="cta-button">
          More About Me
          <ArrowRight size={17} aria-hidden />
        </Link>
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
            src="/images/profile-reference.jpg"
            alt="Precious Pukulu portrait"
            fill
            sizes="(max-width: 768px) 68vw, 360px"
            className="object-cover"
            priority
          />
        </div>
        <span className="spark-point spark-one" aria-hidden>
          <Sparkles size={18} />
        </span>
        <span className="spark-point spark-two" aria-hidden />
      </motion.div>
    </section>
  );
}
