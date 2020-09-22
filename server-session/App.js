const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Some API data");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
