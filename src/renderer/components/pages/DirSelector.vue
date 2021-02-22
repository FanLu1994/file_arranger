<template>
  <div>

    <button class="button is-primary" @click="openDir">请选择文件夹</button>
    <input v-model="dir" class="input is-primary" type="text" placeholder="Primary input"  >
    <input v-model="path" class="input is-primary" type="text" placeholder="Primary input"  >

    <progress class="progress is-info" max="100" v-show="showProgress">30%</progress>
    <div v-for="file in filesArray" v-show="showFileArray">
      <p>{{file}}</p>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const fs = require("fs");
const path = require("path");
const { remote } = require('electron');

export default {
name: "DirSelector",
  data(){
    return {
      dir : "",

      filesArray:[],


      showProgress:false,
      showFileArray:false,
    }
  },

  computed:{
    ...mapGetters([
      'path',
    ])
  },

  methods:{
    // 打开文件夹
    openDir(){
      const result = remote.dialog.showOpenDialog({
          properties: ['openFile',"openDirectory"],
      });

      this.dir = result
      this.setPath(result)
      this.filesArray = []

      this.showProgress = true
      let ret = this.getAllFile(result[0])
      if(ret){
        this.showProgress = false
        this.showFileArray = true
      }
    },

    //将文件夹路径设置为全局状态
    setPath(path){
      console.log(path)
      this.$store.dispatch('ChangePath',path)
    },


    getAllFile(targetPath){
      let that  = this;

      fs.readdir(targetPath,function (err,files) {
        if(err){
          console.error(err)
        }else{
          files.forEach(function (filename) {    // 遍历当前path下所有文件
            let filePath = path.join(targetPath,filename)

            fs.stat(filePath,function (err, stats){  // 判断文件是否是文件夹
              if(err){
                console.error(err)
              }else{
                let isFile = stats.isFile();
                let isDir = stats.isDirectory();
                if(isFile){
                  // console.log(filename)
                  that.filesArray.push(filename)   //递归处理文件夹
                }else{
                  that.getAllFile(filePath)
                }
              }
            })
          })
        }
      })

      return true;
    },
  }
}
</script>

<style scoped>

</style>
