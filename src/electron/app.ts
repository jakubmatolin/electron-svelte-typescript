import path from 'path'
import { app, BrowserWindow, Menu } from 'electron'
import { info } from 'electron-log'
import { buildMenuTemplate } from './menu'

const isDev: boolean = process.env.NODE_ENV === 'development'
const isMac: boolean = process.platform === 'darwin' ? true : false
const userDataPath: string = app.getPath('userData')

let mainWindow: BrowserWindow | null

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'Electron Svelte Typescript App',
        width: isDev ? 1600 : 800,
        height: 800,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
        },
    })

    Menu.setApplicationMenu(buildMenuTemplate(app, isDev))

    if (isDev) {
        mainWindow.loadURL('http://localhost:5000')
        mainWindow.webContents.openDevTools()
    } else mainWindow.loadFile(path.join(__dirname, '../public/index.html'))

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', () => {
    info(
        'ELECTRON:',
        `Starting the application, environment ${process.env.NODE_ENV}`
    )
    createMainWindow()
})

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow()
    }
})

app.on('quit', () => {
    info('ELECTRON:', 'Application terminated')
})
