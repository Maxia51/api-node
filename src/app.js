const express = require('express');
const app = express();
const port = 3000;
const api = express.Router();
const userController = require("./controller/userController");

// Base Route
app.use("/api", api);

// Set up Controllers

api.use("/user", userController);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));