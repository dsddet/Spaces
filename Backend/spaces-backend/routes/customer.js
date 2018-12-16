const router = require ('express').Router();

// get user by id
router.get('user/customer/:id',function(req,res) {
    req.db.collection('users').findOne({"_id":req.params.id},function (err,user){
        if (err) {
            res.send(204);
        } else {
            res.json(200, user);
        }
    });
});

// add user to database
router.post('/user/customer', function (req,res){
    req.db.collection('users').insert(req.body, (err,user) => {
        if(err) {
            // Set error header
            res.send(204);
        } else {
            // set success header
            res.send(201, "User created succesfully")
        }
    })
});

// update user information with specified id
// request should have a properly formatted user data that can be added to the database 
router.patch('user/customer/:id', function(req,res){
    req.db.collection('user').findOneAndUpdate({_id:req.params.id}, {$set:req.body}, (err,user) => {
        if (err) {
            // set error header
            res.send(204);
        } else {
            // set success header
            res.send(200, "User profile updated");
        }
    })
});

// delete user with specified id
router.delete('user/customer/:id', function(req,res){
    req.db.collection('user').findOneAndRemove({_id:req.params.id}, (err, user) => { 
        if (err) {
            // set error header
            res.send(204, "No user found with id: " + req.params.id);
        } else {
            // set success header
            res.send(200, "User successfully deleted!");
        }
    })
});

// get reservations for user with specified id
router.get('listing/customer/:id/', function (req, res) {
    req.db.collection('listing')
        .find({ "reservedBy": req.params.id })
        .toArray(function (err, reservations) {
            if (err) {
                res.send(204);
            } else {
                res.json(200, reservations);
            }
        });
});

module.exports = router;