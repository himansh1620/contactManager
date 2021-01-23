const express = require('express')
const router = express.Router()

// get logged in user (private) - GET api/auth
router.get('/', (req, res) => {
    res.send('get logged in user')
})

// auth user & get token (public) - POST api/auth
router.post('/', (req, res) => {
    res.send('get logged in user')
})

module.exports = router;