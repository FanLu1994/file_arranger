import { app, BrowserWindow,Menu } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`


const template = [
  {
    label: '菜单1',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',  // 快捷键
      },
      {
        type: 'separator'
      },
      {
        label: 'Redo'
      },
    ]
  },
  {
    label: '菜单2',
    submenu: [
      {
        label: '测试',
        accelerator: 'Shift+A',
        click:()=>{
          var win = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
              nodeIntegration: true
            }
          })
          win.loadFile('yellow.html');
          win.on('closed',()=>{
            win = null
          })
        },
      },
      {
        label: 'Toggle Full Screen'
      }
    ]
  },
  {
    label: '路由导航',
    submenu: [
      {
        label: '日历',
        click: ()=>{
          mainWindow.webContents.send('href', 'calender');
        }
      }
    ]
  }
];


function createWindow () {
  /**
   * Initial window options
   */
  // 自定义菜单栏
  const appMenu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(null)

  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    // frame: false,
    width: 1000,
    // frame: false, //取消window自带的关闭最小化等
    resizable: false //禁止改变主窗口尺寸
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
