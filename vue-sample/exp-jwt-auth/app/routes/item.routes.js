// const { authJwt } = require('../middleware');
const controller = require('../controllers/item.controller');

module.exports = function (app) {
  /*
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });
  */

  app.get('/api/items', controller.findAll);
  app.get('/api/items/:id', controller.find);
  app.post('/api/items', controller.create);
  app.put('/api/items/:id', controller.upsert);
  app.patch('/api/items/:id', controller.update);
  app.delete('/api/items/:id', controller.delete);
 
};