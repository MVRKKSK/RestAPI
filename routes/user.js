const express = require("express");
const router = express.Router();


const users = [
    {
        firstname: "uzumaki",
        lastname: "naruto",
        age: 30
    }
]

router.get("/" , (req,res) => {
    res.send(users);

});

router.post("/" , (req,res)=>{
    const user = req.body;
    users.push(user);
    res.send(`User with the name ${user.firstname} was added to the database`)

});


module.exports = router;