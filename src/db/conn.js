const mongoose =require("mongoose");
mongoose.connect("mongodb://0.0.0.0/studentsignup",{
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`)
})