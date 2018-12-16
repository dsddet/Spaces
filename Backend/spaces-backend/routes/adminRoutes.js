const router = require('express').Router();

//Get specific user of any role given an ID
router.get('/users/:id', (req, res) => {
    req.db.collection('users').findOne({
        "_id": req.params.id
    }, function (err, user) {
        if (err) {
            res.json(204, err);
        } else {
            res.json(200, user);
        }
    });
});

//Delete specific user of any role given an ID
router.delete('/users/:id', (req, res) => {
    req.db.collection('users').findOneAndDelete({
        _id: req.params.id
    }, (err, user) => {
        if (err) {
            res.json(204, err);
        } else {
            res.json(200, "User successfully deleted!");
        }
    })
});

//Get listings that have not yet been approved
router.get('/listings/pending', (req, res) => {
    req.db.collection('listings').find({
        status: "notapproved"
    }).toArray((err, data) => {
        if (err) res.send(204);
        res.status(200).json(data);
    })
});

//Get listings that have been approved
router.get('/listings/approved', (req, res) => {
    req.db.collection('listings').find({
        status: "approved"
    }).toArray((err, data) => {
        if (err) res.send(204);
        res.status(200).json(data);
    })
});

//Update specific listing status to either approved or disapproved
router.patch('/listings/:listingId/:status', (req, res) => {
    req.db.collection('listings').update({
        _id: req.params.listingId
    }, {
        '$set': {
            status: req.params.status
        }
    }, (err, updated) => {
        if (err) res.send(204);
        res.status(201).json({
            'success': 'ok'
        });
    });

});

// add admin user
router.post('/users/', function (req, res) {
    req.db.collection('users').insert(req.body, (err, user) => {
        if (err) {
            res.json(204, err);
        } else {
            res.json(201, {Message:"Success"})
        }
    })
});


module.exports = router;