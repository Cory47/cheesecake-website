var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    //define the json to be sent back
    const json = {
        error : null, 
        data : [
          {topping: "cherry", quantity : "2"},
          {topping: "plain", quantity : "6"},
          {topping: "chocolate", quantity : "3"}
        ]
        }
  res.send(json);
});

module.exports = router;