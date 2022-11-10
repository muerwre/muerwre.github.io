<template>
  <div>
    <div :class="$style.header_container">
      <div :class="$style.header_content">
        <LayoutHeader />
      </div>
    </div>

    <NuxtLayout name="content">
      <slot />
    </NuxtLayout>
  </div>
</template>

<style lang="scss" module>
@import "@/assets/css/mixins";

.header_container {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(5px);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--color-background);
    z-index: 0;
    opacity: 0.95;

    @supports (backdrop-filter: blur(5px)) {
      opacity: 0.85;
    }
  }
}

.header_content {
  @include container;
  position: relative;
  z-index: 1;
}
</style>
