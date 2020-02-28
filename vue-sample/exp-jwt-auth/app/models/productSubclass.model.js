module.exports = (sequelize, Sequelize) => {
  const ProductSubclass = sequelize.define('product_subclasses', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return ProductSubclass;
};