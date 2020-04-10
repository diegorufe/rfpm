import VueContext from "../../../rfvue/context/VueContext";
import CommonsUtils from "../../../rfvue/utils/CommonsUtils";
/**
 * App service for clase
 */
export default class AppService {
  /**
   * Method to know is admin role
   */
  isAdmin() {
    let valid = false;
    try {
      const dataSession = VueContext.getDataInSession();
      if (CommonsUtils.isNotNull(dataSession)) {
        const roles = dataSession["roles"];
        if (CommonsUtils.arrayNotNull(roles)) {
          for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "ADMIN") {
              valid = true;
              break;
            }
          }
        }
      }
    } catch (ex) {
      console.log(ex);
    }
    return valid;
  }

  /**
   * Method for get nick form user
   * @returns nick from user
   */
  getNickUser() {
    let nick = "";
    try {
      const dataSession = VueContext.getDataInSession();
      if (CommonsUtils.isNotNull(dataSession)) {
        nick = dataSession["nick"];
      }
    } catch (ex) {
      console.log(ex);
    }
    return nick;
  }

  /**
   * Method for get user id
   * @returns number id from user
   */
  getUserId() {
    let userId = -999;
    try {
      const dataSession = VueContext.getDataInSession();
      if (CommonsUtils.isNotNull(dataSession)) {
        userId = dataSession["userId"];
      }
    } catch (ex) {
      console.log(ex);
    }
    return userId;
  }
}
