const mongoose=require("mongoose");

const studentSchema =new mongoose.Schema({
    Firstname: {
        type:String,
        required:true
    },

    Lastname: {
        type:String,
        required:true
    },

    Email: {
        type:String,
        required:true,
        unique:true
    },

    password: {
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register",studentSchema);
module.exports = Register;