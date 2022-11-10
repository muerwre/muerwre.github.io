<template>
  <div :class="$style.rating">
    <IconsIconStar
      v-for="i in 5"
      :width="22"
      height="22"
      :class="[$style.star, { [$style.filled]: i > count }]"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  count: number;
}

defineProps<Props>();
</script>

<style lang="scss" module>
@import "~~/assets/css/mixins";

.rating {
  display: flex;
  flex-direction: row;
  margin-left: -3px;

  & > img {
    margin-right: 2px;
  }
}

.star {
  stroke: none;
  fill: currentColor;

  @include color_per_child(
    (
      var(--color-rating-1),
      var(--color-rating-2),
      var(--color-rating-3),
      var(--color-rating-4),
      var(--color-rating-5)
    )
  );

  &.filled {
    fill: var(--color-rating-0);
  }
}
</style>
