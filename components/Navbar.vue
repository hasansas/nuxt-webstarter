<template>
  <v-app-bar
    fixed
    tile
    flat
    elevate-on-scroll
    :color="isAppBarTransparent ? 'transparent' : 'white'"
  >
    <v-container class="main-container fill-height py-0">
      <v-toolbar-title class="headline font-weight-bold">
        <NuxtLink class="brand-logo" to="/">WebStarter</NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text rounded class="toolbar-menu" to="/"> Home </v-btn>
      <v-btn text rounded class="toolbar-menu" to="/blog"> Blog </v-btn>
      <v-btn text rounded class="toolbar-menu" to="/about-us"> About Us</v-btn>
      <v-btn text rounded class="toolbar-menu" to="/contact"> Contact</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return false;
        case "lg":
          return false;
        case "xl":
          return false;
      }
    },
  },
  data() {
    return {
      isAppBarTransparent: false,
    };
  },
  methods: {
    onScroll() {
      this.isAppBarTransparent = !(window.scrollY > 0);
    },
  },
  mounted() {
    if (process.client) {
      this.onScroll();
      window.addEventListener("scroll", this.onScroll);
    }
  },
};
</script>
