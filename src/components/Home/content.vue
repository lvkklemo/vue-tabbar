<template>
    <div class="content">

        <div class="top">
            <div class="left" @click="contentDidClick(1)">
                <span class="title">免费咨询</span>
                <span class="subtitle">专业医生在线解答</span>
            </div>
            <div class="right" @click="contentDidClick(2)">
                <span class="title">找医生</span>
                <span class="subtitle">按专业科室查找</span>
            </div>
        </div>
        <div class="bottom">
            <div class="left" @click="contentDidClick(3)">
                <span class="title">健康记录</span>
                <span class="subtitle">记录您的健康生活</span>
            </div>
            <div class="right" @click="contentDidClick(4)">
                <span class="title">求助记录</span>
                <span class="subtitle">家人历史提醒</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        methods:{
            contentDidClick:function(type){
                this.$emit('contentClick',type);
            }
        }

    }
</script>

<style>

    .content{
        display: flex;
        flex-direction: column;
        padding: 8px 0;
    }

    .content .top{
        display: flex;
        flex-direction: row;
        height: 100px;
        margin-bottom: 2px;
    }

    .content .top div{
        flex: 1;
    }

    .content .bottom{
        display: flex;
        flex-direction: row;
        height: 100px;
    }

    .content .bottom div{
        flex: 1;
    }

    .content .top .left{
        background: url("../../assets/content/home-functionbg1@2x.png");
        background-size: 100% 100%;
        margin-right: 1px;
    }
    .content .top .right{
        background: url("../../assets/content/home-functionbg2@2x.png");
        background-size: 100% 100%;
        margin-left: 1px;
    }

    .content .bottom .left{
        background: url("../../assets/content/home-functionbg3@2x.png");
        background-size: 100% 100%;
        margin-right: 1px;
    }
    .content .bottom .right{
        background: url("../../assets/content/home_functionbg4@2x.png");
        background-size: 100% 100%;
        margin-left: 1px;
    }

    .title{
        margin-top: 25px;
        margin: 25px 0 0 8px;
        display: block;
        color: white;
        font-size: 14px;
    }

    .subtitle{
        margin: 15px 0 0 8px;
        display: block;
        color: white;
        font-size: 12px;
    }

</style>