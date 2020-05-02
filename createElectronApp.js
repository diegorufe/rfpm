const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const remote = electron.remote;

const path = require("path");
const isDev = true;

let mainWindow;

/**
 * Method for create window for electron
 */
async function createWindow() {
  const EXPRESS_APP = await require("./createExpressApp")(true);
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: { nodeIntegration: true },
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
 */
function createElectronApp() {
  app.on("ready", createWindow);

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
