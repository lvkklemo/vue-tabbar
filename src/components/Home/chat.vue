<template>

    <transition name="slide">
        <div class="chatdiv">

            <div class="back" @click="backAction"></div>

            <div class="navBar">
                <span>免费咨询</span>
            </div>

            <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="textarea"
                    class="elinput"
                    >
            </el-input>

            <el-button type="primary" class="btn" @click="submitAction()">提交</el-button>

        </div>
    </transition>

</template>

<script>

    import {prompts,notice,confirms,noticeHide,isConfirm_confirm} from '../Common/Alert/popup.js'

    export default {

        data:function(){
          return {
              textarea:''
          }
        },
        methods:{
            backAction: function(){
                this.$router.back();
            },
            submitAction:function(){

                var self = this;
               if(self.textarea ==''){
                   confirms("请填写内容",'提示');
                   document.getElementById("confirmY").onclick = function(){

                       isConfirm_confirm();
                   }
                   document.getElementById("confirmX").onclick = function(){

                       isConfirm_confirm();
                       self.backAction()
                   }

                }else{
                   notice('提交成功','提示','OK');
                   var self = this
                   document.getElementById("notice").onclick = function(){
                       noticeHide()
                       self.backAction()
                   }
                }
            }
        }
    }
</script>

<style>

    @import "../Common/Alert/popup.css";
    .chatdiv{
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        text-align: center;
    }

    .chatdiv .back{
        position: absolute;
        left: 8px;
        top: 12px;
        background: url("../../assets/content/nav_backbtn@2x.png") no-repeat;
        background-size: 16px 24px;
        width: 16px;
        height: 24px;
    }
    .chatdiv .navBar{
        background: #20abfe;
        height: 50px;
        width: 100%;
        text-align: center;
    }
    .chatdiv .navBar span{
        display: inline-block;
        font-size: 16px;
        height: 44px;
        line-height: 44px;
        color: white;
    }
    .chatdiv .cont{
        margin-top: 50px;
    }
    /*输入文本框*/
    .chatdiv .elinput{
        width: 90%;
        margin: 40px auto 20px;
    }
    /*提交按钮*/
    .chatdiv .btn{
        width: 90%;
        margin: 0 auto;
    }

    .slide-enter-active,.slide-leave-active{
        transition: all 0.3s;
    }

    .slide-enter,.slide-leave-to{
        transform: translate3d(100%,0,0);
    }

</style>