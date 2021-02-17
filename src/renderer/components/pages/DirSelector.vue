<template>
  <div>

    <button class="button is-primary" @click="openDir">请选择文件夹</button>
    <input v-model="dir" class="input is-primary" type="text" placeholder="Primary input"  >
    <input v-model="path" class="input is-primary" type="text" placeholder="Primary input"  >

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const { remote } = require('electron');

export default {
name: "DirSelector",
  data(){
    return {
      dir : "",
    }
  },

  computed:{
    ...mapGetters([
      'path',
    ])
  },

  methods:{
    async openDir(){
      const result = await remote.dialog.showOpenDialog({
          properties: ['openFile',"openDirectory"],
      });

      this.dir = result
      this.setPath(result)
    },

    setPath(path){
      console.log(path)
      this.$store.dispatch('ChangePath',path)
    }
  }
}
</script>

<style scoped>

</style>
