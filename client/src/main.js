import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueSweetalert2 from "vue-sweetalert2"
import axios from 'axios'
import config from "../config"
import 'sweetalert2/dist/sweetalert2.min.css'

const Api = axios.create({
    baseURL: config.base_api,
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
    }
})
Api.interceptors.request.use(
    async (config) => {
        const token = store.state.token; // slightly longer running function than example above
        if (token) config.headers.Authorization = token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const EventBus = new Vue();

Vue.prototype.$http = Api;
Vue.use(VueSweetalert2)


let token = localStorage.getItem("user_token")
if (token) store.dispatch(`TRY_AUTO_LOGIN`);

router.beforeEach((to, from, next) => { 
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.token) {
      next({
        path: "/index",
        query: { redirect: to.fullPath }
      })
    } else if (to.matched.some(record => record.meta.adminAuth)) {
        if (store.state.Role === "Admin") {
           next()
        } else {
            next({
                path: "/",
                query: { redirect: to.fullPath }
            })
        }
    } else if (to.matched.some(record => record.meta.studentAuth)) {    
        if (store.state.Role === "User" || store.state.Role === "Agent") {
            next()
        } else {
            next({
                path: "/admin",
                query: { redirect: to.fullPath }
            })
        }
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
