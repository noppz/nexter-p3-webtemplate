module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
    // CUSTOM timestamps field name
    // createdAt: {
    //   type: Sequelize.DATE,
    //   field: 'custom_created_at',
    // },
    // updatedAt: {
    //   type: Sequelize.DATE,
    //   field: 'custom_updated_at'
    // }
  });

  return User;
};