import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

// toast store that is available to all other components
const toast = useToast();

export const useAlertStore = defineStore("alertStore", {
  actions: {
    success(message) {
      toast.success(message);
    },
    error(message) {
      toast.error(message);
    },
  },
});
