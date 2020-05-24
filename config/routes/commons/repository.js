const core = require("../core/core");

function repository(expressApp) {
  /**
   * Function before action service
   * @param {*} action
   * @param {*} req
   */
  const functionBeforeAction = async function (action, req) {
    let dataSession = expressApp.getDataToken(req);
    let bodyRequest = req.body;

    bodyRequest = core.addUserAndDate(action, bodyRequest, dataSession);

    let bodyData = bodyRequest.data;

    if (bodyData != null && bodyData != undefined) {
      bodyData.userId = dataSession.userId;
    }

    if (
      action === "/add" ||
      (action == "/edit" &&
        bodyData.passwordChange != null &&
        bodyData.passwordChange != undefined &&
        bodyData.passwordChange.trim() != "")
    ) {
      bodyData.password = expressApp.encryptJsonSession({
        password: bodyData.passwordChange.trim(),
      });
    }

    if (
      action === "/add" ||
      (action == "/edit" &&
        bodyData.userNameChange != null &&
        bodyData.userNameChange != undefined &&
        bodyData.userNameChange.trim() != "")
    ) {
      bodyData.userName = expressApp.encryptJsonSession({
        userName: bodyData.userNameChange.trim(),
      });
    }

    if (
      action === "/add" ||
      (action == "/edit" &&
        bodyData.urlChange != null &&
        bodyData.urlChange != undefined &&
        bodyData.urlChange.trim() != "")
    ) {
      bodyData.url = expressApp.encryptJsonSession({
        url: bodyData.urlChange.trim(),
      });
    }

    bodyRequest.data = bodyData;

    return bodyRequest;
  };
  /**
   * Function after action
   * @param {*} action
   * @param {*} req
   * @param {*} responseData
   */
  const functionAfterAction = async function (action, req, responseData) {
    // Add user create/update if necesary
    responseData = await core.addUserUpdateCreateIfAreNull(
      expressApp,
      action,
      responseData
    );

    return responseData;
  };

  expressApp.createRouteService(
    "/secure/repository",
    "Repository",
    functionBeforeAction,
    functionAfterAction,
    null
  );
}

module.exports = {
  route: repository,
};
