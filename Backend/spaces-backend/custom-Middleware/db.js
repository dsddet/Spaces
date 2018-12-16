const mongoClient = require('mongodb').MongoClient;

module.exports = function connect(req, res, next) {

    mongoClient.connect('mongodb+srv://bre:breSpaces@cluster0-aqbjd.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }, (err, conn) => {
        req.db = conn.db('Test').collection('test');
        next();
    })
};



