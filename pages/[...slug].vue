<template>
  <main :class="$style.content">
    <ContentDoc>
      <template v-slot="{ doc }">
        <h1>{{ doc.title }}</h1>
        <article>
          <ContentRenderer :value="doc" />
        </article>
      </template>

      <template v-slot:not-found="{ props: { path } }">
        <HomeReference :url="path" />
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} • Obsidian Garden` : "Obsidian Garden";
  },
});
</script>

<script lang="ts">
export default {
  scrollToTop: true,
};
</script>

<style lang="scss" module>
@import "@/assets/css/mixins";

.content {
  @include container;
}
</style>
