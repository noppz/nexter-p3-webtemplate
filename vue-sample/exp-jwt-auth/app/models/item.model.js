module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define('item', {
    name: {
      type: Sequelize.STRING
    },
    calories: {
      type: Sequelize.STRING(50)
    },
    carbs: {
      type: Sequelize.STRING(50)
    },
    fat: {
      type: Sequelize.STRING(50)
    },
    protein: {
      type: Sequelize.STRING(50)
    },
    status: {
      type: Sequelize.TINYINT
    },
    source: {
      type: Sequelize.TINYINT
    }
  });

  return Item;
};