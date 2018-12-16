const router = require ('express').Router();

// get user by id
router.get('/user/customer/:id',function(req,res) {
    req.db.collection('users').findOne({"_id":req.params.id},function (err,user){
        if (err) {
            res.json(204,err);
        } else {
            res.json(200, user);
        }
    });
});

// add user to database
router.post('/user/customer', function (req,res){
    req.db.collection('users').insert(req.body, (err,user) => {
        console.log(req.body);
        if(err) {
            // Set error header
            res.json(204,err);
        } else {
            // set success header
            res.json(201, "User created succesfully")
        }
    })
});

// update user information with specified id
// request should have a properly formatted user data that can be added to the database 
router.patch('/user/customer/:id', function(req,res){
    req.db.collection('users').findOneAndUpdate({"_id":req.params.id}, {'$set':req.body}, (err,user) => {
        console.log(user);
        if (err) {
            // set error header
            res.json(204, err);
        } else {
            // set success header
            res.json(200, user);
        }
    })
});

// delete user with specified id
router.delete('/user/customer/:id', function(req,res){
    req.db.collection('users').findOneAndDelete({_id:req.params.id}, (err, user) => { 
        if (err) {
            // set error header
            res.json(204, err);
        } else {
            // set success header
            res.json(200, "User successfully deleted!");
        }
    })
});

// get reservations for user with specified id
router.get('/listing/:customer_id/', function (req, res) {
    req.db.collection('listings')
        .find({ "ReservedBy": req.params.customer_id })
        .toArray(function (err, reservations) {
            if (err) {
                res.json(204, err);
            } else {
                res.json(200, reservations);
            }
        });
});


// reserve listing for user
router.post('/listing/reserve/:listing_id/:customer_id/', function (req, res) {
    req.db.collection('listings')
        .findOneAndUpdate({ "_id": req.params.listing_id}, {$set:{"ReservedBy":req.params.customer_id}}, (err,data) => {
            if (err) {
                res.send(204,"error adding to listing");
            } else {
                req.db.collection('user').findOneAndUpdate({"_id":req.params.customer_id}, {$addToSet:{"Reservations":req.params.listing_id}}, (err,user) => {
                    if (err) {
                        res.json(204, "error adding to user");
                    } else {
                        res.json(200,{"user":user, "data":data});
                    }
                })
            }
        });
});

module.exports = router;