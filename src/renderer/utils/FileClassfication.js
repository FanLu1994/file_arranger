/**
 * 文件分类函数
 */
import store from "../store";
const path = require("path");

export default function Classifier() {
    // 文件分类存储字典
    let fileMap = {}

    store.getters.files.forEach(function (item){
        console.log(item)
        // TODO 实现文件分类

        // 解析文件路径
        let fileInfo = path.parse(item)
        if (!fileMap.hasOwnProperty(fileInfo.ext)){
            fileMap[fileInfo.ext] = []
        }
        fileMap[fileInfo.ext].push(item)
    })

    store.dispatch('saveMap',fileMap)

    // Object.keys(fileMap).forEach(function (item){
    //     console.log(item)
    //     console.log(fileMap[item])
    // })
}
