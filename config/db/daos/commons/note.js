const rfnoderest = require("rfnoderest").rfnoderest;

function note(paramsDatabase, user, proyect, tag) {
  const Sequelize = require("sequelize");

  const Note = paramsDatabase.DB_MANAGER.define("notes", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: Sequelize.TEXT,
      notNull: true
    },
    proyectId: {
      type: Sequelize.INTEGER,
      notNull: true
    },
    tagId: {
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

  Note.belongsTo(proyect.model, { as: "Proyect", foreignKey: "proyectId" });
  Note.belongsTo(tag.model, { as: "Tag", foreignKey: "tagId" });

  Note.belongsTo(user.model, {
    as: "UserCreate",
    foreignKey: "userCreateId"
  });

  Note.belongsTo(user.model, {
    as: "UserUpdate",
    foreignKey: "userUpdateId"
  });

  let dao = rfnoderest.databaseSequelize.BaseDaoSequelize;

  return new dao(Note);
}

module.exports = {
  dao: note
};
