<template>
  <div class="order-userrole-add">
    <div class="alert_box sm_alert">
      <div class="mask"></div>
      <div class="content">
        <!--Header-->
        <div class='content-header'>
          <span class="handerTile">ADD RESOURCE</span>
          <!--close-->
          <span class="closePopup" @click="onClosePopup"><i class="el-icon-close"></i></span>
        </div>
        <!--content-->
        <div class="content-body">
          <div class="content-body-table">
            <!--Row-->
            <div class="table-row">
              <!--column-->
              <div class="table-col">
                <div><span class="redPonit tdTitle">Resource</span></div>
                <div class="inputBox" name="resource" data-must="true">
                  <el-input
                    :maxlength="30"
                    v-model="resource">
                  </el-input>
                </div>
                <div class="error"></div>
              </div>
            </div>
          </div>
        </div>
        <!--Footer-->
        <div class="content-footer">
          <div class="btnBox">
            <button @click="addResources" class="btn btn-md btn-primary resetConfigBtn" >Add</button>
            <button class='btn btn-md btn-default' @click="onClosePopup">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default{
    name: 'add-resource',
    props: {
      infoItem: Object,
      id:Number,
    },
    data(){
      return {
        //bind input item
        resource: "",
      }
    },
    watch: {
    },
    mounted (){
    },
    computed: {

    },
    methods: {

      closeWindow(winName){
        this[winName] = false;
      },
      //Close Window
      onClosePopup(){
        this.$emit("close-window", "windowAdd");
      },

      addResources(){
        let _this = this;
        let resourceList = new Array();
        for(let i=0;i<_this.infoItem.length;i++){
          if(_this.id == _this.infoItem[i].id){
            resourceList =  _this.resource.split(',');
            for (let resource of resourceList){
              _this.infoItem[i].browsers.push(resource);
            }
          }
        }
        _this.$emit("close-window", "windowAdd");
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../less/window.less";

  .inputSty {
    width: 288px;
    height: 23px;
  }
</style>
