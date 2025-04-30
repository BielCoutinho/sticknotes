/**
 * Preocesso de renderização do docimento sobre.html
 */

//enviar uam mensagem para o processo principal fechar a janela sobre
function exit() {
    //executar a função aboutExit() vinculada ao preload.js, atraves da api do electron(ipcRenderer)
    api.aboutExit()
}