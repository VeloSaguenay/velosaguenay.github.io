import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import About from './components/About.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: About },
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = Vue.createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
