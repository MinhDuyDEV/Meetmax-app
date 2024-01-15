"use strict";

const { default: mongoose } = require("mongoose");

const connectString = process.env.DATABASE_URL;

class Database {
  constructor() {
    this.connect();
  }
  connect() {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString, { maxPoolSize: 50 })
      .then((_) => console.log("Connected Mongodb Success"))
      .catch((error) => console.log("Error Connect!!!"));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
