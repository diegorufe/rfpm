const rfnoderest = require("rfnoderest").rfnoderest;

function repository(dao) {
  let baseService = rfnoderest.services.BaseCrudService;
  return new baseService(dao);
}

module.exports = {
  repository: repository,
};
