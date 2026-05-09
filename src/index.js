import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createWebHistory, createRouter} from 'vue-router';
import App from './App.vue';
import Login from './Pages/Authorization/Login';
import Register from './Pages/Authorization/Register';
import ForgotPassword from './Pages/Authorization/ForgotPassword';
import ResetPassword from './Pages/Authorization/ResetPassword';
import Profile from './Pages/Profile';
import Account from './Pages/Profile/SettingsBar/Account';
import Articles from './Pages/Profile/SettingsBar/Articles';
import Preferences from './Pages/Profile/SettingsBar/Preferences';
import Notifications from './Pages/Profile/SettingsBar/Notifications';
import Security from './Pages/Profile/SettingsBar/Security';
import Feed from './Pages/Feed';
import Digest from './Pages/Digest';
import Discover from './Pages/Discover';

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
                    path: '',
                    component: Account
                },
                {
                    path: 'articles',
                    component: Articles
                },
                {
                    path: 'preferences',
                    component: Preferences
                },
                {
                    path: 'notifications',
                    component: Notifications
                },
                {
                    path: 'security',
                    component: Security
                }
        ]
        },
        {path: '/feed', component: Feed},
        {path: '/digest', component: Digest},
        {path: '/discover', component: Discover}
    ]
});

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#root');
