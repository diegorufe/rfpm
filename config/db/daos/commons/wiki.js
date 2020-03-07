const rfnoderest = require("rfnoderest").rfnoderest;

function wiki(paramsDatabase, user, proyect) {
  const Sequelize = require("sequelize");

  const Wiki = paramsDatabase.DB_MANAGER.define("wiki", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      notNull: true
    },
    description: {
      type: Sequelize.TEXT,
      notNull: true
    },
    proyectId: {
      type: Sequelize.INTEGER,
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

  Wiki.belongsTo(proyect.model, { as: "Proyect", foreignKey: "proyectId" });

  Wiki.belongsTo(user.model, {
    as: "UserCreate",
    foreignKey: "userCreateId"
  });

  Wiki.belongsTo(user.model, {
    as: "UserUpdate",
    foreignKey: "userUpdateId"
  });

  Wiki.loadNew = async function() {
    const instance = await Wiki.build();
    instance.dataValues.title = null;
    instance.dataValues.description = null;
    instance.dataValues.proyectId = null;
    instance.dataValues.Proyect = { id: null, code: null, description: null };

    return instance;
  };

  let dao = rfnoderest.databaseSequelize.BaseDaoSequelize;

  return new dao(Wiki);
}

module.exports = {
  dao: wiki
};
