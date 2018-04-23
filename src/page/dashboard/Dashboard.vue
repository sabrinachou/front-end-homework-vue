<!--
Edited By: @zhouxiaoxing
Edited Time: 2018-4-13
Description: Dashboard Component
-->
<template>
    <div>Dashboard
      <div id="app">
        {{ message }}
        <div v-for="(value, index) in items">
          {{ index }}: {{ value }}
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "dashboard",
        data(){
          return {
            message:  'Hello Vue!',
            items: ['a', 'b', 'c']
          }
        },

      mounted(){
        Vue.set(items, 1, 'g')
      },
    }
</script>

<style scoped>

</style>
