<template>

  <div>

    <Row :gutter="20" id="back_home_wrapper">
      <Col span="12" offset="2" >
<!--        <Icon type="ios-arrow-back" @click="gotoMainPage" id="home_icon" size="30" color="#35AC5E"></Icon>-->
        <Button  style="background-color:#35AC5E; color: white" icon="ios-arrow-back" @click="gotoMainPage">返回首页</Button>
      </Col>

    </Row>

    <Row :gutter="20" id="file_wrapper">
      <Col span="14" offset="2">
        <div v-for="type in Object.keys(fileMap)" :id="'type-'+type">
          <Button type="success" ghost> 类型:{{type}}</Button>
          <Button type="success" ghost> 移动到新文件夹</Button>
          <Button type="success" ghost> 复制到新文件夹</Button>

          <List   border id="list">
            <ListItem v-for="file in fileMap[type]">{{ getFileName(file) }}</ListItem>
          </List>

        </div>
      </Col>

      <Col span="6" offset="2">
        <Anchor show-ink  >
          <AnchorLink v-for="type in Object.keys(fileMap)" :href="'#type-'+type" :title="'类型:'+type" />
        </Anchor>
      </Col>
    </Row>


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

#back_home_wrapper{
  margin-bottom: 10px;
}


#list{
  margin-top: 10px;
  margin-bottom: 20px;
}

</style>
