module.exports = (sequelize, Sequelize) => {
  const ItemCategory = sequelize.define('item_category', {
    name: {
      type: Sequelize.STRING
    }
  }, { timestamps: false });

  return ItemCategory;
};