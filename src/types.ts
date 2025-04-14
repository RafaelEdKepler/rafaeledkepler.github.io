export interface RepositoriesProps {
  name: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  image: string;
  url?: string;
}


export interface ListOfRepositoriesProps {
  repositories: RepositoriesProps[];
}