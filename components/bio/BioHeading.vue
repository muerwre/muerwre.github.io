<template>
  <div :class="$style.grid">
    <div :class="$style.image">
      <img src="~/assets/svg/howdy.svg" />
    </div>

    <div :class="$style.text">
      <h1>Howdy!</h1>

      <p>
        My name is <b>Fedor Katurov</b>, I'm a fullstack developer from Siberia.
      </p>

      <p>
        I develop frontend applications with <b>React</b>, <b>Vue</b> and
        numerous other frameworks for the most of my time, but I'm also capable
        of doing <b>Typescript</b> and <b>Golang</b> backend.
      </p>

      <UiButtonGroup :class="$style.buttons">
        <UiActionButton href="/contacts" variant="primary">
          Contact&nbsp;me
          <template v-slot:suffix>
            <IconsSend width="22" height="22" fill="currentColor" />
          </template>
        </UiActionButton>

        <UiActionButton
          href="https://github.com/muerwre"
          target="_blank"
          variant="outline"
        >
          Visit&nbsp;my&nbsp;Github
          <template v-slot:suffix>
            <IconsGithub width="22" height="22" fill="currentColor" />
          </template>
        </UiActionButton>
      </UiButtonGroup>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
@import "@/assets/css/mixins";

.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 80px;

  @include desktop {
    display: flex;
    flex-direction: column-reverse;
  }
}

.text {
  color: var(--color-text-secondary);

  b {
    color: var(--color-text);
  }

  h1 {
    margin-top: 0;
  }

  @include desktop {
    text-align: center;
    padding-bottom: 20px;
  }
}

.image {
  text-align: center;

  img {
    width: 100%;

    @include desktop {
      max-width: 75vh;
      max-height: 50vh;
    }
  }
}

.buttons {
  margin-top: 50px;

  @include desktop {
    margin-top: 20px;
    justify-content: center;
  }
}
</style>
