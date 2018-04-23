<!--
Edited By: @zhouxiaoxing
Edited Time: 2018-4-13
Description: Agents Component
-->
<template>
  <div class="queryContai">
    <div class="contents">
      <div class="theme">
        <!--Header-->
        <div class="agentsHeader">
          <div class="agents">
            <span>Agents</span>
          </div>
          <div class="normal">
            <span>All</span>
          </div>
          <div class="normal active">
            <span class="">Physical</span>
          </div>
          <div class="normal">
            <span>Virtual</span>
          </div>
        </div>
        <!--Content-->
        <div class="agentsContent">
          <div class="infoLayout">

            <div v-for="(item,index) in infoItem" :key="index" :class="[item.class, item.status]">
              <div class="infoItemLeft">
                <div class="circle" ></div>
              </div>
              <div class="infoItemRight">
                <div class="infomation">
                  <span class="infomationUrl">{{item.doamin}}</span>
                  <span>{{item.serverAddress}}</span>
                </div>
                <div class="infomation">
                  <i class="cd-icon-add" @click="addResources(item.id)"></i><span class="resources">Specify Resources</span>
                  <span>| Resources:</span>
                  <span v-for="(item2,index2) in item.browsers" :key="index2" class="browsers">
                    {{item2}}<i class="cd-icon-delete" @click="deleteResources(item.id, index2,item2)"></i></span>
                </div>
              </div>
            </div>

          </div>
          <div class="summaryLayout">
            <div class="summary">
              <h3>Summary</h3>
              <hr class="underLine" />
              <div class="summaryItem">
                <table>
                  <tr  v-for="(item,index) in summary" :key="index" >
                    <td>{{item.name}}</td>
                    <td>{{item.value}}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="history">
              <h3>History</h3>
              <hr class="underLine" />
              <div v-for="(item,index) in history" :key="index" class="historyItem">
                <span>{{item.name}}</span>|<span>{{item.status}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <add-resource
      @close-window="closeWindow"
      v-if="windowAdd"
      :infoItem="infoItemData"
      :id="idData"
    ></add-resource>
  </div>
</template>

<script>
    import Vue from 'vue'
    import addResource from "./window/add_resource.vue"
    let infoItem = require('./data/infoItem.json')
    let summary = require('./data/summary.json')
    let history = require('./data/history.json')
    export default {
      name: "agents",

      components: {
        addResource
      },

      data(){
        return {
          windowAdd: false,
          infoItem:infoItem,
          summary:summary,
          history:history
        }
      },

      methods:{
        addResources(id){
          this.infoItemData = this.infoItem;
          this.idData = id;
          this.windowAdd = true;
        },
        //close the pop-up window
        closeWindow(a){
          this[a] = false;
        },

        deleteResources(id,index,items){
          let _this = this;
          _this.$confirm('Do you want to delete Resource ' + items + ' ？', 'DELETE RESOURCE', {
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            type: 'warning'
          }).then(() => {
            let self = _this;
            for(let i=0;i<self.infoItem.length;i++){
              if(id == self.infoItem[i].id){
                infoItem[i].browsers.splice(index, 1);
              }
            }
          }).catch((err) => {
            this.$message({
              type: 'info',
              message: err === 'cancel' ? 'Cancel' : 'System Error'
            });
          });
        },

        mounted(){
        },
      }

    }
</script>

<style  lang="less"scoped>
  @import "../../less/common";
  @import "../../less/common_config";
  @import "Agents";
</style>
