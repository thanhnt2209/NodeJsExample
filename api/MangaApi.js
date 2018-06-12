var express = require("express");

var app = express();
var bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var request = {

    createPost: function(client){

        var port = process.env.PORT || 8000;
        var router = express.Router();

        router.post('/', function (req, res) {
            var username = req.body.name;
            var db = client.db("test");
            var collection = db.collection("user");

            collection.findOne({name: username}).then(function (data) {
                console.log(data);
            });
        })

        app.use("/api", router);
        app.listen(port);
    }
}


module.exports = request;






