<template>
  <v-divider class="mb-10"></v-divider>
  <v-row>
    <v-col cols="12" sm="12" md="4">
      <v-container class="ml-15">
        <div class="d-flex flex-column">
          <h3>Funiro</h3>
          <small style="color: grey; margin-top: 40px">
            400 University Drive Suite 200 Coral<br />
            Gables,<br />FL 33134 USA
          </small>
        </div>
      </v-container>
    </v-col>
    <v-col cols="12" sm="12" md="2" class="mt-5">
      <p style="color: grey">Links</p>
      <div class="mt-8 font-weight-medium">
        <p class="mb-8">Home</p>
        <p class="mb-8">Shop</p>
        <p class="mb-8">About</p>
        <p class="mb-8">Contact</p>
      </div>
    </v-col>
    <v-col cols="12" sm="12" md="2" class="mt-5">
      <p style="color: grey">Help</p>
      <div class="mt-8 font-weight-medium">
        <p class="mb-8">Payment Options</p>
        <p class="mb-8">Returns</p>
        <p class="mb-8">Privacy Policies</p>
      </div>
    </v-col>
    <v-col cols="12" sm="12" md="4" class="mt-5">
      <p style="color: grey">Help</p>
      <div class="mt-8 font-weight-medium">
        <div class="d-flex align-center" style="width: 350px; height: auto">
          <v-text-field
            label="Enter Your Email Address"
            variant="underlined"
          ></v-text-field>
          <div
            class="ml-4 mb-4"
            style="
              width: 100px;
              height: 40px;
              cursor: pointer;
              background-color: #b88e2f;
              padding: 9px;
              color: white;
            "
          >
            Subscribe
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-container fluid class="mx-15">
      <v-divider> </v-divider>
      <p class="my-8">2024 furino.All rights reserved</p>
    </v-container>
  </v-row>
</template>

<script setup></script>
<style scoped>
.v-list-item {
  text-decoration: none;
}
</style>
