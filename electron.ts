const {
    app,
    BrowserWindow
} = require('electron')


function startApp() {
    startJar();
    createWindow();
}

function startJar() {
    const path = app.getAppPath() + '\\resources\\lior-0.0.1-SNAPSHOT.jar';

    //Démarre le back-end
    require('child_process').spawn(
        'java', ['-jar', path, '']
    );
}

function createWindow() {

    // Cree la fenetre du navigateur.
    const win = new BrowserWindow({
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL(`file://${__dirname}/dist/index.html`)
    win.removeMenu()
    win.once('ready-to-show', () => {
        win.maximize()
    })

}

// Cette méthode sera appelée quant Electron aura fini
// de s'initialiser et prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quant cet événement est émit.
app.whenReady().then(startApp)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})