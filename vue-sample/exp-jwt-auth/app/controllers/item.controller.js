exports.findAll = (req, res) => {
  // Model.findAll();
  // Model.findAndCountAll();
  res.status(200).send('RETRIEVE Item List');
};

exports.find = (req, res) => {
  // Model.findByPk();
  // Model.findOne();
  // Model.findOrCreate();
  res.status(200).send('RETRIEVE Item');
};

exports.create = (req, res) => {
  // Model.create();
  res.status(201).send('CREATE Item');
};

/*
exports.upsert = (req, res) => {
  // Model.upsert();
  res.status(200).send('UPSERT Item');
};
*/

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