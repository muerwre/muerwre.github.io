<template>
  <div :class="$style.grid">
    <ContactRow value="@vv4000" href="https://t.me/vv4000" label="Telegram">
      <IconsTelegram :width="24" :height="24" />
    </ContactRow>

    <ContactRow
      :value="`@${contacts.github}`"
      :href="`https://github.com/${contacts.github}`"
      label="Github"
    >
      <IconsGithub :width="24" :height="24" />
    </ContactRow>

    <ContactRow :value="mail" :href="`mailto:${mail}`" label="Mail">
      <IconsSend :width="24" :height="24" />
    </ContactRow>
  </div>
</template>

<script lang="ts" setup>
import { contacts } from "~~/constants/contacts";

const mail = ref("...loading");

onMounted(() => (mail.value = atob(contacts.email)));
</script>

<style lang="scss" module>
.grid {
  width: auto;
  display: grid;
  grid-auto-flow: row;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
