const { Router } = require("express");
const router = Router();

const { getUsers, createUsers, updateUsers, deleteUsers, getUser } = require('../controllers/users.controllers');

router.route("/")
.get(getUsers)
.post(createUsers)
.put(updateUsers)


router.route('/:id')
.get(getUser)
.delete(deleteUsers);


module.exports = router;
