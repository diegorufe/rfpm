/**
 * Function to create services
 * @param {*} expressApp
 * @param {*} mapDaos
 */
function createServices(expressApp, mapDaos) {
  // Security services
  expressApp.addService(
    "User",
    require("./security/user").user(mapDaos["User"])
  );
  expressApp.addService(
    "Role",
    require("./security/role").rol(mapDaos["Role"])
  );
  expressApp.addService(
    "UserRole",
    require("./security/userrole").userrole(mapDaos["UserRole"])
  );

  // Commons services
  expressApp.addService(
    "Proyect",
    require("./commons/proyect").proyect(mapDaos["Proyect"])
  );
  expressApp.addService("Tag", require("./commons/tag").tag(mapDaos["Tag"]));
  expressApp.addService(
    "Note",
    require("./commons/note").note(mapDaos["Note"])
  );
  expressApp.addService(
    "Wiki",
    require("./commons/wiki").wiki(mapDaos["Wiki"])
  );
}

module.exports = {
  createServices: createServices
};
