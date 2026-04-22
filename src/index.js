import {createApp} from 'vue';
import {createWebHistory, createRouter} from 'vue-router';
import App from './App.vue';
import Login from './Pages/Authorization/Login';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Login}
    ]
})

const app = createApp(App);
app.use(router);
app.mount('#root');
