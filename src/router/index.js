import Vue from 'vue';
import Router from 'vue-router';
import mainPage from "@/components/mainPage";
import artworkPage from "@/components/artworkPage";
import aboutCCYP from "@/components/aboutCCYP";
import aboutUs from "../components/aboutUs";
import newsPage from "../components/newsPage";
import newsDetails from "../components/newsDetails";
import getInvolvedPage from "../components/getInvolvedPage";

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
            path: '/aboutCcyp',
            name: 'aboutCCYP',
            component: aboutCCYP
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: aboutUs
        },
        {
            path: '/newsPage',
            name: 'newsPage',
            component: newsPage
        },
        {
            path: '/newsDetails',
            name: 'newsDetails',
            component: newsDetails
        },
        {
            path: '/getInvolved',
            name: 'getInvolved',
            component: getInvolvedPage
        },
    ]
})

export default router;