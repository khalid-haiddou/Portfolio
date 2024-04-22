import { defineStore } from 'pinia';
import axios from 'axios';

export const MainStore = defineStore('MainStore', {
  state: () => ({
    users: [],
    loading: false,
    
  }),
  actions: {
    setUser(data) {
      this.users = data;
    },
  },
  
});
