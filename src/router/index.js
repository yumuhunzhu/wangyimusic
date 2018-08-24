import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Login from '../components/login/Login.vue'
import Home_page from "../components/homePage/HomePage.vue"
import Song_list from "../components/songList/SongList.vue"
import Play from "../components/play/Play.vue"
import Mymusic from "../components/mymusic/mymusic.vue"
import Mymusic_mas from "../components/mymusic_mas/mymusic_mas.vue"
import Vidio from "../components/vidio/vidio.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Main,
      children: [{
        path: "home_page",
        component: Home_page
      },
      {
        path: "song_list",
        component: Song_list
      },{
        path:"mymusic",
        component:Mymusic
      },{
        path:"mymusic_mas",
        component:Mymusic_mas
      },{
        path:"vidio",
        component:Vidio
      }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/play",
      name: "play",
      component: Play
    }
  ]
})
