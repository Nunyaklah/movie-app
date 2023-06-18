import { defineStore } from "pinia";

export const useSideBarStore = defineStore("sidebarStore", {
  state: () => ({
    open: true
  }),
  actions: {
    setOpen(){
        this.open = !this.open  
    }
  },
  getters: {},
});
