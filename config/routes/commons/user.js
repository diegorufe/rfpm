const core = require("../core/core");

function user(expressApp) {
  /**
   * Function before action service
   * @param {*} action
   * @param {*} req
   */
  const functionBeforeAction = function(action, req) {
    // TODO
    let dataSession = expressApp.getDataToken(req);
    let bodyRequest = req.body;

    console.log(action);
    console.log(bodyRequest);

    bodyRequest = core.addUserAndDate(action, bodyRequest, dataSession);

    console.log(bodyRequest);

    return bodyRequest;
  };
  /**
   * Function after action
   * @param {*} action
   * @param {*} req
   * @param {*} responseData
   */
  const functionAfterAction = function(action, req, responseData) {
    let data = expressApp.getDataToken(req);
    let userService = expressApp.getService("User");

    // If not in list or count necesary admin role
    if (
      action != "/list" &&
      action != "/count" &&
      !userService.hasAdminRole(data)
    ) {
      responseData = {
        data: null,
        status: expressApp.mapStatusHttp.BAD_GATEWAY
      };
    }

    // Add user create/update if necesary
    responseData = core.addUserUpdateCreateIfAreNull(
      expressApp,
      action,
      responseData
    );

    return responseData;
  };

  expressApp.createRouteService(
    "/secure/user",
    "User",
    functionBeforeAction,
    functionAfterAction,
    null
  );
}

module.exports = {
  route: user
};
