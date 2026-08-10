// app/(frontend)/components/Home/Header.tsx
import Navbar from "./Navbar";
import Hero from "./Hero";
import type { HomePage } from "@/payload-types";

export default function Header({ hero }: { hero: HomePage["hero"] }) {
  return (
    <header className="overflow-hidden">
      <Hero hero={hero} />
    </header>
  );
}