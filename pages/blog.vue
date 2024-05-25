<template>
  <div>
    <Breadcrumb page="Blog" :items="breadcrumb" />

    <section>
      <v-container class="main-container">
        <div class="mb-16">
          <v-row>
            <v-col cols="12" md="4" v-for="i in 9" :key="i">
              <v-card outlined rounded="xl" class="pa-2">
                <v-card flat rounded="lg" color="grey lighten-3" class="ma-4">
                  <v-img
                    :aspect-ratio="16 / 9"
                    src="https://picsum.photos/510/300?random"
                  ></v-img>
                </v-card>
                <v-card-text>
                  <v-chip small class="mb-4">Marketing</v-chip>
                  <NuxtLink to="/" class="title font-weight-bold two-line black--text">
                    How Content Generators Work & How To Use Them Effectively
                  </NuxtLink>
                </v-card-text>

                <v-list-item>
                  <v-list-item-avatar color="grey lighten-3">
                    <v-img src="https://picsum.photos/510/300?random"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">
                      Ashley Lawson
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      <span>Feb 10, 2023</span>
                      <span class="mx-2"><v-icon size="4">ri-circle-fill</v-icon></span>
                      <span> 11 min ago</span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div class="text-center">
          <v-btn depressed rounded large dark color="black">
            <span class="mr-4"> Load More </span>
            <v-icon size="20">ri-arrow-right-line</v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumb: [
        {
          text: "Home",
          disabled: false,
          to: "/",
        },
        {
          text: "Blog",
          disabled: true,
          to: "/blog",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.two-line {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
