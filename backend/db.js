const mongoose = require("mongoose");

const url =
  "mongodb://shubh:srbHzbdxg5CvERsp@cluster0-shard-00-00.9rd1v.mongodb.net:27017,cluster0-shard-00-01.9rd1v.mongodb.net:27017,cluster0-shard-00-02.9rd1v.mongodb.net:27017/?ssl=true&replicaSet=atlas-2g6cw6-shard-0&authSource=admin&retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected Successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
