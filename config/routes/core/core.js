/**
 * Function for add user and date from edit or add
 * @param {*} action is the action produced request
 * @param {*} bodyRequest is the body for the request
 * @param {*} dataSession is data session for obtain user id
 */
function addUserAndDate(action, bodyRequest, dataSession) {
  if (
    (action != "/edit" || action != "/add") &&
    bodyRequest != null &&
    bodyRequest != undefined
  ) {
    // Ser user update id and date update before save
    let bodyData = bodyRequest.data;
    if (bodyData != null && bodyData != undefined) {
      bodyData.userUpdateId = dataSession.userId;
      bodyData.updatedAt = new Date();
      // If is add set user created and date created
      if (action === "/add") {
        bodyData.userCreateId = dataSession.userId;
        bodyData.createdAt = new Date();
      }
    }
    bodyRequest.data = bodyData;
  }
  return bodyRequest;
}

/**
 * Function for add user updated or created if are null
 * @param {*} expressApp
 * @param {*} action
 * @param {*} responseData
 */
async function addUserUpdateCreateIfAreNull(expressApp, action, responseData) {
  if (
    (action == "/edit" ||
      action == "/add" ||
      action == "/read" ||
      action == "/loadNew") &&
    responseData != null &&
    responseData != undefined
  ) {
    let data = responseData.data;
    if (
      data != null &&
      data != undefined &&
      data.dataValues != null &&
      data.dataValues != undefined
    ) {
      let userService = expressApp.getService("User");
      if (
        data.dataValues.UserCreate == null ||
        data.dataValues.UserCreate == undefined
      ) {
        data.dataValues.UserCreate = await userService.build();
      }
      if (
        data.dataValues.UserUpdate == null ||
        data.dataValues.UserUpdate == undefined
      ) {
        data.dataValues.UserUpdate = await userService.build();
      }
    }

    responseData.data = data;
  }

  return responseData;
}

module.exports = {
  addUserAndDate: addUserAndDate,
  addUserUpdateCreateIfAreNull: addUserUpdateCreateIfAreNull
};
