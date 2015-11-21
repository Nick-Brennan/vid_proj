//dependencies////////////////////
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var views = path.join(process.cwd(), "views/");

//body-parser config//////////////
app.use(bodyParser.urlencoded({extended: true}));

//path aliases////////////////////
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

/********************************
*********************************
**********   ROUTES   ***********
*********************************
********************************/

app.get('/', function(req, res){
	res.sendFile(views + "splash.html");
});

/********************************
****** START THE SERVER *********
********************************/

app.listen(process.env.PORT || 3000, function(){
	console.log("The Vid Proj Is On: " + (process.env.PORT || 3000));
});