const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/inotebook'
mongoose.set('strictQuery', true);

const connectToMongo = async ()=>{

   mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, client)=>{
            if(err)
                console.log(err)
          console.log("Connected to Mongo Successfully");
    })

  
}

module.exports = connectToMongo;