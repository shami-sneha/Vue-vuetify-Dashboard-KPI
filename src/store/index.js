import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: localStorage.getItem('theme') == null ? "light" : localStorage.getItem('theme')
  },
  getters: {
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme ==="light" ? "dark" : "light"
      localStorage.setItem("theme", state.theme);
    }
  },
  actions: {
  },
  modules: {
  }
})
