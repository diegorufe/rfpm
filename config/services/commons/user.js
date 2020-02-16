const rfnoderest = require("rfnoderest").rfnoderest;

function user(dao) {
  let baseService = rfnoderest.services.BaseCrudService;
  return new baseService(dao);
}

module.exports = {
  user: user
};
