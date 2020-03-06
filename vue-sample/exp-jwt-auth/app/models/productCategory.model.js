module.exports = (sequelize, Sequelize) => {
  const ProductCategory = sequelize.define('product_category', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return ProductCategory;
};