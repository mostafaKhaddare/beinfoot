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
//*admin
import AdminDashboard from '@/admin/AdminDashboard'
import Matches from '@/admin/Matches'
import NewsAdmin from '@/admin/NewsAdmin'
//*auth
import Register from '@/components/global/Register'
import Login from '@/components/global/Login'
//* impoer firebase
import firebase from 'firebase'

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
    component : CreateNews,
    meta : {
      requiresAuth : true
    }
  },
  {
    path : '/create-matche',
    name : "CreateMatch",
    component : CreateMatches,
    meta : {
      requiresAuth : true
    }
  },
  {
    path : '/edit-news/:id',
    name : "EditNews",
    component : EditNews,
    props : true,
    meta : {
      requiresAuth : true
    }
  },
  {
    path : '/edit-match/:id',
    name : "EditMatch",
    component : EditMatches,
    props : true,
    meta : {
      requiresAuth : true
    },
  },
  {
    path: '/matches/:id',
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
    path : "/admin/dashboard",
    name : "admin-dashboard",
    component : AdminDashboard,
    meta : {
      requiresAuth : true
    }
  },
  {
    path : "/admin/matches",
    name : "matches",
    component : Matches
  },
  {
    path : "/admin/news",
    name : "news",
    component : NewsAdmin
  },
  {
    path : "/admin/register",
    name : "register",
    component : Register
  },
  {
    path : "/admin/login",
    name : "login",
    component : Login
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

//*naw guards
router.beforeEach((to,from,next)=>{
  //check for required guards
  if(to.matched.some(record=>record.meta.requiresAuth)){
    if(!firebase.auth().currentUser){
      //go to login
      next({
        path : '/admin/login',
        query : {
          redirect : to.fullpath
        }
      })
    }else{
      next();
    }
  }else{
    next();
  }
})

export default router
