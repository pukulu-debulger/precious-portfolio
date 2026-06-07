import type { Metadata } from "next";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio projects by Precious Pukulu across graphic designing and web design.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
