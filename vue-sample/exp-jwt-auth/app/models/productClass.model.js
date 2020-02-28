module.exports = (sequelize, Sequelize) => {
  const ProductClass = sequelize.define('product_classes', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return ProductClass;
};