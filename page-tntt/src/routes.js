// import React from 'react'
import Home from './pages/home/home';
// import PageNotFound from './pages/page-not-found';
import Login from './pages/auth/login/login';

// import Admin from './pages/admin/admin';

const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/sign-in",
        exact: false,
        component: Login
    },
    // {
    //     path: "/dashboard",
    //     exact: false,
    //     component: Admin
    // },
    // {
    //     path: "",
    //     exact: false,
    //     component: PageNotFound
    // }

];

const routesAdmin = [
    // {
    //     path: "/dashboard",
    //     exact: false,
    //     component: Admin
    // },

];

export { routesHome, routesAdmin };
