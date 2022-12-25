require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const app = express();

// json
app.use(express.json());
// cors
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// routes
// console.log(readdirSync("./routes"));
readdirSync("./routes").map((route) =>
  app.use("/", require("./routes/" + route))
);
// database
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((error) => console.log("error to connecting to database", error));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`service is running on ${PORT}... `);
});
