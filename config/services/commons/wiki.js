const rfnoderest = require("rfnoderest").rfnoderest;

function wiki(dao) {
  let baseService = rfnoderest.services.BaseCrudService;
  return new baseService(dao);
}

module.exports = {
  wiki: wiki
};
