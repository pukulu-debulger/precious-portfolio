"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import SocialIcons from "@/components/SocialIcons";

export default function AppChrome() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/about") {
    return null;
  }

  return (
    <>
      <Sidebar />
      <SocialIcons />
    </>
  );
}
