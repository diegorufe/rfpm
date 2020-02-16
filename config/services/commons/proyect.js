const rfnoderest = require("rfnoderest").rfnoderest;

function proyect(dao) {
  let baseService = rfnoderest.services.BaseCrudService;
  return new baseService(dao);
}

module.exports = {
  proyect: proyect
};
