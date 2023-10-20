const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let reqBody = "Nothing..";

app.get("/", (req, res) => {
  res.json({ msg: "I've dont have data" });
});

app.get("/ver", (req, res) => {
  res.json({ msg: reqBody });
  // console.log("I've recived a data");
});

app.post("/", (req, res) => {
  reqBody = req.body;
  res.json({ msg: " Works" });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
