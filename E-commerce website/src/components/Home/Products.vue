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
    img: "/browseimg2.png",
    discount: "yes",
    amount: "-30%",
    new: "no",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/browseimg2.png",
    discount: "no",
    amount: "-30%",
    new: "no",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/browseimg2.png",
    discount: "yes",
    amount: "-50%",
    new: "no",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/browseimg2.png",
    discount: "no",
    amount: "New",
    new: "yes",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/browseimg2.png",
    discount: "no",
    amount: "-30%",
    new: "no",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/browseimg2.png",
    discount: "no",
    amount: "New",
    new: "yes",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/browseimg2.png",
    discount: "yes",
    amount: "-50%",
    new: "no",
    title: "Syltherine",
    subtitle: "Syltherine cafe chair",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/browseimg2.png",
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
