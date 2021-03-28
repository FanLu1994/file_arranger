<template>

  <div class="file_list_wrapper">

    <Row :gutter="20" id="back_home_wrapper">
      <Col span="12" offset="2" >
<!--        <Icon type="ios-arrow-back" @click="gotoMainPage" id="home_icon" size="30" color="#35AC5E"></Icon>-->
        <Button  style="background-color:#35AC5E; color: white;font-size: 20px" icon="ios-arrow-back" @click="gotoMainPage">返回首页</Button>
      </Col>

    </Row>

    <Row :gutter="20" id="file_wrapper">
      <Col span="16" offset="2">
        <div v-for="type in Object.keys(fileMap)" :id="'type-'+type">
          <Button type="success" ghost class="btn"> 类型:{{type}}</Button>
          <Button type="success" ghost class="btn" @click="openDir(type,1)"> 移动到新文件夹</Button>
          <Button type="success" ghost class="btn" @click="openDir(type,2)"> 复制到新文件夹</Button>

          <List   border id="list">
            <ListItem v-for="file in fileMap[type]">{{ getFileName(file) }}</ListItem>
          </List>

        </div>
      </Col>

      <Col span="5" offset="1">
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
const fs = require("fs");
const { remote } = require('electron');

export default {
name: "FileListPage",
  data(){
    return {
      fileList: [1,2,3,4,5,6,7,8,9],

      targetPath:"",
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
    },

    // 打开文件夹移动或复制  opt 1为移动 2为复制
    openDir(type,opt){
      console.log(type)

      // 选择文件夹
      const result = remote.dialog.showOpenDialog({
        properties: ['openFile',"openDirectory"],
      });

      if(result===undefined){
        return
      }

      // 新建文件夹
      console.log(result[0])
      this.targetPath = path.join(result[0],"类型"+type)
      console.log(this.targetPath)


      let that = this
      fs.access(that.targetPath,function (err){
        if(err){//如果文件不存在，就创建这个文件
          fs.mkdir(that.targetPath,function (err) {
            console.log("创建文件夹成功")
          });
        }else{
          //如果这个文件已经存在，就进入下一个循环
          console.log("文件夹已经存在")
        }

        that.moveFile(that.targetPath,type,opt)
      })
    },

    /**
     * 移动或复制文件到新文件夹
     * @param targetPath  目标路径
     * @param type  文件类型
     * @param opt   操作类型 1为移动,2位复制
     */
    moveFile(targetPath,type,opt){
      let that = this
      this.fileMap[type].forEach(item=>{
        let newPath = path.join(targetPath,that.getFileName(item))
        console.log(newPath)
        // 检查文件是否存在
        if(!fs.existsSync(newPath)){
          // 执行复制操作
          fs.writeFileSync(newPath, fs.readFileSync(item));
          // 如果选择的是移动,则把源文件删除
          if(opt===1){
            fs.unlinkSync(item);
            that.successNotify("移动文件成功!")
          }else{
            that.successNotify("复制文件成功!")
          }

        }else{
          that.failNotify("文件已经存在了")
        }
      })

    },


    // 胜利提示
    successNotify (msg) {
      this.$Notice.success({
        title: '操作成功!',
        desc:  msg
      });
    },

    // 失败提示
    failNotify (msg) {
      this.$Notice.error({
        title: '操作失败!',
        desc:  msg
      });
    }

  }
}
</script>

<style scoped>
#box{
  margin-left: 15%;
  margin-right: 15%;
}

.file_list_wrapper{
  font-size: 18px;
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

.btn{
  font-size: 18px;
}


</style>
