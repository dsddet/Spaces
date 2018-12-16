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
router.delete('/users/:id/:role', (req, res) => {
    req.db.collection('users').findOneAndDelete({
        _id: req.params.id,
        Role: req.params.role
    }, (err, user) => {
        if (err) {
            res.json(204, err);
        } else {
            res.json(200, "User successfully deleted!");
        }
    })
});

//Get listings based on status
router.get('/listings/:status', (req, res) => {
    //res.json(req.db);
    const fields = {
        projection: {
            _id: 1,
            Details: 1,
            Provider: 1,
            Status: 1
        }
    };
    const query = {
        Status: req.params.status
    };
    req.db.collection('listings').find(query, fields).toArray((err, data) => {
        if (err) res.send(204);
        //console.log(data);
        res.status(200).json(data);
    })
});

//Update specific listing status to either approved or disapproved
router.patch('/listings/:listingId/:status', (req, res) => {
    req.db.collection('listings').update({
        _id: req.params.listingId
    }, {
        '$set': {
            Status: req.params.status
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

    if (req.body.Role === "admin") {
        req.db.collection('users').insert(req.body, (err, user) => {
            if (err) {
                res.json(204, err);
            } else {
                res.json(201, {
                    Message: "Success"
                })
            }
        })
    } else {
        res.json(209, {
            Message: "Error! Check that role set to 'admin' <case sensitive>"
        })
    }
});


module.exports = router;