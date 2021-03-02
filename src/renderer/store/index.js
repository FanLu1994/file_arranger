import Vue from 'vue'
import Vuex from 'vuex'
import dir from "./modules/Dir";
import file from "./modules/File";

import { createPersistedState, createSharedMutations } from 'vuex-electron'
import getters from "./getters";

// import modules from './modules'

Vue.use(Vuex)
//
// export default new Vuex.Store({
//   modules,
//   plugins: [
//     createPersistedState(),
//     createSharedMutations()
//   ],
//   strict: process.env.NODE_ENV !== 'production'
// })

const store =new Vuex.Store({
  modules:{
    dir,
    file,
  },
  getters
})


export default store
