<template>
  <div>
    <Breadcrumb page="Contact Us" :items="breadcrumb" />

    <section>
      <v-container class="main-container">
        <v-card flat width="900" class="mx-auto section-heading text-center">
          <h2 class="section-headline display-2">
            We love getting feedback, Questions, and hearing what you have to say!
          </h2>
        </v-card>
        <div class="mb-16">
          <v-row>
            <v-col cols="12" md="6">
              <div class="pr-16">
                <div class="display-1 font-weight-bold mb-4">Let's talk</div>
                <p class="mb-8">
                  Must explain to you how all this mistaken idea of denouncing pleasure
                  and praising born and I will give you a complete account of the system.
                </p>
                <div class="d-flex mb-4" v-for="(item, i) in contact" :key="i">
                  <div class="mr-6">
                    <v-icon color="black">{{ item.icon }}</v-icon>
                  </div>
                  <div>
                    <div class="font-weight-bold">{{ item.name }}</div>
                    {{ item.text }}
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-card outlined rounded="xl" class="pa-4">
                <v-card-title class="font-weight-bold">
                  Please feel free to contact us using form below
                </v-card-title>
                <v-form ref="form" class="pa-4">
                  <v-text-field outlined label="Your Name" required></v-text-field>
                  <v-text-field
                    outlined
                    label="Your Email Addres"
                    required
                  ></v-text-field>
                  <v-text-field outlined label="Subject" required></v-text-field>
                  <v-textarea outlined label="Enter your message" auto-grow></v-textarea>
                  <v-btn depressed large dark color="black"> Send Message </v-btn>
                </v-form>
              </v-card>
            </v-col>
          </v-row>
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
          text: "Contact Us",
          disabled: true,
          to: "/contact-us",
        },
      ],
      contact: [
        {
          name: "Phone",
          icon: "ri-phone-line",
          text: "(255) 462-6778",
        },
        {
          name: "Email",
          icon: "ri-at-line",
          text: "company@domain.com",
        },
        {
          name: "Facebook",
          icon: "ri-facebook-circle-line",
          text: "https://twitter.com",
        },
        {
          name: "Twitter",
          icon: "ri-twitter-x-line",
          text: "https://facebook.com",
        },
        {
          name: "Linkedin",
          icon: "ri-linkedin-box-line",
          text: "company@domain.com",
          text: "https://linkedin.com",
        },
        {
          name: "Instagram",
          icon: "ri-instagram-line",
          text: "company@domain.com",
          text: "https://instagram.com",
        },
        {
          name: "Office",
          icon: "ri-map-pin-line",
          text: "Suite 382 60896 Jeannine Terrace, Oberbrunnerchester, NM 62073-0832",
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
