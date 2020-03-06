module.exports = (sequelize, Sequelize) => {
  const ProductSubcategory = sequelize.define('product_subcategory', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return ProductSubcategory;
};