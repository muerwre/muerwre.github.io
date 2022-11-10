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

<script lang="ts" setup></script>

<style lang="scss" module>
@import "@/assets/css/mixins";

.header_container {
  position: sticky;
  top: 0;
  background: var(--color-background);
}

.header_content {
  @include container;
}
</style>
