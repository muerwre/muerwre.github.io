<template>
  <div :class="$style.projects">
    <h2>Projects</h2>

    <div :class="$style.grid">
      <BioProjectCard
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
        :description="project.description"
        :url="project.pageUrl"
        :source="project.codeUrl"
        :image="project.image"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { projects } from "~~/constants/projects";
</script>

<style lang="scss" module>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 16px;
  row-gap: 16px;
}
</style>
