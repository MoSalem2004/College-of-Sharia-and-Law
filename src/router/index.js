import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ClassOne from "../views/ClassOne.vue";
import ClassTwo from "../views/ClassTwo.vue";
import ClassThree from "../views/ClassThree.vue";
import ClassFour from "../views/ClassFour.vue";
import AllClasses from "../components/AllClasses.vue";
import Conect from "../components/TheFooter.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ClassOne",
    name: "ClassOne",
    component: ClassOne,
  },
  {
    path: "/ClassTwo",
    name: "ClassTwo",
    component: ClassTwo,
  },
  {
    path: "/ClassThree",
    name: "ClassThree",
    component: ClassThree,
  },
  {
    path: "/ClassFour",
    name: "ClassFour",
    component: ClassFour,
  },
  {
    path: "/AllClasses",
    name: "#AllClasses",
    component: AllClasses,
  },
  {
    path: "/Conect",
    name: "Conect",
    component: Conect,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
