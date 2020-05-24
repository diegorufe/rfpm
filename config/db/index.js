const rfnoderest = require("rfnoderest").rfnoderest;

/**
 * Method to init database
 */
async function initDatabase() {
  const PARAMS_DATABASE = rfnoderest.databaseSequelize.createDefaultParamsInitDb();

  // Set database, user and password
  PARAMS_DATABASE.database = "rfpm";
  PARAMS_DATABASE.user = "root";
  PARAMS_DATABASE.password = "root";

  return await rfnoderest.databaseSequelize.initDb(
    PARAMS_DATABASE,
    require("sequelize")
  );
}

/**
 * Method to create daos
 * @param {*} paramsDatabase
 */
async function createDaos(paramsDatabase) {
  const MAP_DAOS = {};

  // Commons
  MAP_DAOS["User"] = require("./daos/security/user").dao(paramsDatabase);
  MAP_DAOS["Role"] = require("./daos/security/role").dao(paramsDatabase);

  MAP_DAOS["UserRole"] = require("./daos/security/userrole").dao(
    paramsDatabase,
    MAP_DAOS["User"],
    MAP_DAOS["Role"]
  );

  MAP_DAOS["Proyect"] = require("./daos/commons/proyect").dao(
    paramsDatabase,
    MAP_DAOS["User"]
  );

  MAP_DAOS["Tag"] = require("./daos/commons/tag").dao(
    paramsDatabase,
    MAP_DAOS["User"]
  );

  MAP_DAOS["Note"] = require("./daos/commons/note").dao(
    paramsDatabase,
    MAP_DAOS["User"],
    MAP_DAOS["Proyect"],
    MAP_DAOS["Tag"]
  );

  MAP_DAOS["Wiki"] = require("./daos/commons/wiki").dao(
    paramsDatabase,
    MAP_DAOS["User"],
    MAP_DAOS["Proyect"]
  );

  MAP_DAOS["Repository"] = require("./daos/commons/repository").dao(
    paramsDatabase,
    MAP_DAOS["User"]
  );

  return MAP_DAOS;
}

module.exports = {
  initDatabase: initDatabase,
  createDaos: createDaos,
};
