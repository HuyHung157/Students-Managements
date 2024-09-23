import Home from './pages/teachers-page/teachers.page';
import Login from './pages/auth/login/login';
import DetailStudent from './pages/teachers-page/student-component/components/share/share.component';
import CreateStudent from './pages/teachers-page/student-component/components/share/share.component';
// import Admin from './pages/admin/admin';

const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/login",
        exact: false,
        component: Login
    },
    {
        path: "/detail-student/:id",
        exact: false,
        component: DetailStudent
    },
    {
        path: "/create-student",
        exact: false,
        component: CreateStudent
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
