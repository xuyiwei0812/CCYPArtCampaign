import Vue from 'vue';
import Router from 'vue-router';
import mainPage from "@/components/mainPage";
import artworkPage from "@/components/artworkPage";
import aboutCCYP from "@/components/aboutCCYP";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: mainPage
        },
        {
            path: '/artwork',
            name: 'artworkPage',
            component: artworkPage
        },
        {
            path: '/about/ccyp',
            name: 'aboutCCYP',
            component: aboutCCYP
        },
    ]
})

export default router;