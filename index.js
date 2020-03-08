(async () => {
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
    FUNCTION_SECURITY_LOGIN: SECURITY.login
  };

  const EXPRESS_APP = rfnoderest.create_express_app(MAP_PROPERTIES_EXPRESS);

  // Create services
  require("./config/services").createServices(EXPRESS_APP, MAP_DAOS);

  // Create routes
  require("./config/routes").createRoutes(EXPRESS_APP);

  EXPRESS_APP.app.use(EXPRESS_APP.express.static('./frontend/rfpm/dist/rfpm'));

  EXPRESS_APP.addPostRoute("/", function (req, res) {
      res.sendFile('./frontend/rfpm/dist/rfpm/index.html');
  });

  // Listen server
  EXPRESS_APP.listen();
})();
