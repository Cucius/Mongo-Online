const connection = require("../config/connection");
const { User, Thought } = require("../models");
// const userData = require("./userData");
// const thoughtData = require("./userData");

connection.on("error", (err) => err);

const userData = [
  {
    username: "Bob",
    email: "Bob@gmail.com",
  },
  {
    username: "Mark",
    email: "Mark@gmail.com",
  },
  {
    username: "Sally",
    email: "Sally@gmail.com",
  },
  {
    username: "Mary",
    email: "Mary@gmail.com",
  },
];

const thoughtData = [
  {
    thoughtText: "Another boring day",
    username: "Bob",
    reactions: [
      {
        reactionBody: "Look on the bright side",
        username: "Mark",
      },
    ],
  },
  {
    thoughtText: "What a beautiful morning",
    username: "Sally",
    reactions: [
      {
        reactionBody: "Could be better",
        username: "Mary",
      },
      {
        reactionBody: "I agree",
        username: "Bob",
      },
    ],
  },
  {
    thoughtText: "Why can't I remember what I was supposed to do today?",
    username: "Mary",
    reactions: [
      {
        reactionBody: "That is how I feel every day.",
        username: "Bob",
      },
      {
        reactionBody: "I believe that you will have a great day anyway!",
        username: "Sally",
      },
      {
        reactionBody: "You will remember if you just relax.",
        username: "Mark",
      },
    ],
  },
];

connection.once("open", async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.collection.insertMany(userData);
  await Thought.collection.insertMany(thoughtData);

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
