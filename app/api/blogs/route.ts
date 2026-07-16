import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      title: "Top 10 Game Engines for Indie Developers in 2026",
      image: "/images/blog1.jpg",
      author: "Optimal Dive",
      category: "Development",
      slug: "game-engines",
    },
    {
      id: 2,
      title: "Designing for Impact: Motion & Interaction",
      image: "/images/blog2.jpg",
      author: "Optimal Dive",
      category: "Development",
      slug: "motion-design",
    },
    {
      id: 3,
      title: "AI Integration in Enterprise Systems",
      image: "/images/blog3.jpg",
      author: "Optimal Dive",
      category: "Design",
      slug: "ai-enterprise",
    },
  ]);
}
