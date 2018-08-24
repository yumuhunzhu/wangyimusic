<template>
    <div>
        <div class="head">
            <span>更多</span>
            <span>我的音乐</span>
            <img src="../../assets/oi.png" alt="">
        </div>
        <div class="list">
            <div>
                <img src="../../assets/a0n.png" alt="">
                <div>
                    <span>本地音乐</span>
                    <div>
                        <span>345</span>
                        <img src="../../assets/aa7.png" alt="">
                    </div>
                </div>
            </div>
            <div @click=cli_play>
                <img src="../../assets/a0e.png" alt="">
                <div>
                    <span>最近播放</span>
                    <div>
                        <span>{{my_music.length}}</span>
                        <img src="../../assets/aa7.png" alt="">
                    </div>
                </div>
            </div>
            <div>
                <img src="../../assets/a0q.png" alt="">
                <div>
                    <span>我的电台</span>
                    <div>
                        <span>3</span>
                        <img src="../../assets/aa7.png" alt="">
                    </div>
                </div>
            </div>
            <div>
                <img src="../../assets/a0_.png" alt="">
                <div>
                    <span>我的收藏</span>
                    <div>
                        <span>5</span>
                        <img src="../../assets/aa7.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                my_music: [],
            }
        },
        created:function(){
            this.my_music=this.$store.state.be_playing.pla_list
        },
        methods:{
            cli_play(){
                console.log(this.$router.push("/mymusic_mas"))
            }
        }
    }
</script>

<style scoped>
    .head {
        position: fixed;
        top: 0;
        width: 100%;
        background: red;
        line-height: 40px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        color: white;
        justify-content: space-between
    }

    .head>img {
        width: 28px;
        height: 28px;
    }
    .list{
        margin-top: 15%;
        font-size: 28px;
        font-size: 22px;        
    }
    .list>div{
        height: 80px;
        line-height:110px;
        display: flex;
        justify-content: space-between;
    }
    .list>div>img{
        width: 40px;
        height: 40px;
        margin: 10px;
        margin-top: 35px;
    }
    .list>div>div{
        width: 80%;
        height: 100%;
        border-bottom: 1px solid gainsboro;
        display: flex;
        justify-content: space-between;
    }
    .list>div>div>div>span{
        color:gray;
        font-size: 18px;
    }
    .list>div>div>div>img{
        width: 15%;
    }
</style>