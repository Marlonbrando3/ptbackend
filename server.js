const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ msg: "Hello !" });
});

app.post("/api/home", (req, res) => {
  res.json({ msg: "Hello !" });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
