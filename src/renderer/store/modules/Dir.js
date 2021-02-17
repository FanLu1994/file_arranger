
const dir = {
    state: {
        path:"test_path",
    },
    mutations: {
        CHANGE_PATH: (state,path) => {
            state.path = path
        },
    },
    actions: {
        ChangePath: (context,path) => {
            console.log("ChangePath",path)
            context.commit('CHANGE_PATH',path)
        },
    }
}

export default dir
