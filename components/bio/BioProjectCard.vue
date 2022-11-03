<template>
  <UiCard>
    <div :class="$style.card">
      <div :class="$style.thumbnail">
        <img :src="image" :class="$style.image" :alt="name" />
      </div>

      <div :class="$style.content">
        <div :class="$style.head">
          <h3 :class="$style.title">{{ name }}</h3>

          <div :class="$style.url">
            <NuxtLink :to="url">{{ url }}</NuxtLink>
          </div>
        </div>

        <div :class="$style.description">
          {{ description }}
        </div>
      </div>

      <div :class="$style.buttons">
        <UiActionButton :href="source" variant="outline" _target="blank">
          Source Code

          <template v-slot:suffix>
            <IconsCode width="22" height="22" fill="currentColor" />
          </template>
        </UiActionButton>

        <UiActionButton :href="url" variant="outline" _target="blank">
          Visit
          <template v-slot:suffix>
            <IconsArrowRight width="22" height="22" fill="currentColor" />
          </template>
        </UiActionButton>
      </div>
    </div>
  </UiCard>
</template>

<script lang="ts" setup>
interface Props {
  name: string;
  description: string;
  url: string;
  source: string;
  image: string;
}

defineProps<Props>();
</script>

<style lang="scss" module>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.thumbnail {
  height: 250px;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid var(--color-line);
  overflow: hidden;
}

.image {
  object-fit: cover;
  width: 100%;
  height: auto;
}

.content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.head {
  margin-bottom: 16px;
}
.title {
  margin: 0 0 4px 0;
}

.url {
  font-size: 0.9em;
}

.description {
  font-size: 0.9em;
  line-height: 1.5em;
  color: var(--color-text-secondary);
  white-space: pre-line;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  padding: 16px;
}
</style>
