import ReactLogo from "@/assets/svg/react-logo.svg";
import ReactNativeLogo from "@/assets/svg/react-native-logo.svg";
import ReactSSRLogo from "@/assets/svg/react-ssr-logo.svg";
import TsLogo from "@/assets/svg/ts-logo.svg";
import GoLangLogo from "@/assets/svg/golang-logo.svg";
import HTMLLogo from "@/assets/svg/html-logo.svg";
import ArchLogo from "@/assets/svg/arch-logo.svg";
import GQLLogo from "@/assets/svg/gql-logo.svg";
import SwaggerLogo from "@/assets/svg/swagger-logo.svg";
import VueLogo from "@/assets/svg/vue-logo.svg";
import PostgresLogo from "@/assets/svg/postgres-logo.svg";
import DockerLogo from "@/assets/svg/docker-logo.svg";

export enum Technology {
  React = "React",
  ReactNative = "ReactNative",
  ReactSSR = "ReactSSR",
  Ts = "Ts",
  GoLang = "GoLang",
  HTML = "HTML",
  Arch = "Arch",
  GQL = "GQL",
  Swagger = "Swagger",
  Vue = "Vue",
  Postgres = "Postgres",
  Docker = "Docker",
}

export const technologyIcons: Record<Technology, string> = {
  [Technology.React]: ReactLogo,
  [Technology.ReactNative]: ReactNativeLogo,
  [Technology.ReactSSR]: ReactSSRLogo,
  [Technology.Ts]: TsLogo,
  [Technology.GoLang]: GoLangLogo,
  [Technology.HTML]: HTMLLogo,
  [Technology.Arch]: ArchLogo,
  [Technology.GQL]: GQLLogo,
  [Technology.Swagger]: SwaggerLogo,
  [Technology.Vue]: VueLogo,
  [Technology.Postgres]: PostgresLogo,
  [Technology.Docker]: DockerLogo,
};

export const technologyTitles: Record<Technology, string> = {
  [Technology.React]: "React",
  [Technology.ReactNative]: "Typescript",
  [Technology.ReactSSR]: "SSR (Next, Gatsby)",
  [Technology.Ts]: "Vue.js & Nuxt",
  [Technology.GoLang]: "React Native",
  [Technology.HTML]: "Golang",
  [Technology.Arch]: "Docker",
  [Technology.GQL]: "HTML, CSS, SVG",
  [Technology.Swagger]: "Linux Shell",
  [Technology.Vue]: "GraphQL",
  [Technology.Postgres]: "REST API",
  [Technology.Docker]: "SQL",
};
