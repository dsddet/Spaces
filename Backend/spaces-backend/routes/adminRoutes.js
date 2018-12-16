const router = require('express').Router();

//test
router.get('/test', (req, res) => {
    res.end('test');
})

//Get specific user
router.get('/users/:id', (req, res) => {
    res.end('Get user by Id');
})




module.exports = router;