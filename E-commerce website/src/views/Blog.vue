<template>
  <Header />
  <div>
    <div class="position-relative" style="width: 100%; height: 400px">
      <img class="shopping" src="/shopping.jpeg" alt="" />

      <div class="image-content d-flex flex-column align-center">
        <v-icon>
          <img src="/logo.png" alt="logo" width="50px" />
        </v-icon>
        <p class="topic">Blog</p>
        <small class="font-weight-medium mr-2"
          >Home<v-icon size="12">fas fa-chevron-right</v-icon>
          <span class="ml-2 font-weight-light">Blog</span>
        </small>
      </div>
    </div>
  </div>
  <BlogContent />

  <Recommendation />
  <div class="mt-4">
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Recommendation from "@/components/Shop/Recommendation.vue";
import Footer from "@/components/Footer.vue";
import BlogContent from "@/components/Blog/BlogContent.vue";
</script>
<style scoped>
.shopping {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.image-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.topic {
  font-size: 35px;
  font-weight: 500;
}
</style>
