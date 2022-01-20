const express = require("express");
const { v4: uuidv4 } = require('uuid');
const router = express.Router();


const users = [];

router.get("/", (req, res) => {
    res.send(users);

});

router.post("/", (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstname} was added to the database`)

});

router.get("/:id" , (req,res) => {

    const { id } = req.params;
    const FindByid = users.find((user) => {
        if(user.id === id){
            return(user)
        }
    })

    res.send(FindByid)
})


module.exports = router;