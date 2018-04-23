<!--
Edited By: @zhouxiaoxing
Edited Time: 2018-4-13
Description: login
-->
<template>

  <div id="login-bgBox">
    <div id="login-bgDiv">
      <transition name="slide-fade" :duration="{ enter: 2000, leave: 0}">
        <login-box @to-loginBox="changeBox" v-if="isLogin"></login-box>
      </transition>
    </div>
  </div>

</template>
<script>
    import loginBox from './LoginBox'
    import Vue from 'vue'

    export default{
        name:'Login',
        components: {
          'login-box':loginBox
        },
        data(){
            return {
                isLogin:true
            }
        },
        mounted (){

        },
        methods: {
          changeBox(value){
            this.isLogin = value;
          },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >

  body {
    margin: 0;
    overflow: hidden;
    background-color: #333;
  }
  #login-bgBox {
    height: 100%;
    width: 100%;
    margin: auto;
    position: relative;
    min-width: 1115px;
    max-width: 1366px;
    min-height: 599px;
    max-height: 768px;
  }
  #login-bgDiv {
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 1366px;
    background: no-repeat #666;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  @media only screen and (min-height:806px) and (orientation:landscape), screen and (min-width:1433px) and (orientation:landscape) {
    #login-bgBox, #login-bgDiv {
      max-width: 1920px;
      max-height: 1080px;
    }
  }

</style>
