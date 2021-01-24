const mongoClient = require("mongodb").MongoClient;

function insertData(data) {
  let mongodbUrl = `mongodb+srv://app:zUUZP2AMPyWgHIkZ@cluster0.g7k8f.mongodb.net/test?retryWrites=true&w=majority`;
  return new Promise((resolve, reject) => {
    mongoClient.connect(
      mongodbUrl,
      { useNewUrlParser: true, useUnifiedTopology: true },
      function (err, db) {
        if (err) {
          reject("connection error" + err);
        }
        let dbo = db.db("test");
        console.log("connected to database");
        dbo.collection("users").insertOne({ data }, function (err, result) {
          if (err) {
            console.log("this error is from insertData" + err);
            db.close();
            reject("not saved" + err);
          } else {
            console.log(
              "This result is from insertData &&& Data successfully inserted into db "
            );
            db.close();
            resolve("data saved");
          }
        });
      }
    );
  });
}

module.exports = insertData;
