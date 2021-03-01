<template>

  <div class="content">
    <div class="columns">
      <div class="column"></div>

      <div class="column is-three-quarters">
        <input v-model="dir"
               class="input is-success is-large myInput"
               type="text"
               placeholder="请选择需要处理的文件夹"
               @click="openDir">
      </div>

      <div class="column"></div>
    </div>

    <div class="columns">
      <div class="column"></div>

      <div class="column is-three-quarters button-container">
        <button class="button is-success mybutton is-large" v-show="dir!==''" @click="gotoFileHandler">开始处理</button>
      </div>

      <div class="column"></div>
    </div>

  </div>


</template>

<script>
const fs = require("fs");
const path = require("path");
const { remote } = require('electron');


export default
{
  name: "SelectDirPage",
  data(){
    return {
      dir : "",
    }
  },


  methods:{
    // 打开文件夹
    openDir(){
      const result = remote.dialog.showOpenDialog({
        properties: ['openFile',"openDirectory"],
      });

      this.dir = result
      this.setPath(result)

      // TODO:跳转至文件夹处理页面
    },

    //将文件夹路径设置为全局状态
    setPath(path){
      console.log(path[0])
      this.$store.dispatch('ChangePath',path[0])
    },

    gotoFileHandler(){
      this.$router.push("/fileList")
    },

  }
}
</script>

<style scoped>

.myInput{
  vertical-align: center;
  margin-top: 25%;
}

.content{
  overflow: hidden;
}

.mybutton{

}

.button-container{
  text-align: center;
}

</style>
