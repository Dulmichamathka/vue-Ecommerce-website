<template>
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
        <router-link :to="{ name: 'home' }" class="nav-item items-center px-5"
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
</template>

<script setup></script>

<style scoped>
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
  transition: all 0.3s ease-in-out;
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
</style>
