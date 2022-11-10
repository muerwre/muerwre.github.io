<template>
  <article :class="$style.content">
    <div :class="$style.grid">
      <div :class="$style.text">
        <h1 :class="$style.title">Write me a letter!</h1>
        <div :class="$style.location">
          <b>Current Location:</b> {{ contacts.location }}
        </div>

        <div :class="$style.contacts">
          <ContactInformation />
        </div>
      </div>

      <div :class="$style.text">
        <img src="@/assets/svg/writing.svg" alt="" />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { contacts } from "~~/constants/contacts";

export default {
  data() {
    return { contacts };
  },
  scrollToTop: true,
  head() {
    return {
      title: "Contacts",
    };
  },
};

definePageMeta({ layout: "landing" });
</script>

<style lang="scss" module>
@import "@/assets/css/mixins";

.content {
  @include container;
}

.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 80px;

  @include desktop {
    display: flex;
    flex-direction: column-reverse;
  }
}

.contacts {
  margin-top: 60px;
}

.title {
  margin-bottom: 10px;
}
</style>
