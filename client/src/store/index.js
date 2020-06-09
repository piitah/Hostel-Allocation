import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: localStorage.getItem("user_token") ? true : false,
    token: localStorage.getItem("user_token") || null,
    Role: localStorage.getItem("Role") || null,
  },
  mutations: {
    setToken: function (state, payload) {
      state.token = payload
      state.isAuthenticated = true;
    },
    setUser: function (state, payload) {
      state.Role = payload.role
    },
    LOGOUT_SUCCESS: function (state) {
      window.localStorage.removeItem("user_token")
      window.localStorage.removeItem("Role")
      state.token = null;
      state.isAuthenticated = false;
      state.Role = null
    },
    TRY_AUTO_LOGIN_SUCCESS : function(state, payload) {
      state.Role = payload.role;
      state.token = payload.token;
      state.isAuthenticated = true;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token)
    },
    setUser({ commit }, user) {
      commit("setUser", user)
    },
    async LOGOUT ({commit}) {
      commit("LOGOUT_SUCCESS")
      router.push(
        {path: "/index"}
      )
    },
    async TRY_AUTO_LOGIN({commit}) {
      const token = window.localStorage.getItem("user_token")
      if(!token) {
        return router.push({
          path : "/index"
        })
      }
      if(token) {
        const token = localStorage.getItem("user_token")
        const Role = localStorage.getItem("Role")
        commit("TRY_AUTO_LOGIN_SUCCESS", {
          role: Role,
          token : token
        })
      }
    }
  },
  modules: {}
});
