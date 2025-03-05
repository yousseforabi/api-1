const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.send({pets: ["dog", "cat", "bird"]});
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

