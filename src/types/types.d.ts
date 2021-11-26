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
  languages: string[];
  tools: Tool[];
}

export interface ChildProps {
  children: React.ReactNode;
}

export interface TagProp extends ChildProps {
  setFilters: (value: string[]) => void;
}
