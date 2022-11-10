<template>
  <div :class="$style.header">
    <NuxtLink to="/" :activeClass="$style.active">Home</NuxtLink>
    <NuxtLink to="/bio" :activeClass="$style.active">About me</NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.header {
  text-align: left;
  padding: 22px 0;

  a {
    color: var(--color-text);
    text-decoration: none;
    padding: 0 25px 0 0;
    position: relative;

    &.active {
      color: var(--color-link);

      &::after {
        right: 28px;
        left: 3px;
        background: var(--color-link);
      }
    }

    &::after {
      content: "";
      background: var(--color-text);
      position: absolute;
      height: 2px;
      bottom: -6px;
      left: 50%;
      right: 50%;
      transition: all 0.25s;
    }
  }
}
</style>
