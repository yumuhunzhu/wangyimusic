import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import ip from "../ipconfig"

Vue.use(Vuex);
// Vue.use(axios);

export default new Vuex.Store({
  state: {
    //-------------------所有歌单-------------------------/
    song_list: [],
    //------------------各单项请-------------------------/
    song_datails: {
    },
    //---------正在播放----------------/
    be_playing: {
      pla_list:[]
    },
    vidio_list:[]
  },
  actions: {
    get_songlist(context, obj) {
      context.commit("up_songlist", obj)
    },
    get_songdatails(context, obj) {
      context.commit("up_songdatails", obj)
    },
    get_pla_song(context, obj) {
      obj.play_list=this.state.song_datails.song
      context.commit("play_list", obj)
    },
    getVidio(context){
      axios.post(ip+"/getVidio").then((res)=>{
        context.commit("up_vidio_list",{vidio_list:res.data})
      })
    }
  },
  mutations: {
    up_vidio_list(state,obj){
      state.vidio_list=obj.vidio_list
    },
    up_songlist(state, obj) {
      this.state.song_list = obj.song_list
    },
    up_songdatails(state, obj) {
      this.state.song_datails = obj.song_datails
    },
    play_list(state, obj) {
      for(let i=0;i<obj.play_list.length;i++){
        state.be_playing.pla_list.push(obj.play_list[i])
      }
      state.be_playing.is_playing=obj.is_pla
    }
  }
});