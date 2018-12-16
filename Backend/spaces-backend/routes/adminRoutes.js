const router = require('express').Router();

//test
router.get('/test', (req, res) => {
    res.end('test');
});

//Get specific user of any role given an ID
router.get('/search/:id', (req, res) => {
    res.end('Get user by Id');
});

//Delete specific user of any role given an ID
router.delete('/users/:id', (req, res) => {
    res.end('Delete users by ID');
});

//Get listings that have not yet been approved
router.get('/listings/pending', (req, res) => {
    res.end('Get listings with pending status');
});

//Get listings that have been approved
router.get('/listings/approved', (req, res) => {
    res.end('Get listings with pending status');
});

//Update specific listing status to either approved or disapproved
router.patch('/listings/:listingId/:status', (req, res) => {
    res.end('Update status of listing item to either approved or disapproved');
});






module.exports = router;