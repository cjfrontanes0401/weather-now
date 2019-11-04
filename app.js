const express= require("express");

const app = express();

//setting view engine
app.set("view engine", "ejs");

/*
    ROUTES
*/

// GET //
app.git("/", function (req, res){
    res.render("home.ejs");
}); 

app.listen(3000, function(){
    console.log("server is live on port: 3000");
});
