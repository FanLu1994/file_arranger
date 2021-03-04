/**
 * 文件分类函数
 */
import store from "../store";

export default function Classifier() {
    store.getters.files.forEach(function (item){
        console.log(item)
        // TODO 实现文件分类
    })
}
