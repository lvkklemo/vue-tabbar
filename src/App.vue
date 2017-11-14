<template>
  <div>

      <router-view></router-view>
      <kk-tabbar></kk-tabbar>

  </div>
</template>

<script>

    import kkTabbar from './components/Tabbar/ktabbar.vue'

    export default {
        components:{
            kkTabbar
        }
    }

</script>

<style>
</style>
