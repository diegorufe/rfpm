const rfnoderest = require("rfnoderest").rfnoderest;

function proyect(paramsDatabase, user) {
  const Sequelize = require("sequelize");

  const Proyect = paramsDatabase.DB_MANAGER.define("proyects", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: Sequelize.STRING,
      notNull: true,
      unique: true,
    },
    description: {
      type: Sequelize.STRING,
      notNull: true,
    },
    userCreateId: {
      type: Sequelize.INTEGER,
      notNull: true,
    },
    userUpdateId: {
      type: Sequelize.INTEGER,
      notNull: true,
    },
  });

  Proyect.belongsTo(user.model, {
    as: "UserCreate",
    foreignKey: "userCreateId",
  });
  Proyect.belongsTo(user.model, {
    as: "UserUpdate",
    foreignKey: "userUpdateId",
  });

  Proyect.loadNew = async function () {
    const instance = await Proyect.build();
    instance.dataValues.code = null;
    instance.dataValues.description = null;
    return instance;
  };

  let dao = rfnoderest.databaseSequelize.BaseDaoSequelize;

  return new dao(paramsDatabase, Proyect);
}

module.exports = {
  dao: proyect,
};
