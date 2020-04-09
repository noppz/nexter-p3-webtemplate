const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:9000']
};

var bcrypt = require('bcryptjs');

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');
const Role = db.role;
// const User = db.user;
// const UserRole = db.userRole;
// const Product = db.product;
const ItemCategory = db.itemCategory;

// IF force: true Existing Table will drop and resync at everytime starting server
// ELSE no action
// DEFAULT force = true
const forceDropResync = true;

db.sequelize.sync({
  force: forceDropResync
}).then(() => {
  // console.log('Drop and Resync Db'); 
  initial();
});

let initial = () => {
  Role.bulkCreate([
    { name: 'user' },
    { name: 'moderator' },
    { name: 'admin' }
  ]);

  /*
    User.create({
      username: 'test',
      email: 'test@test.com',
      password: bcrypt.hashSync('12345', 8)
    });

    User.create({
      username: 'mod',
      email: 'moderator@test.com',
      password: bcrypt.hashSync('12345', 8)
    });

    User.create({
      username: 'admin',
      email: 'admin@test.com',
      password: bcrypt.hashSync('12345', 8)
    });
  */

  ItemCategory.bulkCreate([
    { name: 'Baby Foods' },
    { name: 'Baked Products' },
    { name: 'Beef Products' },
    { name: 'Beverages' },
    { name: 'Breakfast Cereals' },
    { name: 'Cereal Grains and Pasta' },
    { name: 'Dairy and Egg Products' },
    { name: 'Fats and Oils' },
    { name: 'Finfish and Shellfish Products' },
    { name: 'Fruits and Fruit Juices' },
    { name: 'Lamb, Veal, and Game Products' },
    { name: 'Legumes and Legume Products' },
    { name: 'Nut and Seed Products' },
    { name: 'Pork Products' },
    { name: 'Poultry Products' },
    { name: 'Sausages and Luncheon Meats' },
    { name: 'Snacks' },
    { name: 'Soups, Sauces, and Gravies' },
    { name: 'Spices and Herbs' },
    { name: 'Sweets' },
    { name: 'Vegetables and Vegetable Products' }
  ]);
}

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to jwt auth application.' });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/item.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});