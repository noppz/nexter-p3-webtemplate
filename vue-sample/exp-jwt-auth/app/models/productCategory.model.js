module.exports = (sequelize, Sequelize) => {
  const ProductCategory = sequelize.define('product_categories', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return ProductCategory;
};