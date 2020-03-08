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
    },
    define: {
      // IF freezeTableName: true TableName will be the same as the define model name
      // ELSE TableName will use plural nouns with the define model name.
      // DEFAULT freezeTableName: false
      // freezeTableName: true,

      // IF timestamps: true TableName will automatically build timestamps (createdAt and updatedAt) field
      // ELSE TableName will not build timestamps field.
      // DEFAULT timestamps: true
      // timestamps: true,

      // IF underscored: true TableName will automatically name colum with snake_case
      // ELSE TableName will automatically name colum with camelCase
      // DEFAULT underscored: false
      underscored: true
    },
    // IF logging: false [Logging will not be showed]
    // ELSE 
    // [Displays all log function call parameters]
    // logging: (...msg) => console.log(msg)
    // [Use custom logger (e.g. Winston or Bunyan), displays the first parameter]
    // logging: msg => logger.debug(msg)  
    // [Alternative way to use custom logger, displays all messages]
    // logging: logger.debug.bind(logger)     
    // DEFAULT logging: console.log [Displays the first parameter of the log function call] 
    logging: false
  }
);

// let testDbConnect = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// };

// testDbConnect();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.role = require('../models/role.model.js')(sequelize, Sequelize);
db.userRole = require('../models/userRole.model.js')(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: db.userRole,
  foreignKey: 'role_id',
  otherKey: 'user_id'
});

db.user.belongsToMany(db.role, {
  through: db.userRole,
  foreignKey: 'user_id',
  otherKey: 'role_id'
});

// กำหนด constant parameter ไว้ check role in verifySignUp.js
db.ROLES = ['user', 'admin', 'moderator'];

// PRODUCT
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

// ITEM
db.item = require('../models/item.model.js')(sequelize, Sequelize);
db.itemCategory = require('../models/itemCategory.model.js')(sequelize, Sequelize);

db.item.belongsTo(db.itemCategory);
db.itemCategory.hasMany(db.item);

module.exports = db;