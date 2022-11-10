<template>
  <NuxtLayout name="content">
    <main :class="$style.main">
      <HomeHeader />

      <div :class="$style.reference">
        <h1>Cheatsheet</h1>

        <div :class="$style.grid">
          <HomeContentList />
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<script>
export default {
  scrollToTop: true,
  head() {
    return {
      title: "Obsidian Garden",
    };
  },
};

definePageMeta({ layout: "landing" });
</script>

<style lang="scss" module>
@import "~~/assets/css/mixins";

.main {
  @include container;

  @include tablet {
    padding-top: 0;
  }
}

.reference {
  padding-top: 20px;
}

.grid {
  margin: 40px 5px 0;
}
</style>
