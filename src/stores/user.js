import { defineStore } from 'pinia';

const STORE_NAME = 'userList'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    sortKey: '',
    sortColumn: '',
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
    sortUsers() {
      return (
        function sortChildren(users, column, sortKey) {
          if(column) {
            users = users.slice().sort((a,b) => {
              if (sortKey === 'asc') {
                return a[column] > b[column] ? 1 : -1
              } else {
                return a[column] < b[column] ? 1 : -1
              }
            })
          }
          users.forEach(user => {
            if (user.children.length) {
              sortChildren(user.children);
            }
          });
          return users
        }
      )(this.getUsers, this.sortColumn, this.sortKey);
    },
    activeSortKey() {
      return this.sortKey
    },
    activeSortColumn() {
      return this.sortColumn
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
          this.addChildren(arr[i].children, user, director)
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
    getSortColumn(column) {
      if (this.sortColumn === column) {
        this.sortKey = this.sortKey === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortColumn = column
        this.sortKey = 'asc'
      }
    },
  },
})
