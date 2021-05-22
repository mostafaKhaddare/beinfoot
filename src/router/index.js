import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import News from "@/views/News"
import ShowNews from "@/views/ShowNews"
import ShowMatch from "@/views/ShowMatch"
import AboutUs from "@/views/AboutUs"
import PageNotFound from "@/components/global/PageNotFound"
import CreateNews from '@/components/news/CreateNews'
import EditNews from '@/components/news/EditNews'

//* matches
import CreateMatches from "@/components/matches/CreateMatches"
import EditMatches from "@/components/matches/EditMatches"



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path : '/news',
    name : 'News',
    component : News
  },
  {
    path: '/news/:id/:slug',
    name: 'show-news',
    component: ShowNews,
    props : true
  },
  {
    path : '/create-news',
    name : "CreateNews",
    component : CreateNews
  },
  {
    path : '/create-matche',
    name : "CreateMatch",
    component : CreateMatches
  },
  {
    path : '/edit-news/:id',
    name : "EditNews",
    component : EditNews,
    props : true
  },
  {
    path : '/edit-match/:id',
    name : "EditMatch",
    component : EditMatches,
    props : true
  },
  {
    path: '/matches/:id/:slug',
    name: 'show-match',
    component: ShowMatch,
    props : true
  },
  {
    path : '/about',
    name : "AboutUs",
    component : AboutUs
  },
  {
    path : "/:catchAll(.*)",
    component : PageNotFound
  },
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
