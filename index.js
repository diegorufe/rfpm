(async () => {
  // Init database
  const DB = require("./config/db");
  // Start conexion db
  const MAP_PROPERTIES_DB = await DB.initDatabase();
  // Create daos for services
  const MAP_DAOS = await DB.createDaos(MAP_PROPERTIES_DB);

  // Start create express app
  const rfnoderest = require("rfnoderest").rfnoderest;

  const MAP_PROPERTIES_EXPRESS = {
    API_URL: "/rfpm"
  };

  const EXPRESS_APP = rfnoderest.create_express_app(MAP_PROPERTIES_EXPRESS);
  
  // Create services
  require("./config/services").createServices(EXPRESS_APP, MAP_DAOS);

  // Create routes
  require("./config/routes").createRoutes(EXPRESS_APP);

  // Listen server
  EXPRESS_APP.listen();
})();
