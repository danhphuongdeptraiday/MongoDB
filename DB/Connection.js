const mongoose = require("mongoose");
const URI =
  "mongodb+srv://dbUser:123@cluster0.5rjqme2.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Db connected..");
};

module.exports = connectDB;
