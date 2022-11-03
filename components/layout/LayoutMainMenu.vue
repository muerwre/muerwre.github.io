<template>
  <nav>
    <div :class="$style.logo">
      <NuxtLink to="/">
        <div :class="$style.title">Obsidian Garden</div>
        <div :class="$style.subtitle">by muerwre</div>
      </NuxtLink>
    </div>

    <div :class="$style.section_title">Cheatsheet</div>

    <div v-for="item in parentItems" key="item._path" :class="$style.row">
      <LayoutMainMenuRow
        :title="item.title"
        :url="item._path"
        :children="item.children"
      />
    </div>
  </nav>
</template>

<script setup>
const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation();
});

const parentItems = navigation.value.filter(
  (it) => it.children && Array.isArray(it.children) && it.children.length > 0
);
</script>

<style lang="scss" module>
.section_title {
  font-family: var(--family-roboto-slab);
  font-weight: 600;
  margin: 2rem 0 1.5rem;
  font-size: 1.6rem;
}

.logo {
  display: flex;
  background: url("~~/assets/svg/logo.svg") no-repeat 50% 50%;
  background-size: contain;
  padding: 30px 0 15px;
  text-shadow: var(--color-menu-background) 3px 3px,
    var(--color-menu-background) -3px -3px;

  a {
    width: 100%;
    text-decoration: none;
    color: inherit;
  }
}

.logo_image {
  width: 100%;
}

.row {
  margin-bottom: 15px;
}

.title {
  font-family: var(--family-roboto-slab);
  font-weight: 700;
  font-size: 2rem;
}

.subtitle {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
}
</style>
