const router = require('express').Router();

router.get('/lists/:provider_id',(req,res)=>{
    var provider_id = req.params._id;
    req.db.collection('listing').find({"provider":provider_id})
            .toArray((err,docs)=>{
                if(err) res.send(204);
                    res.status(200).json(docs);
            });
});

router.post('/',(req,res)=>{
    req.db.collection('listing').insert(req.body, (err, data)=>{ 
        if(err) res.send(204);
            res.status(203).json({ok:true});
    });
});

router.delete('/:list_id', (req,res)=>{
    req.db.collection('listing').remove({_id:req.params._id}, (err)=>{
        if(err) res.send(204);
            res.status(200).json({ok:true});
    });
});

router.patch('/:list_id', (req,res)=>{
    req.db.collection('listing').update({_id:req.params._id},{'$set':req.body},(err,updated)=>{
        if(err) res.send(204);
            res.status(201).json({'success':'ok'});
    });
});
module.exports = router;