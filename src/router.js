import { createRouter, createWebHistory } from "vue-router";
import Houses from "./components/HousesComp.vue";
import Persons from "./components/PersonsComp.vue";
import Quotes from "./components/QuotesComp.vue";

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
