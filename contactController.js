const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactmodel");
//@desc all contacts
//@route GET/api/contacts
//@access public
const getContacts = asyncHandler(async(req,res)=>
    {   
        const contacts = await Contact.find();
        res.status(200).json({contacts});
   });

   //@desc create new contact
//@route POST/api/contacts
//@access public
const createContact = asyncHandler(async(req,res)=>{
        console.log("the request body is :",req.body);
        const {name,email,phone} = req.body;
        if(!name || !email || !phone){
            res.status(400);
            throw new Error("all fields are mandatory");
        }
        res.status(201).json({message:"create contact"});
   });

    //@desc get contact
//@route GET/api/contacts/:id
//@access public
const getContact = asyncHandler(async(req,res)=>
    {res.status(200).json({message:`get contact for ${req.params.id}`});
   });

      //@desc update contact
//@route PUT/api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req,res)=>
    {res.status(200).json({message:`update contact for ${req.params.id}`});
   });
 

        //@desc delete contact
//@route DELETE/api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req,res)=>
    {res.status(200).json({message:`delete contact for ${req.params.id}`});
   });

   module.exports={
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,

};