<template>
  <div>
    <!-- hero -->
    <section class="hero">
      <v-container class="main-container">
        <v-card
          flat
          color="transparent"
          height="400"
          class="d-flex align-center justify-center"
        >
          <div class="text-center">
            <div class="mb-10">
              <v-chip> Made with WebStarter UI Kit </v-chip>
            </div>
            <h1 class="display-3 font-weight-bold">Build your landing in seconds</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
            <div class="mt-10">
              <v-btn depressed rounded x-large dark color="black">
                <span>Get started</span>
                <v-icon class="ml-4">ri-arrow-right-line</v-icon>
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-container>
    </section>

    <!-- features -->
    <section class="features">
      <v-container class="main-container">
        <div class="section-heading text-center">
          <div class="section-title title primary--text">Features</div>
          <h2 class="section-headline display-2">Why choose our service?</h2>
          <p class="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <v-row>
          <v-col cols="12" md="4" v-for="(item, index) in features" :key="index">
            <v-card outlined rounded="xl" class="pa-2 fill-height">
              <v-card-text class="pb-0">
                <v-icon size="32" color="black">{{ item.icon }}</v-icon>
              </v-card-text>
              <v-card-title class="subtitle-1 font-weight-bold mb-1">
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle>{{ item.description }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- testimonials -->
    <section class="testimonials">
      <v-container class="main-container">
        <div class="section-heading text-center">
          <div class="section-title title primary--text">Testimonials</div>
          <h2 class="section-headline display-2">What our customers are saying</h2>
          <p class="section-description">
            Proident sunt exercitation minim laborum enim laboris labore esse.
          </p>
        </div>

        <v-row>
          <v-col cols="12" md="4" v-for="i in 3" :key="i">
            <v-card outlined rounded="xl" class="pa-8 fill-height text-center">
              <div class="mb-4">
                <v-avatar size="80" class="mb-4">
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                </v-avatar>
                <div class="subtitle-2 font-weight-bold">John Doe</div>
                <div class="caption">Web Developer</div>
              </div>
              <p class="ma-0">
                "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet
                exercitation."
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Call to Action -->
    <section class="call-to-action" style="background: #F5F5F5">
      <v-container class="main-container">
        <v-card
          flat
          color="transparent"
          height="500"
          class="d-flex align-center justify-center"
        >
          <div class="section-heading text-center">
            <h2 class="section-headline display-2">Get started today now</h2>
            <p class="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
            <div class="mt-12">
              <v-btn depressed rounded x-large dark color="black"> Action Button </v-btn>
            </div>
          </div>
        </v-card>
      </v-container>
    </section>

    <!-- FaQ -->
    <section class="faq">
      <v-container class="main-container">
        <div class="section-heading text-center">
          <h2 class="section-headline display-2">Frequently asked questions</h2>
          <p class="section-description">
            Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt
            elit cillum.
          </p>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-expansion-panels flat>
              <v-expansion-panel v-for="(item, i) in faq" :key="i">
                <v-expansion-panel-header class="font-weight-bold">
                  {{ item.question }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ item.answer }}
                </v-expansion-panel-content>
                <v-divider></v-divider>
              </v-expansion-panel>
            </v-expansion-panels>
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
      features: [
        {
          title: "Easy to use",
          description:
            "Id laborum laboris duis nostrud excepteur ut velit nulla magna Lorem proident non.",
          icon: "ri-settings-line",
        },
        {
          title: "Reliable",
          description: "Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim.",
          icon: "ri-check-double-line",
        },
        {
          title: "Secure",
          description:
            "Proident nostrud excepteur sint ut culpa consectetur aute adipisicing non anim ullamco.",
          icon: "ri-lock-2-line",
        },
        {
          title: "Fast",
          description:
            "Qui reprehenderit nostrud dolore nisi ad fugiat labore eiusmod sint aliquip nisi voluptate.",
          icon: "ri-rocket-2-line",
        },
        {
          title: "Affordable",
          description: "Reprehenderit fugiat elit in do ipsum ut pariatur.",
          icon: "ri-money-dollar-circle-line",
        },
        {
          title: "Scalable",
          description:
            "Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est.",
          icon: "ri-pie-chart-line",
        },
      ],
      faq: [
        {
          question: "Is this a secure service?",
          answer:
            "Qui sunt nostrud aliquip reprehenderit enim proident veniam magna aliquip velit occaecat eiusmod nisi deserunt sunt.",
        },
        {
          question: "How can I cancel my subscription?",
          answer:
            "Consectetur irure Lorem nostrud adipisicing aliqua mollit Lorem sit officia magna eiusmod cupidatat.",
        },
        {
          question: "How does the free trial work?",
          answer: "Quis officia commodo magna eu qui aliquip duis.",
        },
        {
          question: "Can I switch plans later?",
          answer:
            "Dolore irure ullamco dolore eu occaecat magna eiusmod dolor aliqua culpa labore.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "Duis mollit nostrud voluptate mollit Lorem dolore commodo veniam incididunt eiusmod.",
        },
        {
          question: "Do you offer support?",
          answer: "Aliqua sit nisi consequat pariatur Lorem minim irure qui.",
        },
      ],
    };
  },
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
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss">
.section-heading {
  margin-bottom: 80px;
  .section-title {
    font-weight: bold !important;
    letter-spacing: 0.2rem !important;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      background-color: #9a9a9a;
      width: 40px;
      height: 1px;
      top: 40px;
      left: 50%;
      margin-left: -20px;
    }
    &.dark {
      &:before {
        background-color: white;
      }
    }
  }
  .section-headline {
    font-weight: bold !important;
  }
}
</style>
