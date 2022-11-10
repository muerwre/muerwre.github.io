<template>
  <div :class="[$attrs.class, $style.buttons]">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.buttons {
  & > * {
    margin: 0 15px 15px 0;
  }
}
</style>
