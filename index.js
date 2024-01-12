const { app, BrowserWindow } =require('electron');  


let mainWindow;  
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 2300, 
        height: 1200, 
        // icon : __dirname+"/icon.jpg",
    }); 
    mainWindow.loadURL(`https://leadsingup.netlify.app/`); 

}); 