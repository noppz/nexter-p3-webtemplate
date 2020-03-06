module.exports = (sequelize, Sequelize) => {
  const ProductSubclass = sequelize.define('product_subclass', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return ProductSubclass;
};