const core = require("../core/core");

function user(expressApp) {
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
      // If password chnage bcrypt this
      if (
        data != null &&
        data != undefined &&
        data.passwordChange != null &&
        data.passwordChange != undefined &&
        data.passwordChange.trim() != ""
      ) {
        data.password = expressApp.bcryptPassword(data.passwordChange);
      }
      bodyRequest.data = data;
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
