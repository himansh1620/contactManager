const express = require('express')
const router = express.Router()

// register a user (public)
router.post('/', (req, res) => {
    res.send('Register a user')
})

module.exports = router;