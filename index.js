const express = require("express");
const http = require("http");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const app = express();
const PORT = 8080;
const cors = require("cors");

// const p24 = http.createClient(80, 'https://sandbox.przelewy24.pl/api/v1/testAccess')
// const hash = crypto.createHash("sha384");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let merchantId = 27407;
let sessionId = bcrypt.hash("895043jrifokds", 10);
let amount = 2500;
let currency = "PLN";
let api = "1b647ca2cb4ddb4fafcd7683fc40fba6";
let crc = "fccb3ef343fe113a";

app.get("/", (req, res) => {
  res.json({ msg: "I've dont have data" });
  // console.log("I've recived a data");
  querySign();
});

app.post("/", async (req, res) => {
  // const testAcces = p24.reqest("GET","/"{
  //   'host':'`'
  // })
  // const DatCRC =
  //   await `{"sessionId":"${sessionId}","merchantId":${merchantId},"amount":${amount},"currency":"${currency}","crc":"${crc}"}`;
  // const data = await hash.update(DatCRC, "utf-8");
  // const genhash = data.digest("hex");
  res.json({ msg: genhash });
  // console.log(genhash);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
