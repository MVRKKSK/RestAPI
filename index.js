const express = require("express");
const bodyParser = require("body-Parser")
const usersRoutes = require("./routes/user.js")


const app = express();
app.use(bodyParser.json());
app.use("/users" , usersRoutes);

const PORT = 5000;



app.listen(PORT , ()=>{
    console.log("server is listening in port 5000")
})

app.get("/",(req , res)=>{
    res.send("hello iam from backend")
})