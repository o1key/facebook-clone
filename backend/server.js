require("dotenv").config();
const express = require("express");
const  cors = require("cors");
const { readdirSync } = require("fs")
const mongoose = require("mongoose")
const app = express();

// cors
const allowed = ["http://localhost:3000","some other domain"]
function options(req, res) {
  let temp;
  let origin = req.header("Origin");
  if (allowed.indexOf(origin) > -1) {
    temp = { 
      origin: true,
      optionSuccessStatus:200,
    }
  } else {
    temp = {
      origin: "stupid",
    }
  }
  res(null,temp)
}

app.use(cors(options))

// routes
// console.log(readdirSync("./routes"));
readdirSync("./routes").map(route => app.use("/", require("./routes/" + route)))

// database
mongoose
  .connect(process.env.MONGODB_URL, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  })
  .then(() => console.log("database connected successfully"))
  .catch(error => console.log("error to connecting to database", error), process.exit(1))

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`service is running on ${PORT}... `);
})
