const mongoose=require('mongoose');
const config=require('config');
/*const connectDb=()=>{
    mongoose.connect(config.get("MONGO_URI"),{ useNewUrlParser: true,  useUnifiedTopology: true  })
.then(()=> console.log("mongoose is connected "))
.catch(()=>console.log("error"))
}*/

const connectDb=async()=>{
    try{
        await mongoose.connect(config.get("MONGO_URI"),
        { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true })
        console.log("mongoose is connected ")
    } catch (error) { console.log(error)
}
}

module.exports=connectDb;