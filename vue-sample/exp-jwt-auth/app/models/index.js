const config = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    // operatorsAliases: false, // [DEPRECATED] sequelize v5 not use
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.role = require('../models/role.model.js')(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId'
});
db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId'
});

db.ROLES = ['user', 'admin', 'moderator'];

db.product = require('../models/product.model.js')(sequelize, Sequelize);
db.productCategory = require('../models/productCategory.model.js')(sequelize, Sequelize);
db.productSubcategory = require('../models/productSubcategory.model.js')(sequelize, Sequelize);
db.productClass = require('../models/productClass.model.js')(sequelize, Sequelize);
db.productSubclass = require('../models/productSubclass.model.js')(sequelize, Sequelize);

db.productClass.hasMany(db.productSubclass);
db.productSubcategory.hasMany(db.productClass);
db.productCategory.hasMany(db.productSubcategory);

db.product.belongsTo(db.productSubclass);
db.product.belongsTo(db.productClass);
db.product.belongsTo(db.productSubcategory);
db.product.belongsTo(db.productCategory);

db.productSubclass.belongsTo(db.productClass);
db.productClass.belongsTo(db.productSubcategory);
db.productSubcategory.belongsTo(db.productCategory);



module.exports = db;