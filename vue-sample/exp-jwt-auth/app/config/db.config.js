module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'qwerty',
  DB: 'test_jwt_auth',
  PORT: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  // dialect: 'sqlite',
  // storage: 'path/to/database.sqlite'
};