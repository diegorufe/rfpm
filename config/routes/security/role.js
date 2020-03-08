function rol(expressApp) {
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
    "/secure/role",
    "Role",
    functionBeforeAction,
    functionAfterAction,
    null
  );
}

module.exports = {
  route: rol
};
