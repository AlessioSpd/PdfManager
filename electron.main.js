const {app, BrowserWindow, ipcMain} = require('electron');
const url = require("url");
const path = require('path');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 500,
        minWidth: 580,
        minHeight: 450,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `./dist/pdf-manager/index.html`),
            protocol: 'file:',
            slashes: true
        })
    );

    // mainWindow.webContents.openDevTools();
}

app.whenReady().then( () => {
    createWindow()
});