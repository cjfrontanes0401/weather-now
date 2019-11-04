const express= require("express");

const app = express();

app.git("/", function (req, res){
    res.send("Hello world");
}); 

app.listen(3000, function(){
    console.log("server is live on port: 3000");
});
