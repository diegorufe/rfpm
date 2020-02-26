const rfnoderest = require("rfnoderest").rfnoderest;

function userrole(dao) {
  let baseService = rfnoderest.services.BaseCrudService;
  return new baseService(dao);
}

module.exports = {
  userrole: userrole
};
