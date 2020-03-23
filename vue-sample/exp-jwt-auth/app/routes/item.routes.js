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


  app.get('/api/v1/items', controller.findAll);
  app.get('/api/v1/items/:id', controller.find);
  app.post('/api/v1/items/search', controller.search);
  app.post('/api/v1/items/seek', controller.seek);
  app.post('/api/v1/items', controller.create);
  app.put('/api/v1/items', controller.upsert);
  app.patch('/api/v1/items/:id', controller.update);
  app.delete('/api/v1/items/:id', controller.delete);
 
};