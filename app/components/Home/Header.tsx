import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
  return (
    <header className="relative z-20   overflow-hidden bg-white">
      <Navbar />
      <Hero />
    </header>
  );
}
