import { Technology, technologyIcons, technologyTitles } from "./technologies";

interface Skill {
  title: string;
  description?: string;
  icon: string;
  level: number;
}

export const skills: Skill[] = [
  {
    title: technologyTitles[Technology.React],
    description: "Classes and FC-s, hooks, context, redux, redux-saga, mobx",
    level: 5,
    icon: technologyIcons[Technology.React],
  },
  {
    title: technologyTitles[Technology.ReactNative],
    description:
      "For both frontend and backend development: generics, guards, infers",
    level: 4,
    icon: technologyIcons[Technology.Ts],
  },
  {
    title: technologyTitles[Technology.ReactSSR],
    description: `Automated generation, incremental, static, and dynamic rendering`,
    level: 4,
    icon: technologyIcons[Technology.ReactSSR],
  },
  {
    title: technologyTitles[Technology.Ts],
    description: `Common SPA-s and SSR blogs like this one, with composition API, and Vuex`,
    level: 3,
    icon: technologyIcons[Technology.Vue],
  },
  {
    title: technologyTitles[Technology.GoLang],
    description: `Basic developing and releasing experience without native modules`,
    level: 3,
    icon: technologyIcons[Technology.ReactNative],
  },
  {
    title: technologyTitles[Technology.HTML],
    description: "Monolith and microservice apps with REST, GraphQL, and GRPC",
    level: 2,
    icon: technologyIcons[Technology.GoLang],
  },
  {
    title: technologyTitles[Technology.Arch],
    description:
      "Docker, docker-compose, private registries, gitlab-ci, and drone-ci",
    level: 4,
    icon: technologyIcons[Technology.Docker],
  },
  {
    title: technologyTitles[Technology.GQL],
    description:
      "Adaptive markup, all modern techniques, preprocessors, and CSS-in-JS",
    level: 5,
    icon: technologyIcons[Technology.HTML],
  },
  {
    title: technologyTitles[Technology.Swagger],
    description:
      "Linux user since 2003, can write scripts to automate my work. BTW, I use Arch!",
    level: 4,
    icon: technologyIcons[Technology.Arch],
  },
  {
    title: technologyTitles[Technology.Vue],
    description:
      "Both server- and client-side. Queries, mutations, cache manipulation",
    level: 4,
    icon: technologyIcons[Technology.GQL],
  },
  {
    title: technologyTitles[Technology.Postgres],
    description: "With Axios, fetch, express, gorilla-mux, and gin-gonic",
    level: 4,
    icon: technologyIcons[Technology.Swagger],
  },
  {
    title: technologyTitles[Technology.Docker],
    description: "Base queries, JOIN-s, indexes and simpl query optimizations",
    level: 2,
    icon: technologyIcons[Technology.Postgres],
  },
];
