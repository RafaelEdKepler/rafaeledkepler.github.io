import { ListOfRepositoriesProps } from "../types";

export const repositories: ListOfRepositoriesProps = {
  repositories: [
    {
      name: "Marriage Invitation",
      description: "A personalized wedding website built to celebrate our big day, featuring a curated gift list, a short story about our journey as a couple, and a dedicated space where guests could watch the ceremony live from anywhere.",
      githubUrl: "https://github.com/RafaelEdKepler/marriage_invitation",
      technologies: ["React", "TypeScript"],
      url: "https://thaysaerafael.vercel.app/",
      image: "./marriage.png"
    },
    {
      name: "Ignite Timer",
      description: "A simple and effective web app that lets users create customizable timers to schedule regular breaks during work or study sessions, promoting focus and well-being.",
      githubUrl: "https://github.com/RafaelEdKepler/ignite-timer",
      url: "https://rek-ignite.vercel.app/",
      technologies: ["React", "TypeScript"],
      image: "./ignite.png"
    },
    {
      name: "Interactive Timeline",
      description: "This interactive timeline component was built in React as part of a technical challenge. It allows users to visualize a sequence of events horizontally, with each event occupying an optimized lane to prevent overlap. The layout is responsive, performance-conscious, and designed with flexibility in mind. Optional enhancements like drag-and-drop reordering were also explored to improve usability and interactivity.",
      githubUrl: "https://github.com/RafaelEdKepler/interactive_timeline",
      url: "https://trello-react-2jwy.vercel.app/",
      technologies: ["React", "HTML", "CSS"],
      image: "./interactive.png"
    },
    {
      name: "Beer e-commerce front",
      description: "This is a visual prototype of a beer e-commerce website built with React. While it doesn't include real purchase flows, it focuses on UI and UX, showcasing a clean, modern layout for product listings and modal interactions. The project explores advanced React features like Portals for rendering modals outside the main DOM hierarchy, and uses `styled-components` for writing scoped, dynamic CSS directly in JavaScript, enhancing component modularity and style maintainability.",
      githubUrl: "https://github.com/RafaelEdKepler/beer-ecommerce-front",
      technologies: ["React", "React Query"],
      image: "./github.png"
    },
    {
      name: "Beer e-commerce bff",
      description: "A minimal BFF service exposing two routes to fetch product lists and individual product quantities for a beer e-commerce UI.",
      githubUrl: "https://github.com/RafaelEdKepler/beer-ecommerce-front",
      technologies: ["Node.js", "Express"],
      image: "./github.png"
    },
    {
      name: "Leaf Fungus Detector",
      description: "A convolutional neural network (CNN) built with Keras to classify images of plant leaves, distinguishing between healthy and unhealthy samples. The model uses image augmentation for training and can be adapted to other classification tasks by simply replacing the training dataset. It was my Final Paper to graduate.",
      githubUrl: "https://github.com/RafaelEdKepler/leaf_fungus_detection",
      technologies: ["Python", "Keras"],
      image: "./github.png"
    },
    {
      name: "Trello Clone",
      description: "A Trello-inspired web app built with React, featuring draggable cards and columns using the React DnD library to simulate task management in a kanban-style interface.",
      githubUrl: "https://github.com/RafaelEdKepler/TrelloReact",
      technologies: ["React", "React Drag N' Drop"],
      image: "./github.png"
    }
  ]
}