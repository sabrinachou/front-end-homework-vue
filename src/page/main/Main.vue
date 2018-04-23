<!--
Edited By: @zhouxiaoxing
Edited Time: 2018-4-13
Description: Main Component
-->
<template>
  <div id="main">
    <div id="header">
      <div class="logo" @click="router.go({name:'main'})">
        <div class="logo-img" >
          FRONT-END-HOMEWORK
        </div>
      </div>
      <div class="header-right">
        <img :src="show" alt="" />
        <div class="user-name">
          <div class="name">
            <span>Signed in as </span><span class="account">{{account}}</span>
          </div>
          <div class="Introduction">
            <div class="icon" @click="logout"></div><!---->
          </div>
        </div>
      </div>
    </div>
    <div id="left">
      <nav class="left-nav">
        <div v-for="(item,index) in navLeft" :key="index" @click="handleChange(item)" style="width:100%">
          <router-link :to="['/main/']+item.router" :key="item.router">
				    	<span class="nav_title">
				    		<div :class="[{active:item.active},item.nav_title,item.router]">
				    			{{item.title}}
				    			<i class="icon"></i>
				    		</div>
				    		<b :class="[{leftBar:item.active}]"></b>
				    	</span>
           </router-link>
        </div>
      </nav>
    </div>
    <div id="right">
      <div class="contain">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import show from '../../assets/main/show.png';
  import radiusLogo from '../../assets/main/man-logo.png';
  let navLeft = require('./data/navLeft.json');
  export default{
    name: 'Main',
    components: {

    },
    data(){
      return {
        activeNames: [],
        show:show,
        radiusLogo:radiusLogo,
        account:"zhouxiaoxing",
        navLeft:navLeft,
      }
    },
    watch:{
      "$route":function(newValue,oldValue){
        if($(".el-button").eq(0).text().trim()=="cancel"){
          $(".el-button").eq(0).click();
        }
      },
    },
    methods:{
      logout: function(event){
        this.$router.push("/login");
      },
      handleChange(item){
        for(let i=0;i<this.navLeft.length;i++){
          this.navLeft[i].active = false;
        }
        item.active = true;
      },
      activeNavigation(){
        let currentPath = window.location.href.split("#")[1].split("?")[0].substring(1).split("/");
        for(let i=0;i<this.navLeft.length;i++){
          this.navLeft[i].active = this.navLeft[i].router===currentPath[1]
        }
      },
    },
    created(){
    },
    updated(){
      this.activeNavigation();
    },
    mounted(){
      this.activeNavigation();
    },
  }
</script>
<style lang="less" scoped>
  @import "../../less/common";
  @import "../../less/common_config";
  @import "Main.less";
</style>
