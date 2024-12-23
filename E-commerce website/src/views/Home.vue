<template>
  <v-app>
    <v-app-bar app flat>
      <v-container
        fluid
        class="px-9 d-flex align-center"
        style="justify-content: space-between"
      >
        <router-link :to="{ name: 'home' }" class="header-logo">
          <v-icon>
            <img src="/logo.png" alt="logo" width="50px" />
          </v-icon>
          <h2 class="ml-2">Furniro</h2>
        </router-link>
        <div class="flex items-center gap-1">
          <router-link :to="{ name: 'shop' }" class="nav-item items-center px-5"
            >Home</router-link
          >
          <router-link
            :to="{ name: 'shop' }"
            class="nav-item inline-flex items-center px-5"
            >Shop</router-link
          >
          <router-link
            :to="{ name: 'shop' }"
            class="nav-item inline-flex items-center px-5"
            >About</router-link
          >
          <router-link
            :to="{ name: 'shop' }"
            class="nav-item inline-flex items-center h-full px-5 font-bold"
            >Contact</router-link
          >
        </div>

        <div>
          <v-icon class="icon" icon="fas fa-user"></v-icon>
          <v-icon class="icon" icon="fas fa-magnifying-glass"></v-icon>
          <v-icon class="icon" icon="fas fa-heart"></v-icon>
          <v-icon class="icon" icon="fas fa-cart-shopping"></v-icon>
        </div> </v-container
    ></v-app-bar>

    <img src="/home.jpeg" class="home" alt="home" />
    <div class="card px-8 py-10">
      <div class="d-flex" style="flex-direction: column">
        <p style="font-weight: 500">New Arrival</p>
        <h1
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
      <v-btn flat tile color="#b88e2f">Buy now</v-btn>
    </div>
    <BrowseRange />
    <Products />
  </v-app>
</template>

<script setup>
import BrowseRange from "@/components/Home/BrowseRange.vue";
import Products from "@/components/Home/Products.vue";
</script>

<style scoped>
.home {
  height: 100vh;
  object-fit: cover;
  position: relative;
}

.header-logo {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
}
.nav-item {
  text-decoration: none;
  color: black;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;

  border-radius: 2px;
}

.nav-item:hover {
  background-color: #b88e2f;
  color: white;
  transform: scale(1.1);
}

.icon {
  font-size: 20px;
  margin-right: 35px;
  color: #b88e2f;
  cursor: pointer;
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
</style>
