<template>
  <article :class="$style.content">
    <section :class="[$style.section, $style.heading]">
      <BioHeading />
    </section>

    <section :class="$style.section">
      <BioSkills />
    </section>

    <section :class="$style.section">
      <BioProjects />
    </section>
  </article>
</template>

<script lang="ts">
export default {
  scrollToTop: true,
  head() {
    return {
      title: "About Me",
    };
  },
};

definePageMeta({ layout: "landing" });
</script>

<style lang="scss" module>
@import "@/assets/css/mixins";

.content {
  @include container;
}

.section {
  padding: 40px 0;

  &.heading {
    padding-bottom: 0;
  }
}

.heading {
  @include desktop {
    padding-top: 0;
    padding-top: 20px;
  }
}
</style>
