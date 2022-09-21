import express from "express";
import cors from "cors";


const app = express();

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

app.get("/", (req, res) => {
  res.send("welcome from home")
})

app.listen(8000, () => {
  console.log("service is listing...");
})
