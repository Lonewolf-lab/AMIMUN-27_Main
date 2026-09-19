import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found — Haven Constructions",
    };
  }

  const location =
    project.details.find((d) => d.label.toLowerCase() === "location")?.value ||
    "Melbourne";

  return {
    title: `${project.title} — Haven Constructions | Custom Luxury Builder`,
    description:
      project.heading ||
      `Explore ${project.title}, a bespoke architectural residence crafted by Haven Constructions in ${location}.`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectDetail project={project} />
    </main>
  );
}
