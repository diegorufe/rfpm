const rfnoderest = require("rfnoderest").rfnoderest;

function proyect(paramsDatabase, user) {
  const Sequelize = require("sequelize");

  const Proyect = paramsDatabase.DB_MANAGER.define("proyects", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: Sequelize.STRING,
      notNull: true,
      unique: true
    },
    description: {
      type: Sequelize.STRING,
      notNull: true
    },
    userCreateId: {
      type: Sequelize.INTEGER,
      notNull: true
    },
    userUpdateId: {
      type: Sequelize.INTEGER,
      notNull: true
    }
  });

  Proyect.belongsTo(user.model, { as: "UserCreate", foreignKey: "userCreateId" });
  Proyect.belongsTo(user.model, { as: "UserUpdate", foreignKey: "userUpdateId" });

  let dao = rfnoderest.databaseSequelize.BaseDaoSequelize;

  return new dao(Proyect);
}

module.exports = {
  dao: proyect
};
