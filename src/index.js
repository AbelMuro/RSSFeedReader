import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createWebHistory, createRouter} from 'vue-router';
import App from './App.vue';
import Login from './Pages/Authorization/Login';
import Register from './Pages/Authorization/Register';
import ForgotPassword from './Pages/Authorization/ForgotPassword';
import ResetPassword from './Pages/Authorization/ResetPassword';
import Profile from './Pages/Profile';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Login},
        {path: '/register', component: Register},
        {path: '/forgot-password', component: ForgotPassword},
        {path: '/reset-password/:resetToken', component: ResetPassword},
        {path: '/profile', component: Profile, 
            children: [
                {
                    path: '/',
                    component: null
                },
                {
                    path: 'articles',
                    component: Profile
                },
                {
                    path: 'preferences',
                    component: null
                },
                {
                    path: 'notifications',
                    component: null
                },
                {
                    path: 'security',
                    component: null
                }
        ]
        }
    ]
});

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#root');
