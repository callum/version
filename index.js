const path = require('path')
const electron = require('electron')
const bump = require('./bump')
const app = electron.app
const Menu = electron.Menu
const Tray = electron.Tray

var tray

app.on('ready', function () {
  app.dock.hide()

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Quit', click: app.quit }
  ])

  tray = new Tray(path.join(__dirname, 'icon.png'))
  tray.on('drop-files', function (event, files) {
    files.forEach(bump)
  })
  tray.setContextMenu(contextMenu)
})
