




const { contextBridge, ipcRenderer } = require('electron')
const Renderer = require('electron/renderer')


contextBridge.exposeInMainWorld('api', {
    dbConnect: () => ipcRenderer.send('db-connect'),
    dbStatus: (message) => ipcRenderer.on('db-status', message),
    aboutExit: () => ipcRenderer.send('about-exit'),
    createNote: (stickyNotes) => ipcRenderer.send('create-note', stickyNotes),

    resetForm: (args) => ipcRenderer.on('reset-form', args),
    listNotes: () => ipcRenderer.send('list-notes'),
    renderNotes: (notes) => ipcRenderer.on('render-notes', notes),
    updateList: () => ipcRenderer.send('update-list'),
    mainReload: (args) => ipcRenderer.on('main-reload', args),
    deleteNote: (id) => ipcRenderer.send('delete-note', id)
})


