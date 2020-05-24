/**
 * Function for create routes app
 * @param {*} expressApp
 */
function createRoutes(expressApp) {
  // security
  require("./security/user").route(expressApp);
  require("./security/role").route(expressApp);
  require("./security/userrole").route(expressApp);

  // Commons
  require("./commons/proyect").route(expressApp);
  require("./commons/tag").route(expressApp);
  require("./commons/note").route(expressApp);
  require("./commons/wiki").route(expressApp);
}

module.exports = {
  createRoutes: createRoutes,
};
