const rfnoderest = require("rfnoderest").rfnoderest;
const Filter = rfnoderest.services.Filter;
const Fetch = rfnoderest.services.Fetch;
/**
 * Security method for login
 * @param {*} expressApp
 * @param {*} nick nick
 * @param {*} password password
 */
async function login(expressApp, nick, password) {
  let result = null;

  const userService = expressApp.getService("User");
  const userRoleService = expressApp.getService("UserRole");

  if (
    userService != null &&
    userService != undefined &&
    userRoleService != null &&
    userRoleService != undefined
  ) {
    let filters = [];
    filters.push(new Filter("nick", "=", test, "and", null, null, null));
    const resultUserService = await userService.findOne(
      filters,
      null,
      null,
      null,
      null
    );
    // If find user is ok and check password is valid find roles
    if (
      resultUserService != null &&
      resultUserService != undefined &&
      password != null &&
      password != undefined &&
      expressApp.compareBcrypt(resultUserService.password, password)
    ) {
      filters = [];
      filters.push(
        new Filter("userId", "=", resultUserService.id, "and", null, null, null)
      );
      const fetchs = [];
      fetchs.push(new Fetch("Role", "INNER", null));
      const resultUserRoleService = await userRoleService.findAll(
        filters,
        fetchs,
        null,
        null,
        null
      );
      
      const roles = [];

      if (
        resultUserRoleService != null &&
        resultUserRoleService != undefined &&
        resultUserRoleService.length > 0
      ) {
        for (let i = 0; i < resultUserRoleService.length; i++) {
          roles.push(resultUserRoleService[i].Role);
        }
      }

      result = { nick: nick, userId: resultUserService.id, roles: roles };
    }
  }

  return result;
}

module.exports = {
  security: {
    login: login
  }
};
