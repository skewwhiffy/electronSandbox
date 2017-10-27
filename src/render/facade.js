const { ipcRenderer } = require('electron');

class Facade {
  helloMain() {
    ipcRenderer.send('hello-main');
  }
}

new Facade().helloMain();