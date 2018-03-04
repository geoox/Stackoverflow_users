var express=require('express');
var app=express();
var request=require('request');

//routing with request npm

app.get("/",function(req,res){
    request("http://www.json-generator.com/api/json/get/bVgOzSnTci?indent=2",function(error,request,body){
        if(error){
			console.log('error:', error); // Print the error if one occurred
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		}
		else{
			var results=JSON.parse(body);
			var items=results["items"];
			res.render("index.ejs",{items: items});
		}
    })
})


app.listen(3000,function(){
	console.log("Server has started...");
});