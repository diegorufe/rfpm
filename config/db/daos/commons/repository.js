const rfnoderest = require("rfnoderest").rfnoderest;

function repository(paramsDatabase, user) {
  const Sequelize = require("sequelize");

  const Repository = paramsDatabase.DB_MANAGER.define("repositories", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: Sequelize.TEXT,
      notNull: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      notNull: true,
    },
    url: {
      type: Sequelize.TEXT,
      notNull: true,
    },
    userName: {
      type: Sequelize.TEXT,
      notNull: true,
    },
    password: {
      type: Sequelize.TEXT,
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

  Repository.belongsTo(user.model, { as: "User", foreignKey: "userId" });

  Note.belongsTo(user.model, {
    as: "UserCreate",
    foreignKey: "userCreateId",
  });

  Note.belongsTo(user.model, {
    as: "UserUpdate",
    foreignKey: "userUpdateId",
  });

  Repository.loadNew = async function () {
    const instance = await Repository.build();
    instance.dataValues.description = null;
    instance.dataValues.url = null;
    instance.dataValues.password = null;
    instance.dataValues.userName = null;
    instance.dataValues.userId = null;
    instance.dataValues.tagId = null;
    instance.dataValues.passwordChange = null;
    instance.dataValues.userNameChange = null;
    instance.dataValues.urlChange = null;

    return instance;
  };

  let dao = rfnoderest.databaseSequelize.BaseDaoSequelize;

  return new dao(paramsDatabase, Repository);
}

module.exports = {
  dao: repository,
};
