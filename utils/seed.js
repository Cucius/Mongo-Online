const connection = require("../config/connection");
const { User, Thought } = require("../models");
const userData = require("./userData");
const thoughtData = require("./userData");

connection.on("error", (err) => err);

connection.once("open", async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.collection.insertMany(userData);
  await Thought.collection.insertMany(thoughtData);

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
