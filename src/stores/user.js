import { defineStore } from 'pinia';

const STORE_NAME = 'userList'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
  }),
  getters: {
    getUsers(state) {
      if (localStorage.hasOwnProperty(STORE_NAME)) {
        state.users = JSON.parse(localStorage.getItem(STORE_NAME))
        return state.users
      }
      return state.users
    },
    usersLength() {
      return this.getUsers.length
    }
  },
  actions: {
    addUser(user) {
      this.users.push(user)
      localStorage.setItem(STORE_NAME, JSON.stringify(this.users))
    },
  },
})
