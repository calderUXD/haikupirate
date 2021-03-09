const mongoose = require("mongoose");
const getSecret = require("./secret");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const codesModel = require("./data");
const codesModel2 = require("./codes2");
const gameInfoModel = require("./gameInfo");

const API_PORT = 3001;
const app = express();
const router = express.Router();

mongoose.connect(getSecret("dbUri"));
let db = mongoose.connection;

//  console.log(db);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev")); 

router.get("/checknum/:name/:code", (req, res) => {
  codesModel.find({}, (err, code) => {
    if (err) return code.json(err);
    return res.json(code);
  });
});

router.get('/info', async (req, res) => {
  console.log("poop");
});

router.get('/v2winner/:code', async (req, res) => {
  const winner = await codesModel2.findOne({code: req.params.code}, 'email message code');
  try {
    res.send(winner);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/validate/:name', async (req, res) => {
  const checkCode = await codesModel.find({name: req.params.name});

  try {
    if(checkCode.length > 0 || checkCode.length === 1) {
      checkCode[0].code === req.body.code ? res.send(true) : res.send(false)
    } else {
      res.send("error")
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/validate2/:name', async (req, res) => {
  const checkCode = await codesModel2.find({name: req.params.name});

  try {
    if(checkCode.length > 0 || checkCode.length === 1) {
      checkCode[0].code === req.body.code ? res.send(true) : res.send(false)
    } else {
      res.send("error")
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));
