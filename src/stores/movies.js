import { defineStore } from "pinia";
import axios from "axios";
import { useAlertStore } from "./alerts";
const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useMoviesStore = defineStore("moviesStore", {
  state: () => ({
    showMovies: false,
    showBannerAndPopularMovies: true,
    searchTerm: "",
    movies: [],
    movie: "",
  }),
  actions: {
    // get movies method that fetches movies from omdb api by search
    async getMovies() {
      this.showMovies = true;
      this.showBannerAndPopularMovies = false;
      const params = {
        s: this.searchTerm,
        plot: "full",
      };
      try {
        const response = await axios.get(`${baseUrl}`, { params });
        this.movies = response.data.Search;
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error.response.data);
      }
    },
    // get movies detail method that fetches movies from omdb api by id
    async getMovieDetail(imdbID) {
      const params = {
        i: imdbID,
      };
      try {
        const response = await axios.get(`${baseUrl}`, { params });
        this.movie = response.data;
      } catch (error) {
        const alertStore = useAlertStore();
        alertStore.error(error.response.data);
      }
    },
    //method to filter movies by year
    filterMoviesByYear(years) {
      this.movies = this.movies.filter((movie) => years.includes(movie.Year));
    },
  },
  getters: {},
});
