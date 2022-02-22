import Vue from 'vue';
import Router from 'vue-router';

import Catalog from "./views/Catalog";
import PreviousWork from "./views/PreviousWork";
import Home from './views/Home';


const routes = [
    { 
        path: '/', 
        component: Home
    },
    { 
        path: '/previouswork', 
        component: PreviousWork
    },
    { 
        path: '/catalog', 
        component: Catalog
    }
];


export default new Router({ mode: 'history', routes });