<template>
  <div :class="$style.wrapper">
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

.wrapper {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header_container {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(5px);

  &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--top-gradient);
    z-index: 2;
  }

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
