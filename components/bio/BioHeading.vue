<template>
  <section :class="$style.grid">
    <div>
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

      <p>
        I've started coding more than 15 years ago as a hobby and still love
        doing that on my work and free time.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 40px;
}

.text {
  color: var(--color-text-secondary);

  b {
    color: var(--color-text);
  }
}
</style>
