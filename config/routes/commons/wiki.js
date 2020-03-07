const core = require("../core/core");
const rfnoderest = require("rfnoderest").rfnoderest;

const defaultFetchs = [
  new rfnoderest.services.Fetch("Proyect", "INNER", null),
  new rfnoderest.services.Fetch("UserCreate", "INNER", null),
  new rfnoderest.services.Fetch("UserUpdate", "INNER", null)
];

function wiki(expressApp) {
  /**
   * Function before action service
   * @param {*} action
   * @param {*} req
   */
  const functionBeforeAction = async function(action, req) {
    let dataSession = expressApp.getDataToken(req);
    let bodyRequest = req.body;

    bodyRequest = core.addUserAndDate(action, bodyRequest, dataSession);

    if (action == "/add" || action == "/edit") {
      let data = bodyRequest.data;

      data.fetchs = defaultFetchs;

      // If has data
      if (data != null && data != undefined) {
        // If has project add id
        if (
          data.Proyect != null &&
          data.Proyect != undefined &&
          data.Proyect.id != null
        ) {
          data.proyectId = data.Proyect.id;
        }
      }
      bodyRequest.data = data;
    } else if (action == "/read") {
      let data = bodyRequest.data;

      // If has data
      if (data != null && data != undefined) {
        data.fetchs = defaultFetchs;
      }
    }

    return bodyRequest;
  };
  /**
   * Function after action
   * @param {*} action
   * @param {*} req
   * @param {*} responseData
   */
  const functionAfterAction = async function(action, req, responseData) {
    // Add user create/update if necesary
    responseData = await core.addUserUpdateCreateIfAreNull(
      expressApp,
      action,
      responseData
    );

    return responseData;
  };

  expressApp.createRouteService(
    "/secure/wiki",
    "Wiki",
    functionBeforeAction,
    functionAfterAction,
    null
  );
}

module.exports = {
  route: wiki
};
