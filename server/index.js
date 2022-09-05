const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log("Server running on PORT 8000");
});
