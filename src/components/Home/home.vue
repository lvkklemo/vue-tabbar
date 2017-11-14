<template>
    <div class="home2">
        <k-slider :banners="banners" :swiperOption="swiperOption"></k-slider>
        <k-content @contentClick = 'contentDidClick'></k-content>
        <router-view></router-view>
    </div>
</template>

<script>

    import Slider from '../Common/Swiper/swiper.vue'
    import Content from './content.vue'
    export default {
        data:function(){
          return{
              banners:[
                  'http://img.blog.csdn.net/20171016160652522?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbHZsZW1v/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center',
                  'http://img.blog.csdn.net/20171016160701668?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbHZsZW1v/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center'
              ],
              swiperOption:{
                  direction:'horizontal',
                  loop:true,
                  autoplay:2000,
                  paginationType:'fraction',
                  pagination:'.swiper-pagination'
              }
          }
        },
        methods:{
            contentDidClick:function(type){

                //alert(typeof(type))
                if(type === 1){
                    this.$router.push({
//                        path:'/home/'+type,
                        name:'chat',
                        params:{type:type}
                    })
                }

                if(type === 3){
                    this.$router.push({
                        name: 'health',
                        params: {
                            type: type,
                            title:'健康记录'

                        }
                    })
                }

            }
        },
        components:{
            kSlider :Slider,
            kContent:Content
        }
    }
</script>

<style>

</style>