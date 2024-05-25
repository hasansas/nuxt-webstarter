<template>
  <app-base-layout>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </app-base-layout>
</template>

<script>
import appBaseLayout from "~/layouts/base.vue";

export default {
  components: { appBaseLayout },
};
</script>
