<template>
  <div>
    <Breadcrumb page="Blog" :items="breadcrumb" />

    <section>
      <v-container class="main-container">
        <v-row>
          <!-- post -->
          <v-col cols="12" md="8">
            <v-card flat class="post-image">
              <v-img
                :aspect-ratio="16 / 9"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              ></v-img>
            </v-card>

            <h2 class="post-title display-1">
              How to promote your product with this awesome landing page
            </h2>
            <div class="post-content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              <h5>Why do we use it?</h5>
              <p>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </p>
              <h5>Where does it come from?</h5>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC, making it over
                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the cites of
                the word in classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                book is a treatise on the theory of ethics, very popular during the
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                amet..", comes from a line in section 1.10.32.
              </p>

              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
                for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact original
                form, accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
              <h5>Where can I get some?</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to be sure there isn't
                anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a dictionary
                of over 200 Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The generated
                Lorem Ipsum is therefore always free from repetition, injected humour, or
                non-characteristic words etc.
              </p>
            </div>
          </v-col>

          <!-- Right sidebar -->
          <v-col cols="12" md="4">
            <v-sheet class="ml-12">
              <!-- Search -->
              <v-text-field
                outlined
                filled
                hide-details
                label="Search"
                required
                class="mb-8"
              ></v-text-field>

              <!-- Categories -->
              <v-list outlined rounded class="mb-8">
                <v-subheader class="font-weight-bold">CATEGORIES</v-subheader>
                <div v-for="(item, i) in categories" :key="i">
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action> ({{ item.count }}) </v-list-item-action>
                  </v-list-item>
                </div>
              </v-list>

              <!-- Popular Post -->
              <v-list outlined rounded class="mb-8">
                <v-subheader class="font-weight-bold">POPULAR POST</v-subheader>
                <div v-for="(item, i) in categories" :key="i">
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-avatar tile color="grey lighten-3">
                      <v-img src="https://picsum.photos/510/300?random"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-subtitle>
                        <span>Feb 10, 2023</span>
                        <span class="mx-2"><v-icon size="4">ri-circle-fill</v-icon></span>
                        <span> 11 min ago</span>
                      </v-list-item-subtitle>
                      <v-list-item-title>
                        How Content Generators Work & How To Use Them Effectively
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-list>

              <!-- Tags -->
              <div class="tags">
                <v-subheader class="font-weight-bold">TAGS</v-subheader>
                <v-divider class="mb-4"></v-divider>
                <v-chip
                  label
                  outlined
                  v-for="(item, i) in categories"
                  :key="i"
                  class="mr-2 mb-2"
                >
                  {{ item.name }}
                </v-chip>
              </div>
            </v-sheet>
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
          text: "Blog",
          disabled: false,
          to: "/blog",
        },
        {
          text: "Read",
          disabled: true,
          to: "/#",
        },
      ],
      categories: [
        {
          name: "Web Design",
          count: 30,
        },
        {
          name: "App Landing",
          count: 27,
        },
        {
          name: "Wordpress",
          count: 65,
        },
        {
          name: "UI Design",
          count: 43,
        },
        {
          name: "Bootstrap",
          count: 15,
        },
        {
          name: "Web Template",
          count: 21,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.post-title {
  font-weight: bold !important;
  margin-bottom: 32px !important;
  text-transform: capitalize;
}
</style>
