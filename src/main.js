const {app, BrowserWindow, ipcMain} = require('electron');
const url = require('url');
const path = require('path');

let window;

function createWindow() {
  if (window) {
    return;
  }
  window = new BrowserWindow();
  window.loadURL(url.format({
    pathname: path.join(__dirname, '/render/template.html'),
    protocol: 'file:',
    slashes: true
  }));
  window.webContents.openDevTools();
  window.on('closed', () => {
    window = null;
  });
}

app.on('ready', createWindow);

app.on('activate', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('hello-main', () => {
  console.log('well, hello there');
})