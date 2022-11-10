<template>
  <div :class="[$attrs.class, $style.buttons]">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
@import "@/assets/css/main.scss";

.buttons {
  display: grid;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(180px, auto));
}
</style>
