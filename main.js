console.log("Electron - Processo principal")

// importação dos recursos do framework
// app (aplicação)
// BrowserWindow (criação da janela)
const { app, BrowserWindow } = require('electron/main')
//Janela principal
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1010,
    height: 720,
    //frame: false
    //resizable: false,
    //minimizable: false,
    //closable: false, 
    //autoHideMenuBar: true
  })
  // carregar o documento html na janela
  win.loadFile('./src/views/index.html')
}
// inicialização da aplicação (assincronismo)
app.whenReady().then(() => {
  createWindow()
// só ativar a janela se nenhuma outra estiver ativa
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
// se o sistema não fo mAC encerrar a aplicação quando a janela
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})