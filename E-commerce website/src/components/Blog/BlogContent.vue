<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="9">
        <v-row>
          <div
            v-for="(item, index) in items"
            :key="index"
            style="width: 820px; height: auto; margin-top: 30px"
          >
            <img :src="item.image" height="500px" class="rounded-lg" />

            <div class="d-flex mt-4 ga-8">
              <div class="d-flex align-start">
                <v-icon class="mr-2" size="15" color="grey">
                  fas fa-user</v-icon
                >
                <small style="color: grey">Admin</small>
              </div>
              <div class="d-flex align-start">
                <v-icon class="mr-2" size="15" color="grey">
                  fas fa-calendar-days</v-icon
                >
                <small style="color: grey">26 Dec 2024</small>
              </div>
              <div class="d-flex align-start">
                <v-icon class="mr-2" size="18" color="grey"> fas fa-tag</v-icon>
                <small style="color: grey">Wood</small>
              </div>
            </div>

            <p style="font-size: 20px" class="my-3 font-weight-medium">
              {{ item.topic }}
            </p>
            <p
              style="
                color: #999898;
                text-align: justify;
                font-size: 14px;
                line-height: 1.6;
              "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              delectus rerum odio voluptatem, laboriosam eveniet labore, autem
              ut ex corporis, dolores veritatis consequuntur? Ut illo dolorum
              amet commodi quam impedit!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Omnis delectus rerum odio voluptatem, laboriosam
              eveniet labore, autem ut ex corporis, dolores veritatis
              consequuntur? Ut illo dolorum amet commodi quam impedit!Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus
              rerum odio voluptatem, laboriosam eveniet labore, autem ut ex
              corporis, dolores veritatis consequuntur? Ut illo dolorum amet
              commodi quam impedit!
            </p>

            <p class="mt-7 mb-2">Read more</p>
            <div
              style="
                width: 80px;
                height: 2px;
                border-radius: 10px;
                background-color: black;
                margin-left: 4px;
              "
            ></div>
          </div>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <v-text-field
          class="my-4"
          :loading="loading"
          append-inner-icon="fas fa-search"
          density="compact"
          flat
          label="Search templates"
          variant="outlined"
          hide-details
          single-line
          @click:append-inner="onClick"
        ></v-text-field>
        <div class="pa-4">
          <p class="font-weight-bold">Categories</p>
          <div class="d-flex my-8">
            <small style="color: #999898">Cafts</small><v-spacer></v-spacer>

            <small style="color: #999898">2</small>
          </div>
          <div class="d-flex my-8">
            <small style="color: #999898">Design</small><v-spacer></v-spacer>

            <small style="color: #999898">8</small>
          </div>
          <div class="d-flex my-8">
            <small style="color: #999898">HandMade</small><v-spacer></v-spacer>

            <small style="color: #999898">7</small>
          </div>
          <div class="d-flex my-8">
            <small style="color: #999898">Interior</small><v-spacer></v-spacer>

            <small style="color: #999898">1</small>
          </div>
          <div class="d-flex my-8">
            <small style="color: #999898">Wood</small><v-spacer></v-spacer>

            <small style="color: #999898">6</small>
          </div>
        </div>

        <div class="pa-4 mt-8">
          <p class="font-weight-bold">Recent Posts</p>
          <div v-for="(post, index) in posts" :key="index" class="d-flex mt-7">
            <div style="width: 50px; height: 50px">
              <img
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 8px;
                "
                :src="post.img"
              />
            </div>
            <div class="ml-3">
              <p style="font-size: 11px">
                {{ post.topic }}<br />{{ post.subtopic }}
              </p>
              <p style="color: #999898; font-size: 10px">{{ post.date }}</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const items = [
  { image: "/blog1.jpeg", topic: "Going all-in with millennial design" },
  { image: "/blog2.jpeg", topic: "Exploring new ways of decorating" },
  { image: "/blog3.jpeg", topic: "Handmade pieces that took time to make" },
];

const posts = [
  {
    img: "/post1.jpeg",
    topic: "Going all-in with ",
    subtopic: "millennial design",
    date: "03 Aug 2024",
  },
  {
    img: "/post2.jpeg",
    topic: "Exploring new ways ",
    subtopic: "of decorating",
    date: "03 Aug 2024",
  },
  {
    img: "/post3.jpeg",
    topic: "Handmade pieces ",
    subtopic: "that took time to make",
    date: "03 Aug 2024",
  },
  {
    img: "/post4.jpeg",
    topic: "Modern home in ",
    subtopic: "Milan",
    date: "03 Aug 2024",
  },
  {
    img: "/post5.jpeg",
    topic: "Colorful office ",
    subtopic: "redesign",
    date: "03 Aug 2024",
  },
];
</script>

<style scoped>
img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
</style>
