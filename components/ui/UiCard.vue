<template>
  <div :class="[$style.card, $attrs.class]">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.card {
  border-radius: 8px;
  border: 1px solid var(--color-line);
  transition: all 0.25s;

  &:hover {
    background-color: var(--color-code-background);
    border-color: var(--color-text-secondary);
  }
}
</style>
