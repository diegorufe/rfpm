const core = require("../core/core");

function note(expressApp) {
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
      // If has data
      if (data != null && data != undefined) {
        // If has tag add id
        if (data.Tag != null && data.Tag != undefined && data.Tag.id != null) {
          data.tagId = data.Tag.id;
        }
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
    "/secure/note",
    "Note",
    functionBeforeAction,
    functionAfterAction,
    null
  );
}

module.exports = {
  route: note
};
