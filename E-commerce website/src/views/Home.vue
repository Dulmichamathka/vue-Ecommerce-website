<template>
  <v-app>
    <Header />
    <img src="/home.jpeg" class="home" alt="home" />
    <div class="card px-8 py-10">
      <div class="d-flex" style="flex-direction: column">
        <p class="name" style="font-weight: 500">New Arrival</p>
        <h1
          class="name"
          style="
            font-size: 38px;
            font-weight: 700;
            color: #b88e2f;
            margin-bottom: 2px;
          "
        >
          Discover Our<br />
          New Collection
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          minima.
        </p>
      </div>
      <v-btn class="name" flat tile color="#b88e2f">Buy now</v-btn>
    </div>
    <BrowseRange />
    <Products />
    <Inspiration />
    <Furniture />
    <Footer />
  </v-app>
</template>

<script setup>
import BrowseRange from "@/components/Home/BrowseRange.vue";
import Furniture from "@/components/Home/Furniture.vue";
import Inspiration from "@/components/Home/Inspiration.vue";
import Products from "@/components/Home/Products.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.home {
  height: 100vh;
  object-fit: cover;
  position: relative;
}

.card {
  width: 500px;
  height: 350px;
  border-radius: 8px;
  background-color: #fff3e3;
  position: absolute;
  top: 190px;
  right: 60px;
}
.v-btn {
  margin-top: 50px;
  padding: 0 60px;
}

.v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + 20px);
}

.name {
  opacity: 0;
  animation: animate 1s ease-in-out forwards;
}

@keyframes animate {
  from {
    opacity: 0;
    transform: translate(0, 100px);
    filter: blur(33px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
