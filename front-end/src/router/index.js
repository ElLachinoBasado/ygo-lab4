import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import StrategyView from '/src/views/StrategyView.vue'
import MatchupView from '/src/views/MatchupView.vue'
import CardView from '/src/views/CardView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'The Cyber Network',
        component: HomeView
    },
    {
        path: '/strategy',
        name: 'Strategy',
        component: StrategyView
    },
    {
        path: '/matchups',
        name: 'Matchups',
        component: MatchupView
    },
    {
        path: '/cards',
        name: 'Cards',
        component: CardView
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router