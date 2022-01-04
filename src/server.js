const app = require("./index")

const connect = require("./configs/db")



app.listen(2345,async(req,res)=>{
    try{
        await connect()
        console.log("listening port from 2345");
    }catch(err){
        console.log(err.message);
    }
    
})