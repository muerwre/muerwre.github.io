<template>
  <section>
    <div :class="$style.grid">
      <div :class="$style.text">
        <h1 :class="$style.title">Welcome to&nbsp;my Obsidian&nbsp;Garden</h1>

        <div :class="$style.subtitle">
          <p>
            <img
              src="~/assets/svg/obsidian.svg"
              alt=""
              width="14"
              height="14"
            />
            <NuxtLink to="https://obsidian.md" target="_blank"
              >Obsidian</NuxtLink
            >
            is a note-taking app, that I use to store <b>chunks of code</b> and
            <b>technical documentation</b>. Here's the frontend for my notebook.
          </p>

          <p>There's also my Curriculum Vitae and contact info here.</p>
        </div>

        <UiButtonGroup :class="$style.buttons">
          <UiActionButton href="/contacts" variant="primary">
            Contact&nbsp;me
            <template v-slot:suffix>
              <IconsSend width="22" height="22" fill="currentColor" />
            </template>
          </UiActionButton>

          <UiActionButton href="/about" variant="outline">
            View&nbsp;Portfolio
            <template v-slot:suffix>
              <IconsBook width="22" height="22" fill="currentColor" />
            </template>
          </UiActionButton>
        </UiButtonGroup>
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
  }
}

.title {
  margin: 0.8rem 0;
}

.subtitle {
  color: var(--color-text-secondary);
  max-width: 600px;

  @include desktop {
    max-width: 100%;
  }
}

.text {
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  b {
    color: var(--color-text);
  }

  @include tablet {
    text-align: center;
    width: 100%;
    max-width: 100%;
    padding-top: 0;
    padding-bottom: 40px;
  }
}
.desk {
  max-width: 80vw;

  @include desktop {
    max-height: 50vh;
  }
}

.buttons {
  margin-top: 40px;

  @include tablet {
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
