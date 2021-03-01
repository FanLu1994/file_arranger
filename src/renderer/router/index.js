import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const { ipcRenderer } = require('electron');


 let router =  new Router({
  routes: [
    {
      path: '/landing',
      name: 'landing-page',
      component: require('../components/LandingPage').default
    },
    {
      path: '/calender',
      name:'calender',
      component: require('../components/Calender').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: "/test",
      name: 'dirSelector',
      component: require('../components/pages/DirSelector').default
    },
    {
      path: "/",
      name: 'SelectDir',
      component: require('../pages/SelectDirPage').default
    },
    {
      path:"/fileList",
      name:'FileList',
      component: require('../pages/FileListPage').default
    }
  ]
})


ipcRenderer.on('href', (event, arg) => {
  if (arg) {
    router.push({ name: arg });
  }
});

export default router;
