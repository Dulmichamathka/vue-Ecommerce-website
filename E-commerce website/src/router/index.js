import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "@/views/Shop.vue";
import Contact from "@/views/Contact.vue";
import Blog from "@/views/Blog.vue";
import ProductDetails from "@/views/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/productdetails",
      name: "productdetails",
      component: ProductDetails,
    },
  ],
});

export default router;
