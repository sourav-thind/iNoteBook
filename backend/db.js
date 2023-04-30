const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://programmer13sourav:1234567890@cluster-notes.pmuqo0n.mongodb.net/?retryWrites=true&w=majority'
// const mongoURI = 'mongodb+srv://programmer13sourav:H@lifax13@cluster-notes.mongodb.net/test?retryWrites=true&w=majority'
//const mongoURI = 'mongodb://127.0.0.1:27017/inotebook'
mongoose.set('strictQuery', true);

const connectToMongo = async ()=>{

   mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, client)=>{
            if(err){
                console.log(err)
            }else{
          console.log("Connected to Mongo Successfully");}
    })

  
}

module.exports = connectToMongo;