const express = require("express");
const app = express();

const PORT = 5000;

app.listen(PORT , ()=>{
    console.log("server is listening in port 5000")
})

app.get("/",(req , res)=>{
    res.send("hello iam from backend")
})