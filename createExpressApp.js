/**
 * Method for crete app
 * @param isElectronApp indicate is electron app
 */
async function createExpressApp(isElectronApp) {
  // Security
  const SECURITY = require("./config/security").security;
  // Init database
  const DB = require("./config/db");
  // Start conexion db
  const MAP_PROPERTIES_DB = await DB.initDatabase();
  // Create daos for services
  const MAP_DAOS = await DB.createDaos(MAP_PROPERTIES_DB);

  // Start create express app
  const rfnoderest = require("rfnoderest").rfnoderest;

  const MAP_PROPERTIES_EXPRESS = {
    // Url for application
    API_URL: "/rfpm",
    // Function login for application
    FUNCTION_SECURITY_LOGIN: SECURITY.login,
    // Function indicate is electron app
    EXPRESS_APP_IS_ELECTRON: isElectronApp,
  };

  const EXPRESS_APP = rfnoderest.create_express_app(MAP_PROPERTIES_EXPRESS);

  // Create services
  require("./config/services").createServices(EXPRESS_APP, MAP_DAOS);

  // Create routes
  require("./config/routes").createRoutes(EXPRESS_APP);

  if (!isElectronApp) {
    EXPRESS_APP.app.use(EXPRESS_APP.express.static("./frontend/rfpm/front"));

    EXPRESS_APP.addPostRoute("/", function (req, res) {
      res.sendFile("./frontend/rfpm/front/index.html");
    });

    // Listen server
    EXPRESS_APP.listen();
  }
  
  return EXPRESS_APP;
}

module.exports = createExpressApp;
