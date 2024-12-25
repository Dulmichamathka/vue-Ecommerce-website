<template>
  <v-container>
    <v-row class="d-flex align-center justify-center">
      <div style="text-align: center">
        <h1 class="font-weight-bold">Our Products</h1>
      </div>
    </v-row>
    <v-row class="d-flex felx-wrap align-center justify-center mt-11">
      <FurniItem :products="productsitem" />
    </v-row>
    <v-row class="d-flex justify-center">
      <v-btn outlined flat>Show More</v-btn>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-btn {
  margin-top: 0px;
  padding: 0 60px;
  text-transform: capitalize;
  border: 2px solid #e3af36;
  color: #e3af36;
}

.v-btn.v-btn--density-default {
  height: calc(var(--v-btn-height) + 6px);
}
</style>

<script setup>
import FurniItem from "./FurniItem.vue";

const productsitem = [
  {
    img: "/4.png",
    discount: "yes",
    amount: "-30%",
    new: "no",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/5.png",
    discount: "no",
    amount: "-30%",
    new: "no",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/6.png",
    discount: "yes",
    amount: "-50%",
    new: "no",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/living.jpeg",
    discount: "no",
    amount: "New",
    new: "yes",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/7.png",
    discount: "no",
    amount: "-30%",
    new: "no",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/8.png",
    discount: "no",
    amount: "New",
    new: "yes",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/living2.jpeg",
    discount: "yes",
    amount: "-50%",
    new: "no",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/living3.jpeg",
    discount: "no",
    amount: "New",
    new: "yes",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
];
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
