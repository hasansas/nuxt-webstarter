<template>
  <v-app>
    <div
      class="grow d-flex flex-column flex-nowrap"
      :style="!settingsLoaded ? 'display:none;' : ''"
    >
      <slot />
    </div>
    <v-sheet v-if="!settingsLoaded" class="loader">
      <v-container class="fill-height">
        <v-row align="center" class="text-center">
          <v-col>
            <v-progress-circular
              :size="64"
              :width="4"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-app>
</template>

<script>
import "~/assets/sass/style.sass";

export default {
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
      },
    ],
  },
  data() {
    return {
      settingsLoaded: false,
    };
  },
  mounted() {
    // TODO: get app setting
    setTimeout(() => {
      this.settingsLoaded = true;
    }, 300);
  },
};
</script>

<style lang="sass">
.loader
  position: absolute
  height: 100vh
  width: 100%
  top: 0
  left: 0
  z-index: 2000
</style>
