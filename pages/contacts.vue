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

      <div>
        <img src="@/assets/svg/writing.svg" alt="" :class="$style.image" />
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

  @include phone {
    text-align: center;
  }
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
  max-width: 700px;

  @include phone {
    margin-top: 40px;
  }
}

.title {
  margin-bottom: 10px;
}

.image {
  max-width: 100%;

  @include phone {
    max-height: 25vh;
  }
}
</style>
