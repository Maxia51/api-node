const express = require("express");
const router = express.Router();

// All User Route

router.get('/', (req, res) => {

    res.writeHead(200);
    res.end("users");

});

module.exports = router; 