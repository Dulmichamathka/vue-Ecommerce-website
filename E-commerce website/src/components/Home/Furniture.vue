<template>
  <v-container fluid>
    <v-row class="d-flex align-center justify-center">
      <div style="text-align: center">
        <p class="font-weight-medium">Share Your Setup with</p>
        <h1 class="font-weight-bold">#FuniroFurniture</h1>
      </div>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="5">
        <div class="d-flex align-end flex-wrap ga-3 mb-3">
          <img
            style="width: 200px; height: 350px; object-fit: cover"
            src="/12.png"
            alt="furniture"
          />
          <img
            style="width: 390px; height: 300px; object-fit: cover"
            src="/14.png"
            alt="furniture"
          />
        </div>
        <div class="d-flex flex-wrap ga-3">
          <img
            style="width: 300px; height: 350px; object-fit: cover"
            src="/16.png"
            alt="furniture"
          />
          <img
            style="width: 290px; height: 300px; object-fit: cover"
            src="/15.png"
            alt="furniture"
          />
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="2" class="d-flex align-center">
        <div class="d-flex flex-wrap ga-3 mb-3">
          <img
            style="width: 230px; height: 350px; object-fit: cover"
            src="/17.png"
            alt="furniture"
          />
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="5">
        <div class="d-flex align-end flex-wrap ga-3 mb-3">
          <img
            style="width: 390px; height: 300px; object-fit: cover"
            src="/18.png"
            alt="furniture"
          />
          <img
            style="width: 200px; height: 350px; object-fit: cover"
            src="/19.png"
            alt="furniture"
          />
        </div>
        <div class="d-flex flex-wrap ga-3">
          <img
            style="width: 300px; height: 350px; object-fit: cover"
            src="/20.png"
            alt="furniture"
          />
          <img
            style="width: 290px; height: 300px; object-fit: cover"
            src="/21.png"
            alt="furniture"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px); /* Start slightly below */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Move into position */
  }
}

img {
  opacity: 0;
  animation: fadeIn 1s ease forwards; /* 1-second animation with a fade-in effect */
}

img:nth-child(odd) {
  animation-delay: 0.3s; /* Stagger animations for odd images */
}

img:nth-child(even) {
  animation-delay: 0.6s; /* Stagger animations for even images */
}
</style>
