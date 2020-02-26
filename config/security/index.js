const rfnoderest = require("rfnoderest").rfnoderest;
const Filter = rfnoderest.services.Filter;
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
    const filters = [];
    filters.push(new Filter("nick", "=", nick, "and", null, null, null));
    const resultService = await userService.findOne(
      filters,
      null,
      null,
      null,
      null
    );
    // If find user is ok check password is valid
    if (resultService != null && resultService != undefined) {
    }
  }

  return result;
}

module.exports = {
  security: {
    login: login
  }
};
