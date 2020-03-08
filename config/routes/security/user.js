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

  // Route refresh token
  expressApp.addPostRoute(
    "/secure/user/editUserProfile",
    expressApp.asyncHandler()(async (req, res, next) => {
      let data = expressApp.getDataToken(req);
      let bodyRequest = req.body;
      let userService = expressApp.getService("User");

      if (bodyRequest == null || bodyRequest == undefined) {
        res.status(expressApp.mapStatusHttp.BAD_GATEWAY);
        res.json({ data: "", status: 400 });
      } else {
        let user = await userService.findOne(
          [
            {
              property: "id",
              type: "=",
              value: bodyRequest.data.userId,
              andOr: "and",
              alias: null,
              propertyData: null,
              other: null
            }
          ],
          null,
          null
        );

        if (user == null || user == undefined) {
          res.status(expressApp.mapStatusHttp.BAD_GATEWAY);
          res.json({ data: "", status: 400 });
        } else {
          user.password = expressApp.bcryptPassword(bodyRequest.data.password);
          user = await userService.save(user.dataValues, null);
          if (user == null || user == undefined) {
            res.status(expressApp.mapStatusHttp.BAD_GATEWAY);
            res.json({ data: "", status: 400 });
          } else {
            res.status(expressApp.mapStatusHttp.ACCESS_SUCCES);
            res.json({ data: "OK", status: 200 });
          }
        }
      }
    })
  );
}

module.exports = {
  route: user
};
