import { defineStore } from "pinia";
import axios from "axios";
import { useAlertStore } from "./alerts";
const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const usePopularMoviesStore = defineStore("popularMoviesStore", {
  state: () => ({
    movies: [],
  }),
  actions: {
    //fetch movies , used avengers to represent popular movies
    async getPopularMovies() {
      const params = {
        s: "avengers",
        plot: "full",
        page: 1
      };
      try {
        const response = await axios.get(`${baseUrl}`,{params});
        this.movies = response.data.Search.slice(0,8);
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error.response.data);
      }
    },
  },
  getters: {},
});
