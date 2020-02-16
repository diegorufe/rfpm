const rfnoderest = require("rfnoderest").rfnoderest;

function tag(dao) {
  let baseService = rfnoderest.services.BaseCrudService;
  return new baseService(dao);
}

module.exports = {
    tag: tag
};
