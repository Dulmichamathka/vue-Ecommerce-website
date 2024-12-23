<template>
  <v-container>
    <v-row class="d-flex align-center justify-center">
      <div style="text-align: center">
        <h1 class="font-weight-bold">Our Products</h1>
      </div>
    </v-row>
    <v-row class="d-flex felx-wrap align-center justify-center my-11">
      <FurniItem />
    </v-row>
  </v-container>
</template>
<script setup>
import FurniItem from "./FurniItem.vue";
</script>
