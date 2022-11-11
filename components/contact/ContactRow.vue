<template>
  <UiCard :class="$style.row" @click="openWindow">
    <div :class="$style.grid">
      <div :class="$style.icon"><slot /></div>
      <div :class="$style.text">
        <div :class="$style.label">{{ label }}</div>
        <NuxtLink :to="href" target="_blank" :class="$style.link">
          {{ value }}
        </NuxtLink>
      </div>
    </div>
  </UiCard>
</template>

<script lang="ts" setup>
interface Props {
  value: string;
  href: string;
  label: string;
}

const props = defineProps<Props>();

const openWindow = () => window.open(props.href);
</script>

<style lang="scss" module>
.row {
  cursor: pointer;
  padding: 10px 20px 10px 14px;
  text-align: left;
}

.grid {
  display: grid;
  grid-template-columns: 24px 1fr;
  align-items: center;
  gap: 16px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link {
  text-decoration: none;
}

.label {
  font-size: 0.8em;
  color: var(--color-text);
  margin-bottom: 2px;
}
</style>
