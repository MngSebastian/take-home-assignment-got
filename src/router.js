import { createRouter, createWebHistory } from "vue-router";
import Houses from "./components/HousesList.vue";
import Persons from "./components/PersonsList.vue";
import Quotes from "./components/QuotesList.vue";
import HouseMembers from "./components/HouseMembers.vue";
import PersonDetails from "./components/PersonDetails.vue";

const routes = [
  { path: "/", redirect: "/houses" },
  { path: "/houses", component: Houses },
  { path: "/persons", component: Persons },
  { path: "/quotes", component: Quotes },
  {
    path: "/house/:name",
    name: "house-members",
    component: HouseMembers,
    props: true,
  },
  {
    path: "/person/:id",
    name: "person",
    component: PersonDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
