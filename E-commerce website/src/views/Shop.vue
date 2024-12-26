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
  <v-container>
    <v-row class="d-flex felx-wrap align-center justify-center mt-11">
      <FurniItem :products="Shoppingitem" />
    </v-row>
    <v-row class="d-flex ga-5 align-center justify-center">
      <v-btn
        v-for="num in totalPages"
        :key="num"
        :style="{
          backgroundColor: currentPage === num ? '#b88e2f' : '#F9F1E7',
          color: currentPage === num ? 'white' : '',
        }"
        flat
        @click="changePage(num)"
        >{{ num }}
      </v-btn>
      <v-btn color="#F9F1E7" flat @click="nextPage">Next</v-btn>
    </v-row>
  </v-container>
  <v-row>
    <div
      class="px-15 py-15 d-flex align-center ga-4 mt-8"
      style="width: 100%; height: auto; background: #f9f1e7"
    >
      <v-col cols="12" sm="12" md="2"></v-col>
      <v-col cols="12" sm="12" md="2">
        <div class="d-flex algin-center justify-center">
          <img style="height: 28px" src="/trophy.png" alt="trophy" />
          <div class="d-flex flex-column ml-2">
            <small class="font-weight-bold">High Quality</small>
            <small
              style="font-size: 10px; color: grey"
              class="font-weight-medium"
              >cratted from top materials</small
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="2">
        <div class="d-flex algin-center justify-center">
          <img style="height: 28px" src="/warranty.png" alt="trophy" />
          <div class="d-flex flex-column ml-2">
            <small class="font-weight-bold">Warrenty protection</small>
            <small
              style="font-size: 10px; color: grey"
              class="font-weight-medium"
              >Over 2 years</small
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="2">
        <div class="d-flex algin-center justify-center">
          <img style="height: 28px" src="/free.png" alt="trophy" />
          <div class="d-flex flex-column ml-2">
            <small class="font-weight-bold">Free Shipping</small>
            <small
              style="font-size: 10px; color: grey"
              class="font-weight-medium"
              >Order over 150$</small
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="2">
        <div class="d-flex algin-center justify-center">
          <img style="height: 28px" src="/support.png" alt="trophy" />
          <div class="d-flex flex-column ml-2">
            <small class="font-weight-bold">24 / 7 Support</small>
            <small
              style="font-size: 10px; color: grey"
              class="font-weight-medium"
              >Dedicated support</small
            >
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="2"></v-col>
    </div>
  </v-row>
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import FurniItem from "@/components/Home/FurniItem.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";

const activeItem = ref("Default");

const setActiveItem = (item) => {
  activeItem.value = item.title;
};

const currentPage = ref(1);
const totalPages = 3;

const changePage = (num) => {
  currentPage.value = num;
};

const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value = currentPage.value + 1;
  } else {
    currentPage.value = 1;
  }
};

const items = [{ title: "Default" }, { title: "By name" }];

const Shoppingitem = [
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
    title: "Leviosa",
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
    title: "Lolito",
    subtitle: "Luxury big sofa",
    newprize: "Rs 2.500.000",
    oldprize: "Rs 3.500.000",
  },
  {
    img: "/7.png",
    discount: "no",
    amount: "-30%",
    new: "no",
    title: "Respira",
    subtitle: "Outdoor bar table and stool",
    newprize: "Rs 500.000",
  },
  {
    img: "/8.png",
    discount: "no",
    amount: "New",
    new: "yes",
    title: "Grifo",
    subtitle: "Night lamp",
    newprize: "Rs 1.500.000",
  },
  {
    img: "/living2.jpeg",
    discount: "yes",
    amount: "-50%",
    new: "no",
    title: "Muggo",
    subtitle: "Small mug",
    newprize: "Rs 150.000",
  },
  {
    img: "/living3.jpeg",
    discount: "no",
    amount: "New",
    new: "yes",
    title: "Pingky",
    subtitle: "Cute bed set",
    newprize: "Rs 7.000.000",
    oldprize: "Rs 14.000.000",
  },
  {
    img: "/7.png",
    discount: "no",
    amount: "-30%",
    new: "no",
    title: "Potty",
    subtitle: "Minimalist flower pot",
    newprize: "Rs 500.000",
  },
  {
    img: "/8.png",
    discount: "no",
    amount: "New",
    new: "yes",
    title: "Grifo",
    subtitle: "Night lamp",
    newprize: "Rs 1.500.000",
  },
  {
    img: "/living2.jpeg",
    discount: "yes",
    amount: "-50%",
    new: "no",
    title: "Muggo",
    subtitle: "Small mug",
    newprize: "Rs 150.000",
  },
  {
    img: "/living3.jpeg",
    discount: "no",
    amount: "New",
    new: "yes",
    title: "Pingky",
    subtitle: "Cute bed set",
    newprize: "Rs 7.000.000",
    oldprize: "Rs 14.000.000",
  },
  {
    img: "/7.png",
    discount: "no",
    amount: "-30%",
    new: "no",
    title: "Potty",
    subtitle: "Minimalist flower pot",
    newprize: "Rs 500.000",
  },
  {
    img: "/living2.jpeg",
    discount: "yes",
    amount: "-50%",
    new: "no",
    title: "Muggo",
    subtitle: "Small mug",
    newprize: "Rs 150.000",
  },
  {
    img: "/living3.jpeg",
    discount: "no",
    amount: "New",
    new: "yes",
    title: "Pingky",
    subtitle: "Cute bed set",
    newprize: "Rs 7.000.000",
    oldprize: "Rs 14.000.000",
  },
  {
    img: "/7.png",
    discount: "no",
    amount: "-30%",
    new: "no",
    title: "Potty",
    subtitle: "Minimalist flower pot",
    newprize: "Rs 500.000",
  },
];
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

.v-btn {
  text-transform: capitalize;
}

.v-btn--size-default {
  min-width: 40px;
}
</style>
