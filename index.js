const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ msg: "Hello !" });
});

app.get("/", (req, res) => {
  res.json({ msg: "I've recived a data" });
  // console.log("I've recived a data");
});

app.post("/", (req, res) => {
  // res.send({ msg: "I've recived a data!" });
  res.json({ msg: "I've recived a data" });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
