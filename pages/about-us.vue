<template>
  <div>
    <Breadcrumb page="About Us" :items="breadcrumb" />

    <!-- About -->
    <section>
      <v-container class="main-container">
        <div class="mb-16">
          <v-row>
            <v-col cols="12" md="6">
              <div class="mr-8">
                <v-card flat color="grey lighten-3" height="400"></v-card>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="ml-8">
                <div class="display-1 font-weight-bold mb-8">
                  We are increasing business success with IT solution
                </div>
                <p class="mb-4">
                  Collaboratively envisioneer user friendly supply chains and cross unit
                  imperative. Authoritativel fabricate competitive resource and holistic
                  synergy. Uniquely generate efficient schemas before future.
                </p>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-sheet class="d-flex align-center">
                      <v-icon size="48" color="primary">ri-medal-line</v-icon>
                      <v-card flat>
                        <v-card-title>Certified Company</v-card-title>
                        <v-card-subtitle>Best Provide Skills Services</v-card-subtitle>
                      </v-card>
                    </v-sheet>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-sheet class="d-flex align-center">
                      <v-icon size="48" color="primary">ri-group-3-line</v-icon>
                      <v-card flat>
                        <v-card-title>Expert Team</v-card-title>
                        <v-card-subtitle>100% Expert Team</v-card-subtitle>
                      </v-card>
                    </v-sheet>
                  </v-col>
                </v-row>
                <v-divider class="my-4"></v-divider>

                <div class="d-flex align-center mt-6">
                  <v-btn depressed x-large dark color="black">Button Action</v-btn>
                  <v-sheet color="transparent" class="d-flex align-center ml-16">
                    <v-btn depressed fab dark color="black" class="btn-ripple">
                      <v-icon size="32">ri-phone-line</v-icon>
                    </v-btn>
                    <v-card flat color="transparent" class="ml-2">
                      <v-card-title class="subtitle-1">Call Us On:</v-card-title>
                      <v-card-subtitle class="subtitle-1 font-weight-bold black--text">
                        (255) 462-6778
                      </v-card-subtitle>
                    </v-card>
                  </v-sheet>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </section>

    <!-- Team -->
    <section class="team">
      <v-container class="main-container">
        <div class="section-heading text-center">
          <div class="section-title title primary--text">Team Member</div>
          <h2 class="section-headline display-2">See Our Skilled Expert Team</h2>
        </div>

        <v-row>
          <v-col cols="12" md="3" v-for="i in 4" :key="i">
            <v-card flat color="grey lighten-3" class="team-container mb-16">
              <v-card outlined rounded="xl" class="team-image">
                <v-img
                  :aspect-ratio="3 / 4"
                  src="https://html.themeholy.com/webteck/demo/assets/img/team/team_1_3.jpg"
                ></v-img>
              </v-card>
              <v-card outlined rounded="xl" class="team-title">
                <v-card-title class="d-block font-weight-bold">John Pixel</v-card-title>
                <v-card-subtitle class="primary--text mb-2"
                  >Web Developer</v-card-subtitle
                >
              </v-card>
            </v-card>
          </v-col>
        </v-row>
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
          text: "About Us",
          disabled: true,
          to: "/about-us",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.team-container {
  position: relative;
  .team-title {
    position: absolute;
    left: 32px;
    right: 32px;
    bottom: -40px;
    text-align: center;
  }
}
.btn-ripple {
  position: relative;
  &:before,
  &:after {
    z-index: -1;
    content: "";
    background-color: inherit;
    animation: ripple 3s infinite ease-out;
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &:after {
    animation-delay: 2s;
  }
}

@-webkit-keyframes ripple {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
  30% {
    opacity: 0.4;
  }
  100% {
    -webkit-transform: scale(1.8);
    transform: scale(1.8);
    opacity: 0;
  }
}
@keyframes ripple {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
  30% {
    opacity: 0.4;
  }
  100% {
    -webkit-transform: scale(1.8);
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
