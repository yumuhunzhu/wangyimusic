<template>
    <div class="all_box">
        <div class="color_lups">
            <span>&lt;</span>
            <h3>手机号登陆</h3>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
        <form action="http://192.168.43.190:3344/login" method="post">
            <div class="public_sty">
                <img class="icon" src="../../assets/a74.png" alt="phone_icon">
                <input maxlength="11" name="phone" placeholder="输入手机号" type="text">
            </div>
            <div class="public_sty">
                <img class="icon" src="../../assets/a76.png" alt="lock">
                <input name="pwd" placeholder="输入密码" type="password">
            </div>
            <input type="submit" class="sub" value="登陆">
        </form>
        <div v-show="isShow" class="erro">账号或密码不正确！</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isShow:false,
            }
        }
        ,
        created: function(){
            if(location.hash.slice(14)=="false")
            {
                this.isShow=true;
            }
            console.log(location.hash.slice(14))
        }
    }
</script>


<style scoped>
    .erro{
        background: yellow;
        border: 1px solid red;
        width: 100%;
        box-sizing: border-box;
        position: fixed;
        top: 80px;
    }
    .sub {
        display: inline-block;
        width: 100%;
        background: tomato;
        color: gainsboro;
        font-size: 20px;
        text-align: center;
        margin-top: 30px;
        border: none;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
    }

    .color_lups {
        height: 60px;
        line-height: 60px;
        background: crimson;
        display: flex;
        font-size: 20px;
        color: aliceblue;
        padding: 0px 10px;
        justify-content: space-between
    }

    .public_sty {
        border-bottom: 1px solid gainsboro;
        height: 50px;
        line-height: 60px;
    }

    .icon {
        width: 24px;
        margin: 0 5px
    }

    form {
        padding: 25% 5%;
    }

    input {
        width: 85%;
        border: none;
        outline: none;
        display: inline-block;
        font-size: 16px;
        margin-bottom: -10px;
    }
</style>