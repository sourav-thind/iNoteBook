const mongoose = require('mongoose');

//const mongoURI = 'mongodb://127.0.0.1:27017/inotebook'
const mongoURI = 'mongodb+srv://programmer13sourav:H@lifax13@cluster-notes.pmuqo0n.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', true);

const connectToMongo = async ()=>{

   mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, client)=>{
            if(err)
                console.log(err)
          console.log("Connected to Mongo Successfully");
    })

  
}

module.exports = connectToMongo;