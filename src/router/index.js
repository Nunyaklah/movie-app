import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Dashboard.vue"),
      children: [
        {
          path: "/",
          name: "movie-content",
          component: () => import("../components/Content.vue"),
        },
        {
          path: "/movie/:id",
          name: "movieDetails",
          component: () => import("../views/MovieDetails.vue"),
        },
      ],
    },
  ],
});

export default router;
