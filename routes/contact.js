const { Router } = require("express");
const express=require("express");
const { Error } = require("mongoose");
const route=express.Router()
const Contact=require("../models/Contact")
/*route.get("/",(req,res)=>{
    res.send("test")
});
//post
route.post("/add",(req,res)=>{
    const{name,email,phone}=req.body
    const newContact=new Contact({
        name,
        email,
        phone,
    })
    newContact.save()
    .then(contact=>res.json({
        msg:"contact added", contact 
    }))
    .catch(error=>console.log(error))
}
)*/
route.post("/add",async(req,res)=>{
    const{name,email,phone}=req.body;
    try {
        const newContact=new Contact({
            name,
            email,
            phone,
        });
       const contact= await newContact.save() 
       res.json({msg:"contact is added", contact})
    } catch (error) { console.log(error)}
   
})
//get
route.get("/",async(req,res)=>{
   try {
      const contacts= await Contact.find()
      res.json({msg:"data mentionned", contacts})
   } catch (error) {console.log(error)
       
   }
});
//delete
route.delete("/delete/:id", async(req,res)=>{    
        const {id}=req.params;
    try {
const contact=await Contact.findOneAndDelete(_id=id);
res.json({msg:"contact is deleted", contact})
        } catch (error) {
            console.log(error)
        
    }
}
)
//get contact by id
route.get("/:_id", async(req,res)=>{
    const {_id}=req.params;
try {
    const contact=await Contact.findById(_id);
    res.json({msg:"feched contact", contact});
} catch (error) {console.log(error)}
}
)
//edit

route.put("/edit/:_id", async (req, res)=>{
    const{_id}=req.params;
    try {
        const editConatct=await Contact.findOneAndUpdate({_id},{$set:req.body})
        res.json({msg:"contact edited", editConatct});
    } catch (error) { console.log(error)}

})

module.exports=route
