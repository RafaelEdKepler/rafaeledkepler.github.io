import { ListOfRepositoriesProps } from "../types";

export interface NavBarComponentProps {
  scrolled: boolean;
}

export interface ProjectsComponentProps {
  repositories: ListOfRepositoriesProps;
}

export interface ProjectCardComponentProps {
  project: {
    name: string;
    description: string;
    githubUrl: string;
    technologies: string[];
    image: string;
    url?: string;
  }
}

export interface SkillBarComponentProps {
  visible: boolean;
  name: string;
  percentage: number;
}