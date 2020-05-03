const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const remote = electron.remote;
const path = require("path");
let mainWindow;
let loading;

/**
 * Method for create window for electron
 */
async function createWindow(isDev) {
  const EXPRESS_APP = await require("./createExpressApp")(true);

  mainWindow = new BrowserWindow({
    show: false,
    width: electron.screen.getPrimaryDisplay().bounds.width,
    height: electron.screen.getPrimaryDisplay().bounds.height,
    webPreferences: { nodeIntegration: true },
  });

  mainWindow.webContents.once("dom-ready", () => {
    console.log("main loaded");
    mainWindow.show();
    loading.hide();
    loading.close();
    loading = null;
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:8080"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

/**
 * Method for create elecotron app
 * @param isDev indicate is dev application
 */
function createElectronApp(isDev) {
  app.on("ready", () => {
    loading = new BrowserWindow({
      width: 300,
      height: 300,
      show: false,
      frame: false,
    });

    loading.once("show", () => {
      createWindow(isDev);
    });
    console.log(`file://${path.join(__dirname, "loading.html")}`);
    loading.loadURL(`file://${path.join(__dirname, "loading.html")}`);
    loading.show();
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
}

module.exports = createElectronApp;
