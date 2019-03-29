const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
  res.json("Hello From Server");
});

app.post("/enroll", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Data Received" });
});

app.listen(PORT, () => {
  console.log("Listenin to port ", PORT);
});
