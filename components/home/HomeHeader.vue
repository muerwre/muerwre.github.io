<template>
  <section>
    <div :class="$style.grid">
      <div :class="$style.text">
        <h1 :class="$style.title">Welcome to&nbsp;my Obsidian&nbsp;Garden</h1>

        <p :class="$style.subtitle">
          <img src="~/assets/svg/obsidian.svg" alt="" width="14" height="14" />
          <NuxtLink to="https://obsidian.md" target="_blank">Obsidian</NuxtLink>
          is a note-taking app, that I use to store chunks of code and technical
          documentation.
        </p>

        <div :class="$style.buttons">
          <UiActionButton
            href="https://github.com/muerwre"
            target="_blank"
            variant="outline"
          >
            Visit my Github
            <template v-slot:suffix>
              <IconsArrowRight width="22" height="22" fill="currentColor" />
            </template>
          </UiActionButton>
        </div>
      </div>

      <div :class="$style.image">
        <img
          src="~/assets/svg/desk.svg"
          :class="$style.desk"
          alt="It's me, muerwre"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
@import "~~/assets/css/mixins";

.grid {
  display: grid;
  grid-template-columns: 17fr 10fr;
  column-gap: 50px;
  border-bottom: 2px solid var(--color-line);

  @include desktop {
    // grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    column-gap: 20px;
    border-bottom: none;
  }
}

.image {
  display: flex;
  align-items: flex-end;

  @include desktop {
    border-bottom: 2px solid var(--color-line);
    justify-content: center;

    .desk {
      max-width: 400px;
    }
  }
}

.title {
  font-size: 3rem;
  line-height: 3.4rem;
  margin: 0.8rem 0;

  @include phone {
    font-size: 2.5rem;
    line-height: 3rem;
  }
}

.subtitle {
  color: var(--color-text-secondary);
  max-width: 360px;

  @include desktop {
    max-width: 100%;
  }
}

.text {
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;

  @include tablet {
    text-align: center;
    padding-top: 0;
    padding-bottom: 40px;
  }
}
.desk {
  width: 100%;
}

.buttons {
  margin-top: 50px;
}
</style>
