/**
 * Function to create services
 * @param {*} expressApp
 * @param {*} mapDaos
 */
function createServices(expressApp, mapDaos) {
  // Commons services
  expressApp.addService(
    "User",
    require("./commons/user").user(mapDaos["User"])
  );
  expressApp.addService(
    "Role",
    require("./commons/role").rol(mapDaos["Role"])
  );
  expressApp.addService(
    "UserRole",
    require("./commons/userrole").userrole(mapDaos["UserRole"])
  );
  expressApp.addService(
    "Proyect",
    require("./commons/proyect").proyect(mapDaos["Proyect"])
  );
  expressApp.addService(
    "Tag",
    require("./commons/tag").tag(mapDaos["Tag"])
  );
  expressApp.addService(
    "Note",
    require("./commons/note").note(mapDaos["Note"])
  );
}

module.exports = {
  createServices: createServices
};
