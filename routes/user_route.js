const express = require('express')
const router = express.Router()
const User = require('../models/user_schema')
//test 
  //get
router.get('/user', async (req, res) => {
    //const users = await User.find()
    res.send('users');
})
module.exports = router;