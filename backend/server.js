require("dotenv").config();

const express = require("express");
const connectDb = require("./dbconnection");
const Contact = require("./contactModel");

connectDb();
const app = express();

app.get("/",(req,res) => {
    res.send("hello ji");
});

app.post("/", async(req,res) => {
    try{
        const data = new Contact({
            email : req.body.email,
            message : req.body.message
        })
        const datafilled = await data.save()
        .then(() => {
            console.log("successfully added data!");
        })
        console.log(datafilled);
    } catch(error){
        res.status(400).send(error);
    }
});

// for deployment on heroku
// if(process.env.NODE_ENV === "production")
// {
//     app.use(express.static("client/build"));
//     const path = require("path");
//     app.get("*",(req,res) =>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     })
// } 



port = process.env.PORT;

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});