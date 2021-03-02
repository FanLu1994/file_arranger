
const file = {
    state:{
        fileList :[]
    },

    mutations:{
        SAVE_LIST:(state,files)=>{
            state.fileList = files
        }
    },

    actions:{
        saveList:(context,files)=>{
            context.commit('SAVE_LIST',files)
        }
    },


}

export default file
