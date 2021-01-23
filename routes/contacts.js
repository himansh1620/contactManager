const express = require('express')
const router = express.Router()

// get all user contacts (private) - GET api/contacts
router.get('/', (req, res) => {
    res.send('get all contacts')
})

// add new contact (private) - POST api/contacts
router.post('/', (req, res) => {
    res.send('add contact')
})

// update contact (private) - GET api/contacts/:id
router.put('/:id', (req, res) => {
    res.send('update contact')
})

// delete a contact (private) - POST api/contacts/:id
router.delete('/:id', (req, res) => {
    res.send('delete contact')
})

module.exports = router;