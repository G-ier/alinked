import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
  state: () => ({
    counter: 0,
    search: false
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
