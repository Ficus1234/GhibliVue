import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AllFilms from "../views/all-films.vue";
import About from "../views/About.vue";
import Favorites from "../views/Favorites.vue"
import Joe from "../views/Joe";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/all-films',
    name: 'AllFilms',
    component: AllFilms
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/joe',
    name: 'Joe',
    component: Joe
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
