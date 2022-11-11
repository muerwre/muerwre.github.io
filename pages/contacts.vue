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

      <div :class="$style.image">
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

.text {
  padding-bottom: 40px;
}

.content {
  @include container;
}

.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  align-items: center;

  @include desktop {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @include tablet {
    gap: 20px;
    grid-template-columns: 2fr 1fr;
  }

  @include phone {
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

.image {
  @include phone {
    display: none;
  }

  img {
    max-width: 100%;
  }
}
</style>
