const rfnoderest = require("rfnoderest").rfnoderest;

function userrole(paramsDatabase, user, rol) {
  const Sequelize = require("sequelize");

  const UserRole = paramsDatabase.DB_MANAGER.define("usersroles", {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      notNull: true
    },
    rolId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      notNull: true
    },
  });

  UserRole.belongsTo(user.model, {
    as: "User",
    foreignKey: "userId"
  });

  UserRole.belongsTo(rol.model, {
    as: "Role",
    foreignKey: "roleId"
  });

  let dao = rfnoderest.databaseSequelize.BaseDaoSequelize;

  return new dao(UserRole);
}

module.exports = {
  dao: userrole
};
