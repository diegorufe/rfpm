const rfnoderest = require("rfnoderest").rfnoderest;

function note(dao) {
  let baseService = rfnoderest.services.BaseCrudService;
  return new baseService(dao);
}

module.exports = {
  note: note
};
