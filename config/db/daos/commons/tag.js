const rfnoderest = require("rfnoderest").rfnoderest;

function tag(paramsDatabase, user) {
  const Sequelize = require("sequelize");

  const Tag = paramsDatabase.DB_MANAGER.define("tags", {
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
    color: {
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

  Tag.belongsTo(user.model, {
    as: "UserCreate",
    foreignKey: "userCreateId"
  });

  Tag.belongsTo(user.model, {
    as: "UserUpdate",
    foreignKey: "userUpdateId"
  });

  let dao = rfnoderest.databaseSequelize.BaseDaoSequelize;

  return new dao(Tag);
}

module.exports = {
  dao: tag
};
