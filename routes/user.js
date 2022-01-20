const express = require("express");
const { v4: uuidv4 } = require('uuid');
const router = express.Router();


let users = [];

router.get("/", (req, res) => {
    res.send(users);

});

router.post("/", (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstname} was added to the database`)

});

router.get("/:id", (req, res) => {

    const { id } = req.params;
    const FindByid = users.find((user) => {
        if (user.id === id) {
            return (user)
        }
    })
    res.send(FindByid)
})

router.delete("/:id", (req, res) => {

    const { id } = req.params;
    users = users.filter((user) =>
        user.id !== id
    )

    res.send(`the user ${id} deleted from the database`)
})

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, anime } = req.body

    const user = users.find((user) =>
        user.id === id
    )

    if (firstname) user.firstname === firstname;
    if (lastname) user.lastname === lastname;
    if (anime) user.lastname === lastname;

    res.send(`user with id ${id} has been updated`)
})


module.exports = router;