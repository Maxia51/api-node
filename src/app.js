const express = require('express');
const app = express();
const port = 3000;
const api = express.Router();
const userController = require("./controller/userController");
const todoController = require("./controller/todoController");

// Base Route
app.use("/api", api);

// Set up Controllers

api.use("/user", userController);

api.use("/todo", todoController);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));