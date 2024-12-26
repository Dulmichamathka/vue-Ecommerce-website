<template>
  <Header />
  <div>
    <div class="position-relative" style="width: 100%; height: 400px">
      <img class="shopping" src="/shopping.jpeg" alt="" />

      <div class="image-content">
        <p class="topic">Shop</p>
        <small class="font-weight-medium mr-2"
          >Home<v-icon size="12">fas fa-chevron-right</v-icon>
          <span class="ml-2 font-weight-light">Shop</span>
        </small>
      </div>
    </div>
  </div>

  <div
    class="px-15 py-5 d-flex align-center ga-4"
    style="width: 100%; height: auto; background: #f9f1e7"
  >
    <v-icon size="15">fas fa-sliders</v-icon>
    <p>Filter</p>
    <v-icon size="15">fas fa-border-all</v-icon>
    <div class="vertical-line"></div>
    <small>Showing 1-16 of 32 result </small>

    <v-spacer></v-spacer>
    <p>show</p>
    <div class="amount"><small>16</small></div>
    <p>short By</p>

    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn color="white" flat tile dark v-bind="props">
          {{ activeItem }}
          <v-icon class="ml-3">fas fa-caret-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="setActiveItem(item)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { ref } from "vue";

const activeItem = ref("Default");

const setActiveItem = (item) => {
  activeItem.value = item.title;
};

const items = [{ title: "Default" }, { title: "By name" }];
</script>

<style scoped>
.v-row {
  margin: 0px;
}

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

.vertical-line {
  width: 2px;
  height: 20px;
  background: rgb(80, 80, 80);
  border-radius: 30px;
}

.amount {
  width: 30px;
  height: 30px;
  padding-left: 9px;
  padding-top: 3px;
  background-color: white;
  color: rgb(124, 120, 120);
}
</style>
