enum Language {
  HTML,
  CSS,
  JavaScript,
  Python,
  Ruby,
}

enum Tool {
  React,
  Sass,
  Ruby,
  RoR,
  Vue,
  Django,
}

export interface JobType {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  postedAt: string;
  level: string;
  contract: string;
  location: string;
  languages: Language[];
  tools: Tool[];
}

export interface ChildProps {
  children: React.ReactNode;
}
