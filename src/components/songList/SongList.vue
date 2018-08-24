<template>
    <div>
        <div class="banner">
            <div>
                <span>
                    <</span>
                        <span>歌单</span>
                        <div>
                            <img src="../../assets/a3i.png" alt="">
                            <img src="../../assets/ade.png" alt="">
                        </div>
            </div>
            <div id="son_datails">
                <img id="cover" :src=song_datails.img alt="ff">
                <div>
                    <h2>{{song_datails.name}}</h2>
                    <p>{{song_datails.user}}</p>
                </div>
            </div>
        </div>
        <div @click="click_song" id="song_list" v-for="(itm,index) in song_datails.song"  :class=itm._id>
            <span>{{index+1}}</span>
            <div>
                <h2 :class=itm._id>{{itm.name}}</h2>
                <p :class=itm._id>{{itm.singer}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import ip from "../../ipconfig.js"
    export default {
        data() {
            return {
                song_datails: "a",
            }
        },
        methods:{
            click_song(e){
                this.$axios.post(ip+"/get_pla_song",{_id:e.target.getAttribute("class")}).then((res)=>{
                    res.data.img=ip+"/images/"+res.data.img
                    res.data.projectname=ip+"/music/"+res.data.projectname                
                    this.$store.dispatch("get_pla_song",{is_pla:res.data})
                    this.$router.push("/play")
                })
            }
        },
        created: function () {
            this.song_datails = this.$store.state.song_datails;
            console.log(this)
        }
    }
</script>


<style scoped>
    #song_list {
        padding: 10px;
        margin-top: 15px;
        height: 60px;
        line-height: 25px;
        display: flex;
        justify-content: space-between;
    }
    #song_list>span{
        color: silver
    }
    #song_list>div {
        display: inline-block;
        width: 90%;
        border-bottom: 1px solid gray
    }
    #song_list>div>h2{
        font-size: 18px;
    }
    #song_list>div>p{
        color:silver;
    }

    #son_datails {
        display: flex;
        justify-content: space-between;
    }

    #son_datails>div {
        width: 50%;
    }

    #son_datails>div>h2 {
        font-size: 28px;
        height: 70%
    }

    #son_datails>div>p {
        color: gainsboro
    }

    #cover {
        width: 40%;
        height: 75%;
    }

    .banner {
        color: aliceblue;
        background: url("../../assets/ty.jpg");
        background-size: 100%;
    }

    .banner>div {
        display: flex;
        padding: 10px;
        justify-content: space-between;
    }

    .banner>div img {
        width: 25px;
    }
</style>