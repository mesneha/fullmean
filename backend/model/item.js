const mongoose = require('mongoose');

const itemschema = mongoose.Schema(
{
    itemname : {
        type:String,
        required:false,
    },
    itemquantity: {
        type:Number,
        required:false,
    },
    itembought : {
        type: Boolean,
        required:false,
    },
});

const items = module.exports=mongoose.model('items',itemschema);