const core = require("../core/core");
const rfnoderest = require("rfnoderest").rfnoderest;

const defaultFetchs = [
  new rfnoderest.services.Fetch("User", "INNER", null),
  new rfnoderest.services.Fetch("Role", "INNER", null)
];

function userrole(expressApp) {
  /**
   * Function before action service
   * @param {*} action
   * @param {*} req
   */
  const functionBeforeAction = async function(action, req) {
     // TODO nothing
    let dataSession = expressApp.getDataToken(req);
    let bodyRequest = req.body;

    return bodyRequest;
  };
  /**
   * Function after action
   * @param {*} action
   * @param {*} req
   * @param {*} responseData
   */
  const functionAfterAction = async function(action, req, responseData) {
    // TODO nothing
    return responseData;
  };

  expressApp.createRouteService(
    "/secure/userrole",
    "UserRole",
    functionBeforeAction,
    functionAfterAction,
    null
  );
}

module.exports = {
  route: userrole
};
