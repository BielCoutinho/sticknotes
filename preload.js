/**
 * preload.js - Usado no framework electron para aumentar a segurança e o desempenho
 */

// importação dos recursos do freamework electro
//ipcRederer permite estabelecer uma comunicação entre processos (IPC) main.js <=> renderer.js
// contextBridge: permissões de comunicação entre processos usando a api do electron
const { contextBridge, ipcRenderer } = require ('electron')
const Renderer = require('electron/renderer')

//permissoões para estabelecer a comunicação ente processos
contextBridge.exposeInMainWorld('api', {
    dbConnect: () => ipcRenderer.send('db-connect'),
    dbStatus: (message) => ipcRenderer.on('db-status', message),
    aboutExit: () => ipcRenderer.send('about-exit'),
    createNote: (stickyNotes) => ipcRenderer.send('create-note', stickyNotes),
    // "args" Argumento Vazio
    resetForm: (args) => ipcRenderer.on('reset-form', args),
    listNotes: () => ipcRenderer.send('list-notes'),
    renderNotes: (notes) => ipcRenderer.on('render-notes', notes),
    updateList: () => ipcRenderer.send('update-list'),
    mainReload: (args) => ipcRenderer.on('main-reload', args),
    deleteNote: (id) => ipcRenderer.send('delete-note', id)
})


