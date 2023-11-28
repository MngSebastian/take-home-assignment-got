import { createRouter, createWebHistory } from "vue-router";
import Houses from "./components/HousesList.vue";
import Persons from "./components/PersonsList.vue";
import Quotes from "./components/QuotesList.vue";

const routes = [
  { path: "/", redirect: "/houses" },
  { path: "/houses", component: Houses },
  { path: "/persons", component: Persons },
  { path: "/quotes", component: Quotes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
