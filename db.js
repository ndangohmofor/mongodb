const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const mongodbUrl = "mongodb://mongodb:27017/shop";

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log("DB is already initialized!");
    return callback(null, _db);
  }
  MongoClient.connect(mongodbUrl)
    .then((client) => {
      _db = client.db();
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error("Db not initialized!");
  }
  return _db;
};
