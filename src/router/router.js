import { createRouter, createWebHistory } from "vue-router"
import SignUp from "@/views/sign-up.vue"
import SearchMembers from "@/views/search-members.vue"
import SiteContent from "@/views/site-content.vue"

const routes = [
    { path: '/', component: SignUp },
    { path: '/search-members', component: SearchMembers },
    { path: '/site-content', component: SiteContent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router