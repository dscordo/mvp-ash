import { createRouter, createWebHistory } from 'vue-router'

import Catalog from "./views/Catalog.vue";
import PreviousWork from "./views/PreviousWork.vue";
import Home from './views/Home.vue';
import About from './views/About.vue';



const routes = [
    { 
        path: '/', 
        component: Home
    },
    { 
        path: '/previouswork', 
        component: PreviousWork,
        props: true
    },
    { 
        path: '/catalog', 
        component: Catalog,
        props: true
    },
    { 
        path: '/about', 
        component: About
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;