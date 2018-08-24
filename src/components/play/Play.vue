<template>
    <div class="pla_page">
        <div>
            <img src="../../assets/oq.png" alt="">
            <div>
                <h2>{{song_messge.is_playing.name}}</h2>
                <p>{{song_messge.is_playing.singer}}</p>
            </div>
            <img src="../../assets/a2k.png" alt="">
        </div>
        <div @click="audio" class="banner" :class="{'annimat':is_play}">
            <img :src=song_messge.is_playing.img alt="">
        </div>
        <div>
            <img src="../../assets/acn.png" alt="">
            <img src="../../assets/ad1.png" alt="">
            <img src="../../assets/acj.png" alt="">
            <img src="../../assets/ade.png" alt="">
        </div>
        <div class="progress">
            <div :style="{width:styleobj1.progress}"></div>
        </div>
        <audio ref="audio" :src=song_messge.is_playing.projectname autoplay="autoplay"></audio>
        <div class="contro">
            <img src="../../assets/adi.png" alt="">
            <img @click="befor_song" src="../../assets/akp.png" alt="">
            <img @click="click_pla" :src=pla_btn alt="">
            <img @click="next_song" src="../../assets/akk.png" alt="">
            <img src="../../assets/adz.png" alt="">
            <!-- {{pla_btn}} -->
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function () {
             let timer=setInterval( ()=> {
                let obj={}
                let alltime=this.$refs.audio.duration
                let time=this.$refs.audio.currentTime
                obj.times=parseInt(time/60)+":"+parseInt( time%60);
                obj.alltimes=parseInt( alltime/60)+":"+parseInt( alltime%60);
                obj.progress=time/alltime*100+"%"
                this.styleobj1=obj;
                // console.log(alltime,time)
                console.log(this);
                
            }, 200)
        },
        data() {
            return {
                styleobj1: {},
                song_messge: {},
                is_play: true,
                pla_btn: require("../../assets/akm.png")
            }
        },
        created: function () {
            this.song_messge = this.$store.state.be_playing
        },
        destroyed:function(){
            clearInterval(this.timer)
        },
        methods: {
            audio() {
                console.log(this.$refs.audio.duration)
                console.log(this.$refs.audio.currentTime)
            },
            befor_song() {
                let obj = {}
                for (let i = 0; i < this.song_messge.pla_list.length; i++) {
                    if (this.song_messge.pla_list[i]._id == this.song_messge.is_playing._id) {
                        if (i == 0) {
                            console.log("jj")
                            obj.is_playing = this.song_messge.pla_list[this.song_messge.pla_list.length - 1];
                            obj.pla_list = this.song_messge.pla_list;
                            this.song_messge = obj
                            return;
                        } else {
                            console.log("kk")
                            obj.is_playing = this.song_messge.pla_list[i - 1];
                            obj.pla_list = this.song_messge.pla_list;
                            this.song_messge = obj
                            return;
                        }
                    }
                }
            },
            next_song() {
                let obj = {}
                for (let i = 0; i < this.song_messge.pla_list.length; i++) {
                    if (this.song_messge.pla_list[i]._id == this.song_messge.is_playing._id) {
                        if (i == this.song_messge.pla_list.length - 1) {
                            obj.is_playing = this.song_messge.pla_list[0];
                            obj.pla_list = this.song_messge.pla_list;
                            this.song_messge = obj
                            return;
                        } else {
                            obj.is_playing = this.song_messge.pla_list[i + 1];
                            obj.pla_list = this.song_messge.pla_list;
                            this.song_messge = obj
                            return;
                        }
                    }
                }
            },
            click_pla() {
                if (this.is_play) {
                    this.pla_btn = require("../../assets/akn.png")
                    this.$refs.audio.pause();
                    this.is_play = false;
                }
                else {
                    this.pla_btn = require("../../assets/akm.png")
                    this.is_play = true;
                    this.$refs.audio.play();
                }
            }
        }
    }

</script>

<style scoped>
    .progress {
        width: 85%;
        margin: 20px auto;
        height: 5px;
        /* border: 2px solid green; */
    }

    .progress>div {
        display: inline-block;
        width: 5px;
        height: 5px;
        background: firebrick;
        border-radius: 50%;
        margin: 0;
        padding: 0;
    }

    .contro {
        display: flex;
        justify-content: space-around;
    }

    .contro>img {
        width: 10%;
        height: 10%;
    }
    .annimat{
        animation: changebox 10s ease-in-out;        
    }
    .banner {
        background: url("../../assets/ace.png");
        width: 300px;
        height: 300px;
        line-height: 300px;
        border-radius: 50%;
        margin: 20% auto 20% auto;
        background-size: 100%;
        position: relative;
        /* transition:all 20s; 
        transform-origin:50 100;  
        transform:rotate(3600deg); */
    }
    @keyframes changebox {
        from { transform: rotateZ(20deg)}
        to { transform:rotateZ(1000deg)}
         }


    .banner>img {
        width: 75%;
        border-radius: 50%;
        position: absolute;
        left: 12%;
        top: 12%;
    }

    .pla_page {
        background: url("../../assets/wu.jpg");
        height: 100%;
    }

    .pla_page>div:nth-of-type(1) {
        border-bottom: 1px solid slategrey;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        color: aliceblue;
        text-align: center;
    }

    .pla_page>div:nth-of-type(3) {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: auto;
    }

    .pla_page>div:nth-of-type(3)>img {
        width: 15%;
        height: 15%;
    }

    .pla_page>div:nth-of-type(1)>img {
        width: 8%;
        height: 8%;
    }
</style>