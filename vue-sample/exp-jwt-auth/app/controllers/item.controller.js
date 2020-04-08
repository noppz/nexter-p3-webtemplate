const db = require('../models');
const HttpStatus = require('../utils/constant');
const Item = db.item;

exports.findAll = (req, res) => {
  // Model.findAll();
  // Model.findAndCountAll();
  Item.findAll().then(items => res.json(items))
  // res.status(200).send('READ Item List');
};

exports.find = (req, res) => {
  // Model.findByPk();
  // Model.findOne();
  Item.findByPk(req.params.id).then(items => res.json(items))
  // res.status(200).send('READ Item id: ' + req.params.id);
};

exports.search = (req, res) => {
  // Model.findAll();
  // Model.findAndCountAll();
  res.status(200).send('FOUND Item success');
};

exports.seek = (req, res) => {
  // Model.findOrCreate();
  res.status(200).send('FOUND/CREATED Item success');
};

exports.create = async (req, res) => {
  // Model.create();
  let obj = {
    name: req.body.name,
    calories: req.body.calories,
    carbs: req.body.carbs,
    fat: req.body.fat,
    protein: req.body.protein,
    status: req.body.status,
    source: req.body.source,
    item_category_id: req.body.item_category_id
  };

  await Item.create(obj)
    .then((createdItem) => {
      if (createdItem) {
        res.status(201).send({ message: 'CREATED item success' });
      } else {
        res.status(404).json({ message: 'CREATED item failed' })
      }
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    });
};

exports.upsert = (req, res) => {
  // Model.upsert();
  res.status(200).send('CREATED/UPDATED Item success');
};

exports.update = async (req, res) => {
  // Model.update();
  let obj = {
    name: req.body.name,
    calories: req.body.calories,
    carbs: req.body.carbs,
    fat: req.body.fat,
    protein: req.body.protein,
    status: req.body.status,
    source: req.body.source,
    item_category_id: req.body.item_category_id
  };

  await Item.update(obj, { where: { id: req.params.id } })
    .then((updatedItem) => {
      if (updatedItem) {
        res.status(200).send({ message: 'UPDATED Item id: ' + req.params.id + ' success' });
      } else {
        res.status(404).json({ message: 'UPDATED Item id: ' + req.params.id + ' failed' })
      }
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    });
};

exports.delete = async (req, res) => {
  // Model.detroy();
  await Item.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((deletedItem) => {
      if (deletedItem) {
        res.status(200).json({ message: 'DELETED item success' });
        // res.status(204) จะไม่มี content ไปกับ response
        // res.status(200).send('DELETE Item id: ' + req.params.id);
      } else {
        res.status(404).json({ message: 'DELETED item failed' })
      }
    })
    .catch((error) => {
      // Error 😨
      if (error.response) {
        /*
        * The request was made and the server responded with a
        * status code that falls out of the range of 2xx
        */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
        * The request was made but no response was received, `error.request`
        * is an instance of XMLHttpRequest in the browser and an instance
        * of http.ClientRequest in Node.js
        */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
      }
      // console.log(error.config);
    });
};

/*
  https://sequelize.org/master/class/lib/model.js~Model.html
  Model.init();
  Model.build();
  Model.save();

  Model.bulkCreate();
  Model.update();
  Model.destroy();
*/

/*
  Filtering
  = [eq]
  != [ne]
  >= [gte]
  > [gt]
  <= [lte]
  < [lt]

  [before]
  [after]
  [between]

  AND ; (Semicolon)
  OR  , (Comma)

  LHS bracket:
  GET /items?price[gte]=10&status[ne]=active

  * Easy to use for your users
  * Relatively simple to parse server side
  * Relatively intuitive

  RHS colon:
  GET /items?price=gte:10&price=ne:active

  * Easy to parse server side
  * Easy to use for your users
  * No possibility to do an OR for combined filters
  * Less intuitive than LHS brackets

  Lucene or ElasticSearch syntax:
  GET /items?q=price:<200&q=-status:active

  * The most flexible of all
  * Almost no parsing required server-side (can be handed over directly to ElasticSearch for example)
  * Steep learning curve for your users
  * Requires URL percent encoding (makes it harder to use from curl or postman)

  Pagination
  GET /items?limit=20&offset=0
  GET /items?limit=20&offset=100

  GET /items?limit=20&page=1
  GET /items?limit=20&page=5

  Sorting
  GET /users?sort_by=desc(last_modified),asc(email)
  GET /users?sort=-last_modified,+email

  Full Text Search (use a q query parameter)
  GET /users?q=Guillaume

  Retrieving specific fields (use a fields query parameter)
  GET /users?fields=first_name,last_name

  let transaction;

  try {
    // get transaction
    transaction = await sequelize.transaction();

    // step 1
    await Model.destroy({where: {id}, transaction});

    // step 2
    await Model.create({}, {transaction});

    // step 3
    await Model.update({}, {where: {id}, transaction });

    // commit
    await transaction.commit();

  } catch (err) {
    // Rollback transaction only if the transaction object is defined
    if (transaction) await transaction.rollback();
  }
*/