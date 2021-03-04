<template>

  <div>

    <div id="box">

      <ul>
        <li v-for="file in fileList">
          <figure class="image is-128x128">
            <img src="../assets/icon/file.png">
          </figure>
          <br>
          <h4 id="fileName">{{file}}</h4>
        </li>
      </ul>

    </div>

  </div>


</template>

<script>
import Classifier from '../utils/FileClassfication'

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
}

</style>
