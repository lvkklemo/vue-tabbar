<template>
    <div class="nav" v-model="select">
        <router-link tag="div" class="tab-item" to="/home">
            <div class="tab-icon home"></div>
            <span class="tab-link">首页</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/doctor">
            <div class="tab-icon doctor"></div>
            <span class="tab-link">医生</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/family">
            <div class="tab-icon family"></div>
            <span class="tab-link">家庭成员</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/my">
            <div class="tab-icon my"></div>
            <span class="tab-link">我的</span>
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {

        create:function(){

        },

        data:function(){
            return{
                select:'home'
            }
        },

        methods:{

        }

    }
</script>

<style>

    .nav{
        position: fixed;
        height: 44px;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid lightgray;
        display: flex;
        background: white;
    }

    .nav .tab-item{
        flex: 1;
        text-align: center;
        align-items: center;

        display: flex;
        flex-direction: column;
    }

    .tab-icon{
        margin-top: 4px;
        display: inline-block;
        width: 14px;
        height: 18px;
        background-size: 14px 18px;

    }
    /*首页*/
      .home{
          background-image: url("../../assets/tabbar/tab_icon01_n@2x.png");
      }
    .router-link-active .home{
        background-image: url("../../assets/tabbar/tab_icon01_s@2x.png")
    }
    /*医生*/
       .doctor{
           background-image: url("../../assets/tabbar/tab_icon02_n@2x.png");
       }
    .router-link-active .doctor{
        background-image: url("../../assets/tabbar/tab_icon02_s@2x.png")
    }
    /*家庭成员*/
      .family{
          background-image: url("../../assets/tabbar/tab_icon04_n@2x.png");
      }
    .router-link-active .family{
        background-image: url("../../assets/tabbar/tab_icon04_s@2x.png")
    }
    /*我的*/
       .my{
           background-image: url("../../assets/tabbar/tab_icon05_n@2x.png");
       }
    .router-link-active .my{
        background-image: url("../../assets/tabbar/tab_icon05_s@2x.png")
    }

    .tab-link{
        margin-top: 2px;
        color: gray;
        font-size: 12px;
    }

    .router-link-active .tab-link{
        /*border-bottom 2px solid #50d2c2*/
        color: #85d1ff;

    }

</style>
