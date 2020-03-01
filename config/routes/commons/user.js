function user(expressApp) {
  /**
   * Function before action service
   * @param {*} action
   * @param {*} req
   */
  const functionBeforeAction = function(action, req) {
    // TODO
  };
  /**
   * Function after action
   * @param {*} action
   * @param {*} req
   * @param {*} responseData
   */
  const functionAfterAction = function(action, req, responseData) {
    // TODO
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
