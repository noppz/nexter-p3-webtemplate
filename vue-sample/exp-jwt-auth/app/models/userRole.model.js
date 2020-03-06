module.exports = (sequelize, Sequelize) => {
  // Define associative table with disabled timestamps field
  const UserRole = sequelize.define('user_role', {}, { timestamps: false });

  return UserRole;
};