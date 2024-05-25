<template>
  <section class="breadcrumb">
    <div class="breadcrumb-container">
      <v-container class="main-container">
        <h1 class="breadcrumb-heading display-2">{{ page }}</h1>
        <v-breadcrumbs :items="items" class="pa-0 d-flex justify-center">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    page: String,
    items: Array,
  },
};
</script>

<style lang="scss">
.breadcrumb {
  text-align: center;
  background-color: #f5f5f5;
  .breadcrumb-container {
    padding: 64px 0;
  }
  .breadcrumb-heading {
    font-weight: bold;
  }
}
</style>
