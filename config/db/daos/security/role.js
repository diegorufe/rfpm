const rfnoderest = require("rfnoderest").rfnoderest;

function role(paramsDatabase) {
  const Sequelize = require("sequelize");

  const Role = paramsDatabase.DB_MANAGER.define(
    "roles",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        notNull: true,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  let dao = rfnoderest.databaseSequelize.BaseDaoSequelize;

  return new dao(paramsDatabase, Role);
}

module.exports = {
  dao: role,
};
