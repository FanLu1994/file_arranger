<template>

  <div>

    <div id="block">
      <button class="button is-primary" @click="gotoMainPage">Primary</button>
    </div>

    <div id="box">
      <div v-for="type in Object.keys(fileMap)">
        <div>文件类型: {{type}}</div>

        <ul>
        <li v-for="file in fileMap[type]">
          <figure class="image is-128x128">
            <img src="../assets/icon/file.png">
          </figure>
          <br>
          <div id="fileName" class="block">{{getFileName(file)}}</div>
        </li>
        </ul>

      </div>


    </div>

  </div>


</template>

<script>
import Classifier from '../utils/FileClassfication'
import { mapGetters } from 'vuex'
const path = require("path");

export default {
name: "FileListPage",
  data(){
    return {
      fileList: [1,2,3,4,5,6,7,8,9]
    }
  },

  created() {
    // 调用文件分类器
    Classifier()
  },

  computed:{
    ...mapGetters([
        'fileMap',
    ])
  },

  methods:{
    gotoMainPage(){
      this.$router.push("/")
    },


    //获取文件名
    getFileName(filePath){
      let fileInfo =  path.parse(filePath)
      return fileInfo.name+fileInfo.ext
    }

  }
}
</script>

<style scoped>

#box ul{
  display: flex;
  flex-wrap: wrap;
}
#box li{
  padding: 3px;
  list-style: none;
  margin-right: 15px;
  border: 1px solid #eee;
}
#box img{
  width: 200px;
  height: 150px;
}

#fileName{
  text-align: center;
  width: 128px;
}

</style>
