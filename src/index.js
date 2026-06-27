import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createWebHistory, createRouter} from 'vue-router';
import App from './App.vue';
import Login from './Pages/Authorization/Login';
import Register from './Pages/Authorization/Register';
import ForgotPassword from './Pages/Authorization/ForgotPassword';
import ResetPassword from './Pages/Authorization/ResetPassword';
import Profile from './Pages/Profile';
import Account from './Pages/Profile/Account';
import Articles from './Pages/Profile/Articles';
import Preferences from './Pages/Profile/Preferences';
import Notifications from './Pages/Profile/Notifications';
import Security from './Pages/Profile/Security';
import SelectCategory from './Pages/Authorization/SelectCategory';
import Feed from './Pages/Feed';
import ArticleList from './Pages/Feed/ArticleList';
import Digest from './Pages/Digest';
import Discover from './Pages/Discover';
import DisplayArticle from './Pages/Feed/ArticleList/DisplayArticle';
import OrganizeAllArticles from './Pages/Feed/ArticleList/OrganizeAllArticles';
import OrganizeSavedArticles from './Pages/Feed/ArticleList/OrganizeSavedArticles';
import CreateArticle from './Pages/CreateArticle';
import MostSaved from './Pages/Digest/MostSaved';
import MostViewed from './Pages/Digest/MostViewed';

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
        {path: '/feed', component: Feed,
            children: [
                {
                    path: '',
                    component: ArticleList,
                    children: [
                        {
                            path: 'all',
                            component: OrganizeAllArticles,
                            children: [
                                {
                                    path: ':articleTitle',
                                    component: DisplayArticle
                                }                                
                            ]
                        },
                        {
                            path: 'saved-articles',
                            component: OrganizeSavedArticles,
                            children: [
                                {
                                    path: ':articleTitle',
                                    component: DisplayArticle
                                }      
                            ]
                        }

                    ]
                    /* 
                    children: [
                        {
                            path: 'all',
                            component: AllArticles,
                            children: [
                                {
                                    path: '',
                                    component: OrganizeAllArticles,
                                },
                                {
                                    path: ':articleTitle',
                                    component: DisplayArticle
                                }
                            ]
                        },
                        {
                            path: 'saved-articles',
                            component: SavedArticles,
                            children: [
                                {
                                    path: '',
                                    component: OrganizeSavedArticles,
                                },
                                {
                                    path: ':articleTitle',
                                    component: DisplayArticle
                                }
                            ]
                        }
                    ]                    
                    */

                }
            ]
        },
        {path: '/create-article', component: CreateArticle},
        {path: '/digest', component: Digest, children: [
            {
                path: 'most-viewed',
                component: MostViewed
            },
            {
                path: 'most-saved',
                component: MostSaved
            }
        ]},
        {path: '/discover', component: Discover},
        {path: '/select-category', component: SelectCategory}
    ]
});

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#root');
