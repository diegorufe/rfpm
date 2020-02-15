const rfnoderest = require("rfnoderest").rfnoderest;

function user(paramsDatabase) {
  const Sequelize = require("sequelize");

  const User = paramsDatabase.DB_MANAGER.define("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nick: {
      type: Sequelize.STRING,
      notNull: true,
      unique: true
    },
    password: {
      type: Sequelize.TEXT("tiny"),
      notNull: true
    },
    userCreateId: {
      type: Sequelize.INTEGER,
      notNull: false
    },
    userUpdateId: {
      type: Sequelize.INTEGER,
      notNull: false
    }
  });

  User.belongsTo(User, { as: "UserCreate", foreignKey: "userCreateId" });
  User.belongsTo(User, { as: "UserUpdate", foreignKey: "userUpdateId" });

  let dao = rfnoderest.databaseSequelize.BaseDaoSequelize;

  return new dao(User);
}

module.exports = {
  dao: user
};
