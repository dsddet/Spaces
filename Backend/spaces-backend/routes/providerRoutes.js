const router = require('express').Router();

// fetches list of listing for a specific provider
router.get('/listings/:provider_id',(req,res)=>{
    req.db.collection('listings').find({"Provider":req.params.provider_id})
            .toArray((err,docs)=>{
                if(err) res.send(204);
                    res.status(200).json(docs);
            });
});

router.get('/listing/:listing_id',(req,res) =>{
    req.db.collection('listings').findOne({"_id":req.params.listing_id}, (err,docs)=>{
        if (err) res.json(204,err);
            res.status(200).json(docs);
    });
});

router.post('/listings',(req,res)=>{
    req.db.collection('listings').insert(req.body, (err, data)=>{ 
        if(err) res.send(204);
            res.status(203).json({ok:true});
    });
});

router.delete('/delete/:list_id', (req,res)=>{
    req.db.collection('listings').remove({"_id":req.params.list_id}, (err)=>{
        if(err) res.send(204);
            res.status(200).json({ok:true});
    });
});

router.put('/put/:list_id',(req,res)=>{
    req.db.collection('listings').findOneAndUpdate({"_id":req.params.list_id},{'$set':req.body},(err,updated)=>{
        if(err) res.sendStatus(204);
            res.status(201).json({'success':'ok'});
    });
});
module.exports = router;