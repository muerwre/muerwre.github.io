<template>
  <NuxtLink
    :class="[
      $style.button,
      $attrs.style,
      $style[`variant-${variant}`],
      $style[`size-${size}`],
      {
        [$style.prefixed]: $slots.prefix,
        [$style.suffixed]: $slots.suffix,
      },
    ]"
    :to="href"
  >
    <span v-if="$slots.prefix" :class="$style.prefix">
      <slot name="prefix" />
    </span>

    <span :class="$style.title">
      <slot />
    </span>

    <span v-if="$slots.suffix" :class="$style.suffix">
      <slot name="suffix" />
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
  href: string;
  size?: "md";
  variant?: "outline";
}

withDefaults(defineProps<Props>(), {
  size: "md",
  variant: "outline",
});
</script>

<style lang="scss" module>
.button {
  color: white;
  border-radius: 8px;
  text-decoration: none;

  &.variant-outline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--color-text) 0 0 0 1px;
    color: var(--color-text);
    overflow: hidden;
    position: relative;
    transition: all 250ms;

    &::after {
      content: " ";
      background: var(--color-primary);
      position: absolute;
      inset: 0;
      transform: scale(0);
      opacity: 0;
      transition: all 250ms;
      z-index: 0;
      border-radius: 8px;
    }

    &:hover {
      color: var(--color-background);
      box-shadow: var(--color-background) 0 0 0 1px;

      &::after {
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  &.size-md {
    height: 40px;
    padding: 0 30px;

    &.prefixed,
    &.suffixed {
      padding: 0 10px 0 20px;
    }

    &.suffixed {
      padding-right: 0 20px 0 10px;
    }
  }
}

.title {
  z-index: 1;
  position: relative;

  .size-md.prefixed & {
    padding-left: 10px;
  }

  .size-md.suffixed & {
    padding-right: 10px;
  }
}

.prefix,
.suffix {
  display: inline-flex;
  position: relative;
  z-index: 2;
}
</style>
