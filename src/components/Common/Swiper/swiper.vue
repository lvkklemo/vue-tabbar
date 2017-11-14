<template>

    <div class="swiper-box" rel="swiperBox">
        <swiper :options="swiperOption" class="swiper-container" ref="mySwiper">

            <swiper-slide v-for="(banner,index) in banners">
                <img :src="banner" class="swiper-image">
            </swiper-slide>

            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>

        </swiper>
    </div>


</template>

<script>

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {

        data:function() {
            return {
            }
        },

        props:{
            banners:{
              type:Array
          },
            swiperOption:{
            }

        },

        components:{
            swiper:swiper,
            swiperSlide:swiperSlide
        },

        //定义这个sweiper对象
        computed: {
            swiper:function() {
            return this.$refs.mySwiper.swiper;
            }
        },
    }
</script>

<style>

    @import "swiper.css";
    .swiper-box{
        width: 100%;
        height: 180px;
        margin: 0 auto;
    }
    .swiper-container{
        width: 100%;
        height: 100%;
    }
    .swiper-box img{
        width: 100%;
        height: 100%;
    }
</style>