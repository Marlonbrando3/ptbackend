const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/home", (req, res) => {
  res.json({ msg: "Hello !" });
});

app.get("/", (req, res) => {
  res.json({ msg: "I've dont have data" });
  // console.log("I've recived a data");
});

app.post("/", (req, res) => {
  res.json({ msg: req.body });
  console.log("I've recived a data");
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
