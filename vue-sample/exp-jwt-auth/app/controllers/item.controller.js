exports.findAll = (req, res) => {
  // Model.findAll();
  // Model.findAndCountAll();
  // Model.findByPk();
  res.status(200).send('READ Item List');
};

exports.find = (req, res) => {
  // Model.findByPk();
  // Model.findOne();
  res.status(200).send('READ Item');
};

exports.search = (req, res) => {
  // Model.findAll();
  // Model.findAndCountAll();
  // Model.findByPk();
  res.status(200).send('READ Item with Filter');
};

exports.create = (req, res) => {
  // Model.create();
  res.status(201).send('CREATE Item');
};

exports.upsert = (req, res) => {
  // Model.findOrCreate();
  // Model.upsert();
  res.status(200).send('UPSERT Item');
};

exports.update = (req, res) => {
  // Model.update();
  res.status(200).send('UPDATE Item');
};

exports.delete = (req, res) => {
  // Model.detroy();
  res.status(204).send('DELETE Item');
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
*/