<template>
  <v-footer>
    <v-divider></v-divider>
    <v-container class="main-container">
      <div class="footer-body">
        <v-row>
          <v-col cols="12" lg="3" md="6" sm="6">
            <h3 class="brand-name">WebStarter</h3>
            <div class="footer-menu">
              <div class="footer-menu-title">Follow Us</div>
              <NuxtLink v-for="(item, i) in sosmed" :key="i" to="/" class="mr-4">
                <v-icon size="28" color="black">{{ item.icon }}</v-icon>
              </NuxtLink>
            </div>
          </v-col>
          <v-col lg="3" md="6" sm="6">
            <div class="footer-menu d-flex flex-column">
              <div class="footer-menu-title">Resources</div>
              <NuxtLink v-for="(item, i) in resources" :key="i" to="/">
                {{ item.label }}
              </NuxtLink>
            </div>
          </v-col>
          <v-col lg="3" md="6" sm="6">
            <div class="footer-menu d-flex flex-column">
              <div class="footer-menu-title">Features</div>
              <NuxtLink v-for="(item, i) in features" :key="i" to="/">
                {{ item.label }}
              </NuxtLink>
            </div>
          </v-col>
          <v-col lg="3" md="6" sm="6">
            <div class="footer-menu d-flex flex-column">
              <div class="footer-menu-title">Contact</div>
              <div class="footer-contact">
                <div
                  class="footer-contact-item d-flex mb-4"
                  v-for="(item, i) in contact"
                  :key="i"
                >
                  <div class="footer-contact-item-icon mr-4">
                    <v-icon>{{ item.icon }}</v-icon>
                  </div>
                  <div class="footer-contact-item-text">
                    {{ item.text }}
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-divider></v-divider>
    <div class="footer-bottom">
      <v-container class="main-container">
        <p class="ma-0">Copyright © {{ getYear() }}. All rights reserved.</p>
      </v-container>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      sosmed: [
        {
          name: "facebook",
          icon: "ri-facebook-circle-line",
        },
        {
          name: "twitter",
          icon: "ri-twitter-x-line",
        },
        {
          name: "linkedin",
          icon: "ri-linkedin-box-line",
        },
        {
          name: "instagram",
          icon: "ri-instagram-line",
        },
      ],
      resources: [
        { label: "Help center" },
        { label: "Docs" },
        { label: "Roadmap" },
        { label: "Changelog" },
      ],
      features: [
        { label: "Affiliates" },
        { label: "Portal" },
        { label: "Jobs" },
        { label: "Sponsors" },
      ],
      company: [
        { label: "About" },
        { label: "Pricing" },
        { label: "Careers" },
        { label: "Blog" },
      ],
      contact: [
        {
          name: "address",
          icon: "ri-map-pin-line",
          text: "Suite 382 60896 Jeannine Terrace, Oberbrunnerchester, NM 62073-0832",
        },
        {
          name: "phone",
          icon: "ri-phone-line",
          text: "(255) 462-6778",
        },
        {
          name: "email",
          icon: "ri-at-line",
          text: "company@domain.com",
        },
      ],
    };
  },
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss">
.v-footer {
  background-color: white !important;
  display: block !important;
  padding: 0 !important;
  .brand-name {
    font-weight: bold;
    margin-top: 0 !important;
    margin-bottom: 64px !important;
  }
  .footer-menu {
    .footer-menu-title {
      font-weight: bold;
      margin-bottom: 32px;
    }
    a {
      padding: 8px 0;
    }
  }
  .footer-body {
    padding: 64px 0;
  }
  .footer-bottom {
    padding: 8px 0;
  }
}
</style>
