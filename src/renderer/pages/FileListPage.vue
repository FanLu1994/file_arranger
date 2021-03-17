<template>

  <div>

    <div id="block">
<!--      <button class="button is-primary" @click="gotoMainPage">返回</button>-->
      <Icon type="ios-arrow-back" @click="gotoMainPage" id="home_icon" size="50" color="#35AC5E"/>
    </div>

    <div id="box">
      <Collapse v-for="type in Object.keys(fileMap)">
        <Panel id="collapse_panel">
          <Button type="success" id="fileTypeName">{{type}}</Button>
          <p slot="content">
            <List  size="large" v-for="file in fileMap[type]">
              <ListItem>{{ getFileName(file) }}</ListItem>
            </List>
          </p>
        </Panel>

      </Collapse>

<!--      <div v-for="type in Object.keys(fileMap)">-->
<!--        <div>文件类型: {{type}}</div>-->

<!--        <List  size="large" v-for="file in fileMap[type]">-->
<!--          <ListItem>{{ getFileName(file) }}</ListItem>-->
<!--        </List>-->

<!--      </div>-->


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
#box{
  margin-left: 15%;
  margin-right: 15%;
}

#box ul{
  display: flex;
  flex-wrap: wrap;
}
#box li{
  padding: 3px;
  list-style: none;
  margin-right: 15px;
  /*border: 1px solid #eee;*/
}
#box img{
  width: 200px;
  height: 150px;
}

#collapse_panel{
  margin-left: 15px;
}

#fileTypeName{
  width: 60px;
  height: 100%;
}

#fileName{
  text-align: center;
  width: 128px;
}

</style>
