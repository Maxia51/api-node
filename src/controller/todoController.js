const express = require("express");
const router = express.Router();
const http = require("http");

// All User Route

router.get('/', (req, res) => {

    try{

        getTodo("http://jsonplaceholder.typicode.com/todos", (response) => {

            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);

            res.end(response);

        });

    } catch (err) {
        res.writeHead(500);
        res.end();
    }

});

router.get('/:id', (req, res) => {

    try{

        getTodo("http://jsonplaceholder.typicode.com/todos/"+req.params.id, (response) => {

            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);

            res.end(response);

        });

    } catch (err) {
        res.writeHead(500);
        res.end();
    }

})

/**
 * 
 * @param {string} url url to call
 * @param {function} callback(response) json response stringified 
 */
function getTodo(url, callback){

    http.get(url, (response) => {

        let body = '';

        response.on('data', function(chunk){
            body += chunk;
        });
    
        response.on('end', function(){
            
            callback(JSON.stringify(JSON.parse(body)));

        });

        return body;

    }).on('error', (err) => {
        if (err) throw err;
    })

}

module.exports = router; 