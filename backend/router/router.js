var express = require('express');
var router = express.Router(); //middleware-Router


const item = require('../model/item') //creating schema

router.get('/', function (req, res) {
    res.send(' In different router module ');
});

// To post data into mongodb------------------------------------------------
router.post('/item', (req, res, next) => {

    newitem = new item({

        itemname : req.body.itemname,
        itemquantity : req.body.itemquantity,
        itembought : req.body.itembought

    }); //itemclose

    newitem.save((err, item) => {
    if (err) {
        res.json(err);
    }
    else {
        res.json({ msg: 'inserted' });
    }
});
}); //post close


// To get the data-------------------------------------------------
router.get('/item' , (req, res,next)=>
{
item.find((err,data)=>
{

 if(err)
 
//  return res.status(500).send(err);
//  return res.status(200).send(data);

return res.send(err);
return res.send(data);
});
});

//Deleting the data-----------------------------------------------------
router.delete('/item/:quantity', (req, res, next) =>
 {
    var quantityreq = req.params.quantity.toString();
    item.deleteMany({ itemquantity: quantityreq }, (err, data) => {

        if (err)

            return res.status(500).send(err);
            return res.status(200).send(data);


    });

});
module.exports = router;