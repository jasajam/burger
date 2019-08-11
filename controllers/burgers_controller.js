var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        // not liked code for handling an error here...
        // if (err) {
        //     return res.status(501).json({
        //         message: 'Not able to query db'
        //     });
        // }

        var hbsObject = {
            burgers: data
        };
        console.log(data);
        res.render("index", hbsObject);  
        // , data
    });
});

router.post("/api/burgers", function(req, res) {
    burgers.insertOne(["burger_name"], [req.body.name], function(result) {
        res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.updateOne(
        {devoured: true}, condition, 
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});



module.exports = router;