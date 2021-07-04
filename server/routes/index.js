const express = require('express');
const router = express.Router();
const database = require('./firebase/config');

// Express connection Test
router.get('/', function(req, res){
    res.send({greeting:'Hello React x Node.js'});
});

// CREATE, INSERT, UPDATE
router.get('/save', function(req, res){
    database.ref('customer').set({name : "daehyun"}, function(error) {
        if(error)
            console.error(error)
        else
            console.log("success save !!");
    });
    return res.json({firebase : true});
});

// READ
router.get('/getter', function(req, res){
    database.ref('customer').on('value', (snapshot) => {
        console.log(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
    });
  return res.json({firebase : true});
});



module.exports = router;