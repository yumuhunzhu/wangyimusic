<template>
    <el-container direction="vertical">
        <div class="header">
            <img class="header_img" src="../../assets/identify_widget_icn_new.png" alt="h-icon">
            <el-input id="serch_box" placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="serch_text">
            </el-input>
            <img class="header_img" src="../../assets/af3.png" alt="h-icon">
        </div>
        <div class="class_nav">
            <span style="border-bottom:2px solid red;color:red">音乐</span>
            <span @click="govidio">视屏</span>
            <span>电台</span>
        </div>
        <el-carousel height="180px" indicator-position="outside">
            <el-carousel-item v-for="item in 2" :key="item">
                <div></div>
            </el-carousel-item>
        </el-carousel>
        <h3 class="recommend">推荐歌单</h3>
        <div>
            <div @click="cli" class="song_list" v-for="(itm,index) in song_list" :id=itm._id>
                <img :src=itm.img :id=itm._id :alt=itm.img>
                <p>
                    {{itm.name}}
                </p>
            </div>
        </div>
    </el-container>
</template>


<script>
    // import axios from "axios"
    import Ip from "../../ipconfig.js"
    export default {
        data() {
            return {
                serch_text: ``,
                song_list: [],
            }
        },
        methods:{
            govidio(){
                this.$router.push("/vidio")
            },
            cli(e){
                console.log(this)
                this.$axios.post(Ip+"/get_song",{_id:e.target.id}).then((res)=>{
                    for(let i=0;i<res.data.song.length;i++){
                        res.data.song[i].img=Ip+"/images/"+res.data.song[i].img
                        res.data.song[i].projectname=Ip+"/music/"+res.data.song[i].projectname
                    }
                    this.$store.dispatch("get_songdatails",{song_datails:res.data})
                    this.$router.push("/song_list")
                    console.log(this.$store)
                })
            }
        },
        created: function () {
            this.$axios.post(Ip + "/get_songlist").then((res) => {
                let arr = [];
                for (let i = 0; i < res.data.length; i++) {
                    res.data[i].img = Ip + "/images/" + res.data[i].img;
                    arr.push(res.data[i])
                }
                this.$store.dispatch("get_songlist", { song_list: arr })
                this.song_list = this.$store.state.song_list;
            })
        }
    }
</script>


<style>
    .recommend{
        border-left: 3px solid crimson;
        padding: 4px;
    }
    .song_list {
        width: 33.3%;
        text-align: center;
        margin: 10px 0;
        float: left;
    }

    .song_list>img {
        width: 90%;
        margin: auto;
    }

    .el-carousel__item:nth-child(2n) {
        height: 180px;                        
        background-image: url("../../assets/alr.jpg");
        background-size: 100%;
    }

    .el-carousel__item:nth-child(2n-1) {
        height: 180px;                
        background-image: url("../../assets/zc.jpg");
        background-size: 100%
    }

    .class_nav {
        width: 78%;
        height: 50px;
        line-height: 50px;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    #serch_box {
        border-radius: 30px;
        outline: none
    }

    .header_img {
        width: 40px;
        height: 40px;
        display: inline-block;
        margin-top: 8px;
    }

    .header {
        padding: 0;
        line-height: 60px;
        width: 100%;
        background: crimson;
        display: flex;
        justify-content: space-around
    }
</style>