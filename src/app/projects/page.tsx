import { Metadata } from "next";
import { getAllProjects } from "@/lib/content";
import { PortfolioArchive } from "@/components/portfolio/PortfolioArchive";

export const metadata: Metadata = {
  title: "Portfolio — Haven Constructions | Luxury Architectural Builder",
  description:
    "Explore bespoke architectural residences by Haven Constructions across Essendon, Aberfeldie, Moonee Ponds, and Ascot Vale.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main>
      <PortfolioArchive projects={projects} />
    </main>
  );
}
