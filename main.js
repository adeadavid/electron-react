const { app, BrowserWindow, ipcMain, Notification } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
    title: "My App",
  });

  win.setTitle("My App");
  //   win.loadFile("index.html");
  win.loadURL("http://localhost:3000/");
  //   win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("showNotification", (event, args) => {
  const note = new Notification({
    title: "Notification Title",
    body: "Notification body",
  });
  note.show();
});
