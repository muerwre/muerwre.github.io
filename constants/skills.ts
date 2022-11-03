import ReactLogo from "@/assets/svg/react-logo.svg";
import ReactNativeLogo from "@/assets/svg/react-native-logo.svg";
import ReactSSR from "@/assets/svg/react-ssr-logo.svg";
import TsLogo from "@/assets/svg/ts-logo.svg";
import GoLangLogo from "@/assets/svg/golang-logo.svg";
import HTMLLogo from "@/assets/svg/html-logo.svg";
import SVGLogo from "@/assets/svg/svg-logo.svg";
import ArchLogo from "@/assets/svg/arch-logo.svg";
import GQLLogo from "@/assets/svg/gql-logo.svg";
import SwaggerLogo from "@/assets/svg/swagger-logo.svg";
import VueLogo from "@/assets/svg/vue-logo.svg";
import PostgresLogo from "@/assets/svg/postgres-logo.svg";
import DockerLogo from "@/assets/svg/docker-logo.svg";

interface Skill {
  title: string;
  description?: string;
  icon: string;
  level: number;
}

export const skills: Skill[] = [
  {
    title: "React",
    description: "Classes and FC-s, hooks, context, redux, redux-saga, mobx",
    level: 5,
    icon: ReactLogo,
  },
  {
    title: "Typescript",
    description:
      "For both frontend and backend development: generics, guards, infers",
    level: 4,
    icon: TsLogo,
  },
  {
    title: "SSR (Next, Gatsby)",
    description: `Automated generation, incremental, static, and dynamic rendering`,
    level: 4,
    icon: ReactSSR,
  },
  {
    title: "Vue.js & Nuxt",
    description: `Common SPA-s and SSR blogs like this one, with composition API, and Vuex`,
    level: 3,
    icon: VueLogo,
  },
  {
    title: "React Native",
    description: `Basic developing and releasing experience without native modules`,
    level: 3,
    icon: ReactNativeLogo,
  },
  {
    title: "Golang",
    description: "Monolith and microservice apps with REST, GraphQL, and GRPC",
    level: 2,
    icon: GoLangLogo,
  },
  {
    title: "Docker",
    description:
      "Docker, docker-compose, private registries, gitlab-ci, and drone-ci",
    level: 4,
    icon: DockerLogo as string,
  },
  {
    title: "HTML, CSS, SVG",
    description:
      "Adaptive markup, all modern techniques, preprocessors, and CSS-in-JS",
    level: 5,
    icon: HTMLLogo,
  },
  {
    title: "Linux Shell",
    description:
      "Linux user since 2003, can write scripts to automate my work. BTW, I use Arch!",
    level: 4,
    icon: ArchLogo as string,
  },
  {
    title: "GraphQL",
    description:
      "Both server- and client-side. Queries, mutations, cache manipulation",
    level: 4,
    icon: GQLLogo as string,
  },
  {
    title: "REST API",
    description: "With Axios, fetch, express, gorilla-mux, and gin-gonic",
    level: 4,
    icon: SwaggerLogo as string,
  },
  {
    title: "SQL",
    description: "Base queries, JOIN-s, indexes and simpl query optimizations",
    level: 2,
    icon: PostgresLogo as string,
  },
];
