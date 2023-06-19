import { defineStore } from "pinia";

export const useSideBarStore = defineStore("sidebarStore", {
  state: () => ({
    open: true
  }),
  actions: {
    // method to turn sidebar on or off
    setOpen(){
        this.open = !this.open  
    }
  },
  getters: {},
});
