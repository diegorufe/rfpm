function user(expressApp) {
  /**
   * Function before action service
   * @param {*} action
   * @param {*} req
   */
  const functionBeforeAction = function(action, req) {
    // TODO
    let token =
      req.headers["authorization"] ||
      req.headers["Authorization"] ||
      req.headers["x-access-token"];

    token = token.replace("Bearer ", "");

    return req.body;
  };
  /**
   * Function after action
   * @param {*} action
   * @param {*} req
   * @param {*} responseData
   */
  const functionAfterAction = function(action, req, responseData) {
    // TODO
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
