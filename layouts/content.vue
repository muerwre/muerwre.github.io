<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <LayoutThemeToggle :class="$style.theme_toggle" />

      <slot />
    </div>

    <LayoutFooter :class="$style.footer" />
  </div>
</template>

<style lang="scss" module>
@import "~~/assets/css/mixins";

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  flex: 1;

  @include desktop {
    padding-top: 10px;
  }
}

.content {
  flex: 1;
}

.footer {
  margin-top: 60px;
  padding: 10px;
  border-top: 1px solid var(--color-line);
}

.theme_toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  stroke: currentColor;
  stroke-width: 0.5px;
  z-index: 12;

  @include tablet {
    stroke-width: 1.5px;
    right: 16px;
    top: 16px;
  }
}
</style>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://anal.vault48.org/script.js",
          "data-website-id": "7d587423-ffda-4732-a99d-6cf60d5c9a8a",
          async: true,
        },
      ],
    };
  },
};
</script>
