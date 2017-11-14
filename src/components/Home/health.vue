<template>

    <transition name="slide">

        <div class="health-box">
            <div class="back" @click="backAction">
            </div>

            <div class="knav">
                <span :v-model="title"> {{ title }} </span>
            </div>
            <!--加载 -->
            <kLoading class="kloading" v-show="loading"></kLoading>
        </div>

    </transition>

</template>

<script>

    import Loading from '../../components/Common/Load/loading.vue'

    export default {

        created:function(){
            var self  = this
            setTimeout(function(){
                self.loading = false
            },1000);
        },

        data:function(){
          return {
              title: this.$route.params.title,
              loadingWord:'正在加载...',
              loading:true
          }
        },

        methods:{
            backAction:function(){
                //alert(this.$route.params.title);
                this.$router.back();
            }
        },

        components:{
            kLoading:Loading
        }
    }

</script>

<style>
    /*box*/
    .health-box{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        z-index: 100;
    }

    /*返回*/
    .back{
        position: absolute;
        left: 10px;
        top: 13px;
        background: url("../../assets/content/nav_backbtn@2x.png");
        background-size: 16px 24px;
        background-repeat: no-repeat;
        width: 16px;
        height: 24px;
    }

    /*导航*/
    .health-box .knav{
        width: 100%;
        height: 50px;
        background: #20abfe;
        text-align: center;
    }

    .health-box .knav span{
        display: inline-block;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        color: white;
    }

    .kloading{
        position: fixed;
        top : 50%;
        left:50%;
        transform:translate(-50%,-50%);
    }

    /*转场动画*/
    .slide-enter-active,.slide-leave-active{
        transition: all 0.3s;
    }

    .slide-enter,.slide-leave-to{
        transform: translate3d(100%,0,0);
    }
</style>