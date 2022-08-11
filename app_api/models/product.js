const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  src: { type: String, required: true }
});

const productSchema = new mongoose.Schema({
          name:{
                type: String,
                required: true
             },
          category:{
                type: String,
                required: true
             },
          price:{
                type:String,
                required: true
            },
          images: [imageSchema],
          description:String,
          seller:{
            type: String,
            required:true
          },
          available:{
            type: Boolean,
            required:true
          } 
}); 



 

mongoose.model('products',productSchema);