<template>
  <v-card v-for="(product,index) in products" :key="index"  flat tile  max-width="240" color="#F4F5F7" class="mr-8 mb-8">
    <img height="300px" :src="product.img" style="position: relative;">
   <div v-if="product.discount ==='yes'"  class="discount-badge" >{{ product.amount }}</div>
   <div v-if="product.new ==='yes'"  class="new-badge" >{{ product.amount }}</div>
  </img>
  <v-card-title >{{ product.title }}</v-card-title>
  <v-card-subtitle>{{ product.subtitle }}</v-card-subtitle>
  <div class="d-flex align-center ml-4 mb-5 mt-3">
    <p class="mr-3 font-weight-bold ">{{ product.newprize }}</p>
    <small style="color: grey;">{{ product.oldprize }}</small>
  </div>
  
  </v-card>
</template>

<script setup>

const { products } = defineProps({
  products: {
    required: true,
    type: Array,
  },
});



</script>

<style scoped>
.discount-badge{
  position: absolute;
  top: 10px;
  right: 20px;
  border-radius: 100%;
  background-color: red;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  opacity: 0.5;
}

.new-badge{
  position: absolute;
  top: 10px;
  right: 20px;
  border-radius: 100%;
  background-color: #08b097;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  opacity: 0.7;
}

</style>
