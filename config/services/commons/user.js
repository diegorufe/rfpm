const rfnoderest = require("rfnoderest").rfnoderest;

function user(dao) {
  let baseService = rfnoderest.services.BaseCrudService;
  let service = new baseService(dao);

  /**
   * Method know user has admin role
   */
  service.hasAdminRole = function(data) {
    let valid = false;
    if (data != null && data != undefined) {
      let roles = data.roles;

      if (roles != null && roles != undefined && roles.length > 0) {
        let role = null;
        for (let i = 0; i < roles.length; i++) {
          role = roles[i];
          if (
            role.name != null &&
            role.name != undefined &&
            role.name === "ADMIN"
          ) {
            valid = true;
            break;
          }
        }
      }
    }

    return valid;
  };

  return service;
}

module.exports = {
  user: user
};
