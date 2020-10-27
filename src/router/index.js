import Vue from 'vue';
import VueRouter from 'vue-router';
import Labels from "@/views/Labels.vue";
import Home from "@/views/Home.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from "@/views/NotFound.vue";
Vue.use(VueRouter);
var routes = [
    {
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/labels',
        name: 'Labels',
        component: Labels
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound
    }
];
var router = new VueRouter({
    routes: routes
});
export default router;
//# sourceMappingURL=index.js.map