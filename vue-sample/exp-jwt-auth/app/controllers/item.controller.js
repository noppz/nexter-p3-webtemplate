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
  res.status(200).send('SEARCH Item');
};

exports.seek = (req, res) => {
  // Model.findOrCreate();
  // res.status(200).send('SEARCH Item');
  // res.status(201).send('CREATE Item');
  res.status(200).send('SEARCH/CREATE Item');
};

exports.create = (req, res) => {
  // Model.create();
  res.status(201).send('CREATE Item');
};

exports.upsert = (req, res) => {
  // Model.upsert();
  // res.status(200).send('UPDATE Item');
  // res.status(201).send('CREATE Item');
  res.status(200).send('CREATE/UPDATE Item');
};

exports.update = (req, res) => {
  // Model.update();
  res.status(200).send('UPDATE Item id: ' + req.params.id);
};

exports.delete = async (req, res) => {
  // Model.detroy();
  await Item.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deletedItem) => {
    if (deletedItem === 1) {
      res.status(200).json({message: 'Deleted successfully'});       
      // res.status(204) จะไม่มี content ไปกับ response
      // res.status(200).send('DELETE Item id: ' + req.params.id);
    } else {
      res.status(404).json({message: 'Record not found'})
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