/**
 * Function for create routes app
 * @param {*} expressApp
 */
function createRoutes(expressApp) {

  // security

  // Commons
  require("./commons/user").route(expressApp);
  require("./commons/role").route(expressApp);
  require("./commons/proyect").route(expressApp);
  require("./commons/tag").route(expressApp);
  require("./commons/note").route(expressApp);
}

module.exports = {
  createRoutes: createRoutes
};
