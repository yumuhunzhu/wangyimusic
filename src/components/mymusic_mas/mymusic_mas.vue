<template>
    <div class="mymusic_allbox">
        <div class="mymusi_head">
            <img src="../../assets/oq.png" alt="">
            <span>最近播放的歌曲</span>
            <img src="../../assets/oi.png" alt="">
        </div>
        <div class="mymusi_select">
            <div>
                <img src="../../assets/a2_.png" alt=""> 播放全部
                <span> (共{{all_music.length}}首)</span>
            </div>
            <div>
                <img src="../../assets/aeh.png" alt="">多选
            </div>
        </div>
        <div class="mymusic_itm" v-for="(item,index) in all_music">
            <div>
                <p>{{item.name}}</p>
                <span>{{item.singer}}</span>
            </div>
            <img src="../../assets/a3a.png" alt="">
        </div>
    </div>
</template>


<script>
    export default {
        name: "mymusic_mas",
        data() {
            return {
                all_music: []
            }
        },
        created: function () {
            this.all_music = this.$store.state.be_playing.pla_list
            console.log(this.all_music)
        }
    }

</script>

<style>
    .mymusic_allbox{
        margin-bottom: 30%;
    }
    .mymusi_head {
        display: flex;
        height: 8%;
        line-height: 2%;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        justify-content: space-between;
        position: fixed;
        top: 0;
        background: red;
        color: white;
    }

    .mymusi_head>span {
        margin-top: 5%;
    }

    .mymusi_head>img {
        width: 20px;
        height: 20px;
        margin-top: 2%;
    }

    .mymusi_select {
        margin-top: 15%;
        display: flex;
        justify-content: space-between;
        height: 15%;
        width: 100%;
        box-sizing: border-box;
        padding: 3%;
        border-bottom: 1px solid gainsboro;
    }
    .mymusi_select>div:nth-child(2){
        text-align: right;
    }
    .mymusi_select img{
        width: 15%;
        height: 100%;
    }
    .mymusic_itm{
        border-bottom: 1px solid gainsboro;
        margin-left: 3%;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        padding: 18px;
    }
    .mymusic_itm span{
        font-size: 16px;
        color: gray;
    }
    .mymusic_itm>img{
        width: 8%;
        height: 8%;
    }
</style>