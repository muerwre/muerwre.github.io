import { Technology } from "./technologies";
import vault from "~~/assets/png/vault48.png";
import orchid from "~~/assets/png/orchid-map.png";
import obsidian from "~~/assets/png/obsidian-garden.png";

interface Project {
  name: string;
  description: string;
  pageUrl: string;
  codeUrl: string;
  image: string;
  technologies: Technology[];
}

export const projects: Project[] = [
  {
    name: "Vault48",
    description: `Community blog with a long 13-year history, features photo, video and audio embedding.\n\nBeeing initially written with Drupal 5, went through refactoring to Laravel + Vue and then, nowadays works on React and Golang stack.`,
    pageUrl: "https://vault48.org",
    codeUrl: "https://github.com/muerwre/vault-frontend",
    image: vault,
    technologies: [
      Technology.React,
      Technology.ReactSSR,
      Technology.GoLang,
      Technology.Postgres,
    ],
  },
  {
    name: "Orchid Map",
    description: `Local cycling community Web Maps made with React, Leaflet, and Golang.\n\nImplements automatic route building with OSRM and map rasterization with canvas. Used by users in local cycling communities for ride sharing.`,
    pageUrl: "https://map.vault48.org",
    codeUrl: "https://github.com/muerwre/orchidmap-front",
    image: orchid,
    technologies: [
      Technology.React,
      Technology.ReactSSR,
      Technology.GoLang,
      Technology.Postgres,
    ],
  },
  {
    name: "Obsidian Garden",
    description: `Frontend for personal knowledge database managed by Obsidian.md software.\n\nMade with nuxt3, nuxt-content plugin and some customizations. Deployed with drone-ci directly to github-pages.`,
    pageUrl: "https://muerwre.github.io",
    codeUrl: "https://github.com/muerwre/muerwre.github.io",
    image: obsidian,
    technologies: [
      Technology.React,
      Technology.ReactSSR,
      Technology.GoLang,
      Technology.Postgres,
    ],
  },
];
