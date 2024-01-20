const express=require("express");
const path=require("path");
const app=express();
require("./db/conn");
const Register = require ("./models/registers")
const port =process.env.PORT || 3000;
const static_path=path.join(__dirname,"../public");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");

app.get("/",(req,res) => {
    res.render("index")
});
app.get("/books",(req ,res)=>{
    res.render("books");
})

app.post("/books",async(req ,res)=>{
    try{
        const studentregister= new Register({
            Firstname:req.body.Firstname,
            Lastname:req.body.Lastname,
            Email:req.body.Email,
            password:req.body.password

        })

        const registered =await studentregister.save();
        res.status(201).render("index");
    }
    catch(error){
        res.status(400).send(error);
    }
})
app.post("/login", async(req,res)=>{
    try{
        const Email= req.body.Email;
        const password= req.body.password;
        const useremail = await Register.findOne({Email:Email});
        if(useremail.password === password){
            res.status(201).render("books");

        }
        else{
            res.send("invalid login details");
        }
    }
    catch(error){
        res.status(400).send("invalid email")
    }
})
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})