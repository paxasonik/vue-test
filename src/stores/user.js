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
    getAllUsers() {
      return (
        function getChildren(arr) {
          return (Array.isArray(arr) ? arr : []).reduce((acc, cur) => (
            acc.push(cur, ...getChildren(cur.children)),
              acc
          ), []);
        }
      )(this.getUsers);
    },
    usersLength() {
      return this.getAllUsers.length
    }
  },
  actions: {
    addChildren(arr, user, director) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === director) {
          arr[i].children.push(user)
        }
        if(arr[i].children){
          this.addChildren(arr[i].children, director)
        }
      }
    },
    addUser(user, director) {
      if (director) {
        this.addChildren(this.users, user, director)
      } else {
        this.users.push(user)
      }
      localStorage.setItem(STORE_NAME, JSON.stringify(this.users))
    },
  },
})
