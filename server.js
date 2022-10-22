const express = require("express");
const connectDB = require("./DB/Connection");
const app = express();

connectDB();
app.use(express.json({ extend: false }));
app.use("/api/userModel", require("./Api/User"));

const Port = process.env.Port || 3000;
app.listen(Port, () => {
  console.log("Server started");
});
