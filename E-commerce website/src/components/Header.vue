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
          :to="{ name: 'blog' }"
          class="nav-item inline-flex items-center px-5"
          >Blog</router-link
        >
        <router-link
          :to="{ name: 'contact' }"
          class="nav-item inline-flex items-center h-full px-5 font-bold"
          >Contact</router-link
        >
      </div>

      <div>
        <v-icon class="icon" icon="fas fa-user"></v-icon>
        <v-icon class="icon" icon="fas fa-magnifying-glass"></v-icon>
        <v-icon class="icon" icon="fas fa-heart"></v-icon>

        <!-- Cart Icon and Overlay -->
        <v-overlay
          activator="parent"
          location-strategy="connected"
          scroll-strategy="block"
        >
          <template #activator="{ props }">
            <v-icon
              v-bind="props"
              class="icon"
              icon="fas fa-cart-shopping"
            ></v-icon>
          </template>

          <!--Cart Overlay Content -->
          <v-card
            class="cart-popup d-flex flex-column justify-space-between"
            elevation="2"
          >
            <v-card-title class="text-h6 font-weight-bold">
              Shopping Cart
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col>
                  <div
                    v-for="(item, index) in cartItems"
                    :key="index"
                    class="cart-item d-flex align-center mt-5 pa-2"
                    style="cursor: pointer"
                  >
                    <div style="width: 50px; height: 50px; cursor: pointer">
                      <img
                        :src="item.image"
                        width="100%"
                        height="100%"
                        style="
                          object-fit: cover;
                          border-radius: 5px;
                          background-color: bisque;
                        "
                      />
                    </div>
                    <div class="ml-5">
                      <p class="mb-0 text-subtitle-2">{{ item.name }}</p>
                      <small
                        >{{ item.quantity }} &nbsp;&nbsp;x
                        <span style="color: #b88e2f">
                          &nbsp;&nbsp;Rs {{ item.price.toLocaleString() }}</span
                        ></small
                      >
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                      <v-icon
                        size="16"
                        color="grey"
                        @click="removeCardItem(index)"
                      >
                        fas fa-circle-xmark</v-icon
                      >
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>

            <div>
              <div class="d-flex justify-space-around my-4">
                <small>Subtotal</small>
                <small style="color: #b88e2f">
                  Rs. {{ subtotal.toLocaleString() }}</small
                >
              </div>
              <v-divider></v-divider>
              <div class="d-flex">
                <v-btn
                  variant="outlined"
                  class="rounded-xl px-6 ml-3 my-4"
                  style="font-size: x-small; text-transform: capitalize"
                  >Cart</v-btn
                >
                <v-btn
                  variant="outlined"
                  class="rounded-xl px-5 ml-3 my-4"
                  style="font-size: x-small; text-transform: capitalize"
                  >Checkout</v-btn
                >
                <v-btn
                  variant="outlined"
                  class="rounded-xl px-4 ml-3 my-4"
                  style="font-size: x-small; text-transform: capitalize"
                  >comparison</v-btn
                >
              </div>
            </div>
          </v-card>
        </v-overlay>
      </div>
    </v-container></v-app-bar
  >
</template>

<script setup>
import { ref, computed } from "vue";

const cartItems = ref([
  {
    name: "Asgaard Sofa",
    image: "/cart1.png",
    price: 250000,
    quantity: 1,
  },
  {
    name: "Casaliving Wood",
    image: "/cart2.jpeg",
    price: 270000,
    quantity: 2,
  },
]);

/*any changes to it (like adding or removing items) will automatically trigger a re-render of the UI.*/

const removeCardItem = (index) => {
  cartItems.value.splice(index, 1);
};

const subtotal = computed(() => {
  return cartItems.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});
</script>

<style scoped>
.cart-popup {
  position: fixed;
  top: 0px;
  right: 10px;
  width: 350px;
  height: 500px;
  z-index: 2001;
  background-color: white;
  border-radius: 4px;
  padding: 10px;
}

.v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + -8px);
}

div.cart-item:hover {
  background-color: rgb(204, 204, 204);
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
