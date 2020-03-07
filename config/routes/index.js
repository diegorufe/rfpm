/**
 * Function for create routes app
 * @param {*} expressApp
 */
function createRoutes(expressApp) {
  // security
  require("./commons/user").route(expressApp);
  
  // Commons
  require("./commons/role").route(expressApp);
  require("./commons/proyect").route(expressApp);
  require("./commons/tag").route(expressApp);
  require("./commons/note").route(expressApp);
  require("./commons/wiki").route(expressApp);
}

module.exports = {
  createRoutes: createRoutes
};
