import mongoose from "mongoose";

const mongoDbConnection = () => {
  mongoose.connect("url");

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error: "));

  db.once("open", function () {
    console.log("Connected successfully");
  });
};

export = mongoDbConnection;
