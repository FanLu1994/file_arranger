<template>
  <div>

    <button class="button is-primary" @click="openDir">请选择文件夹</button>
    <input v-model="dir" class="input is-primary" type="text" placeholder="Primary input"  >

  </div>
</template>

<script>

const { remote } = require('electron');

export default {
name: "DirSelector",
  data(){
    return {
      dir : "",
    }
  },

  methods:{
    async openDir(){
      const result = await remote.dialog.showOpenDialog({
          properties: ['openFile',"openDirectory"],
      });

      this.dir = result
    }

  }
}
</script>

<style scoped>

</style>
