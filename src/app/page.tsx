import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Precious Pukulu portfolio home page featuring teaching, software development, and graphic design work from Malawi.",
};

export default function Home() {
  return <HomeHero />;
}
