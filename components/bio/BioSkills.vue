<template>
  <div>
    <h2>Skills</h2>

    <div :class="$style.list">
      <BioSkillsCard
        :title="skill.title"
        :level="skill.level"
        :description="skill.description ?? ''"
        :key="skill.title"
        v-for="skill in skills"
      >
        <img :src="skill.icon" width="48" height="48" />
      </BioSkillsCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { skills } from "~~/constants/skills";
</script>

<style lang="scss" module>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 20px;
  column-gap: 20px;
}
</style>
