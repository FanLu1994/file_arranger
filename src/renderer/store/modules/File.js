
const file = {
    state:{
        fileList :[],
        fileMap : [],
    },

    mutations:{
        SAVE_LIST:(state,files)=>{
            state.fileList = files
        },

        SAVE_MAP:(state,fileMap)=>{
            state.fileMap = fileMap
        }
    },

    actions:{
        saveList:(context,files)=>{
            context.commit('SAVE_LIST',files)
        },

        saveMap:(context,fileMap)=>{
            context.commit('SAVE_MAP',fileMap)
        }
    },


}

export default file
