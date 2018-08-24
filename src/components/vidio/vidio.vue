<template>
    <div>
        <div class="head">
            <img class="header_img" src="../../assets/identify_widget_icn_new.png" alt="h-icon">
            <el-input class="serch_box" style="height:3%" placeholder="请输入搜索内容" prefix-icon="el-icon-search">
            </el-input>
            <img class="header_img" src="../../assets/af3.png" alt="h-icon">
        </div>
        <div class="select">
            <span @click="gomusic">音乐</span>
            <span style="color:red;border-bottom:2px solid red;padding:4%">视屏</span>
            <span>电台</span>
        </div>
        <div v-for="(item,index) in vidio">
            <video :src=item.vidio_name controls="controls"></video>
            <p>{{item.title}}</p>
        </div>

    </div>
</template>


<script>
    import ip from "../../ipconfig.js"
    export default{
        name:"ff",
        methods:{
            gomusic(){
                this.$router.push("/home_page")
            }
        },
        data(){
            return {
                vidio:[]
            }
        },
        created:function(){
            this.$store.dispatch("getVidio");
            this.vidio=this.$store.state.vidio_list
            for(let i=0;i<this.vidio.length;i++){
                this.vidio[i].vidio_name=ip+"/vidio/"+this.vidio[i].vidio_name
            }
        }
    }
</script>


<style scoped>
    .select{
        width: 70%;
        display: flex;
        margin: auto;
        justify-content: space-between;
    }
    .select>span{
        padding: 4%;
    }
    .head{
        position: fixed;
        top: 0;
        background:crimson;
        display: flex;
        justify-content: space-between;
        padding: 2.5%;
        box-sizing: border-box;
        width: 100%;
    }
    .head>img{
        width: 10%;
        height: 10%;
        margin: 0;
    }
    video{
        width: 100%;
    }
</style>