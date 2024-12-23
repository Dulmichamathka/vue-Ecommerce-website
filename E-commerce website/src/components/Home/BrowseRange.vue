<template>
  <v-container>
    <v-row class="d-flex align-center justify-center my-8">
      <div style="text-align: center">
        <h2 class="font-weight-bold">Browse The Range</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </v-row>
    <v-row class="d-flex align-center justify-center my-11">
      <div class="d-flex justify-center flex-column align-center">
        <v-card flat width="300px" height="400px">
          <img class="browseImg" src="/drowseimg1.png" alt="browse" />
        </v-card>
        <p class="mt-5 font-weight-medium">Dining</p>
      </div>
      <div class="d-flex justify-center flex-column align-center">
        <v-card flat width="300px" height="400px">
          <img class="browseImg" src="/browseimg2.png" alt="browse" />
        </v-card>
        <p class="mt-5 font-weight-medium">Living</p>
      </div>
      <div class="d-flex justify-center flex-column align-center">
        <v-card flat width="300px" height="400px">
          <img class="browseImg" src="/browseimg3.png" alt="browse" />
        </v-card>
        <p class="mt-5 font-weight-medium">Bedroom</p>
      </div>
    </v-row>
  </v-container>
</template>
<script setup></script>
<style scoped>
.browseImg {
  object-fit: cover;
}

.v-card {
  margin-right: 25px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.v-card:hover {
  transform: scale(1.1);
  box-shadow: 0px 10px 20px rgba(196, 142, 16, 0.4);
}
</style>
