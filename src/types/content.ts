export interface ImageSource {
  id?: string;
  alt?: string;
  caption?: string;
  sourceUrl: string;
  width?: number | string;
  height?: number | string;
  blurPlaceholder?: string;
}

export interface ProjectDetail {
  label: string;
  value: string;
}

export interface NextPostLink {
  heading: string;
  label?: string;
  description?: string | boolean;
  link: {
    target: boolean;
    title: string;
    url: string;
  };
  image?: ImageSource;
}

export interface Project {
  slug: string;
  title: string;
  colorTheme?: string;
  heading: string;
  content: string;
  details: ProjectDetail[];
  mainImage: ImageSource;
  nextPost?: NextPostLink | null;
  blocks: any[];
}

export interface PageContent {
  slug: string;
  title: string;
  blocks: any[];
  rawProps?: Record<string, any>;
}
