const express=require("express");
const app=express();
const port=3000;
const qr=require("qrcode");
const BodyParser=require("body-parser");
app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());
app.set("view engine","ejs");



app.get("/",function(req,res){ 
    res.render("index");

});

app.post("/scan",function(req,res){ 
    const url=req.body.url;
    if(url.length === 0){ 
        res.send("Empty Data!");
    }
    qr.toDataURL(url,function(err,src){ 
        if(err){ 
            res.send("Error Occured!");
        }
        else{ 
            res.render("scan",{source: src});
        }
    });
});

app.listen(port,function(){ 
    console.log("The server is listening at port 3000");
});