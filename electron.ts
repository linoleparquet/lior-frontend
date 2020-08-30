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
        width: 800,
        height: 600,
        // title: config.productName,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // et charger le fichier index.html de l'application.
    // const path = '\\src\\index.html';
    // win.loadFile('index.html');

    win.loadURL(`file://${__dirname}/dist/index.html`)

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

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (this.win === null) {
        createWindow()
    }
})

// Dans ce fichier, vous pouvez inclure le reste de votre code spécifique au processus principal. Vous pouvez également le mettre dans des fichiers séparés et les inclure ici.