<template>
  <UiCard>
    <div :class="$style.grid">
      <div :class="$style.icon">
        <slot />
      </div>

      <div :class="$style.text">
        <h3 :class="$style.title">{{ title }}</h3>
        <UiStars :count="level" />
      </div>
    </div>

    <div :class="$style.description">
      {{ description }}
    </div>
  </UiCard>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  description: string;
  level: number;
}

defineProps<Props>();
</script>

<style lang="scss" module>
.grid {
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-column-gap: 16px;
  align-items: center;
  border-bottom: 1px solid var(--color-line);
  padding: 10px;
  transition: all 0.25s;
}

.title {
  margin: 0 0 4px 0;
}

.icon {
  display: flex;
  align-items: center;
}

.text {
  display: flex;
  flex-direction: column;
  padding-bottom: 4px;
}

.description {
  font-size: 0.9rem;
  line-height: 1.4rem;
  color: var(--color-text-secondary);
  padding: 10px;
}
</style>
