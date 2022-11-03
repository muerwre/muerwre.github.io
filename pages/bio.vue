<template>
  <article :class="$style.content">
    <section :class="$style.section">
      <BioHeading />
    </section>

    <section :class="$style.section">
      <BioSkills />
    </section>
  </article>
</template>

<script lang="ts" setup>
definePageMeta({ layout: "content" });
</script>

<style lang="scss" module>
.content {
  padding: 40px 0 0 0;
}

.section {
  padding: 40px 0;

  &:not(:last-child) {
    border-bottom: 2px solid var(--color-line);
  }
}
</style>
