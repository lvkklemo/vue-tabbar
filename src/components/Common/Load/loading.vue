<template>
    <div class="loading-box">
        <img class="icon" src="./loading.gif" alt=""/>
        <span class="word"> {{loadingWord}} </span>
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                name :'loading'
            }
        },

        props:{
            loadingWord:{
                type:String,
                default:'loading'
            }
        }
    }
</script>

<style>
    .loading-box{
        text-align: center;
        z-index: 100;
        width: 200px;
        height: 80px;
    }

    .loading-box .icon{
        margin: 0 auto;
        width: 40px;
        height: 40px;
        display: block;
    }

    .loading-box .word{
        /*vertical-align: middle;*/
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        margin-left: 10px;
    }

</style>