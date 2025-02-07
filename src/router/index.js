import Vue from 'vue'
import Router from 'vue-router'
import mainPage from "@/components/mainPage";
import artworkPage from "@/components/artworkPage";
import aboutPage from "@/components/aboutPage";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: mainPage
        },
        {
            path: '/artworkPage',
            name: 'artworkPage',
            component: artworkPage
        },
        {
            path: '/aboutPage',
            name: 'aboutPage',
            component: aboutPage
        },
    ]
})

export default router