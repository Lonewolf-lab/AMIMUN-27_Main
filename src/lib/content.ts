import { Project, PageContent } from "@/types/content";

import ascotResidence from "@/content/projects/ascot-residence.json";
import calibre from "@/content/projects/calibre.json";
import obsidian from "@/content/projects/obsidian.json";
import smallHouse from "@/content/projects/small-house.json";

import about from "@/content/pages/about.json";
import expertise from "@/content/pages/expertise.json";
import contact from "@/content/pages/contact.json";
import forArchitects from "@/content/pages/for-architects.json";

const projects: Project[] = [
  ascotResidence as unknown as Project,
  calibre as unknown as Project,
  obsidian as unknown as Project,
  smallHouse as unknown as Project,
];

const pages: Record<string, PageContent> = {
  about: about as unknown as PageContent,
  expertise: expertise as unknown as PageContent,
  contact: contact as unknown as PageContent,
  "for-architects": forArchitects as unknown as PageContent,
};

/**
 * Returns all luxury project case studies.
 */
export function getAllProjects(): Project[] {
  return projects;
}

/**
 * Returns a single project case study by its slug.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Returns static page content by slug.
 */
export function getPageContent(slug: string): PageContent | undefined {
  return pages[slug];
}
