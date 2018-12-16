const router = require ('express').Router();

// get users by id (email)
router.get('/:id',function(req,res) {
    const collection = req.db.collection('users');
    collection.findOne({"_id":req.params.id},function (err,user){
        if (err) {
            req.user = null;
            res.send(204);
        } else {
            req.user = user 
            res.send(200);
        }
    });
});

// get reservation for user with specified id
router.get('/:id/reservations', function(req,res) {
    req.db.collection('users').find({"_id":req.params.id}, function(err,user) {
        if (err) {
            res.send(204);
        } else {
            res.json(200, user.reservations);
        }
    });
});

// add user
router.post('/', function (req,res){
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
router.patch('/:id', function(req,res){
    req.db.collection('users').update({_id:req.params.id}, {$set:req.body}, (err,user) => {
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
router.delete('/:id', function(req,res){
    req.db.collection('users').delete({_id:req.params.id}, (err, user) => { 
        if (err) {
            // set error header
            res.send(204, "No user found with id: " + req.params.id);
        } else {
            // set success header
            res.send(200, "User successfully deleted!");
        }
    })
});

module.exports = router;