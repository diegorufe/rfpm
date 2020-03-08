const rfnoderest = require("rfnoderest").rfnoderest;

function role(dao) {
  let baseService = rfnoderest.services.BaseCrudService;
  return new baseService(dao);
}

module.exports = {
  rol: role
};
