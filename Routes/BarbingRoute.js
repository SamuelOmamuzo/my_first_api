const express = require("express");
const router = express.Router(); 
const Goodluck = require("../models/BarbingModel")
// const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "./uploads");
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    },
});

const upload = multer({storage: storage})

// to get all barbingApi
router.get("/", async (req, res) => {
    try{
    const newData = await Goodluck.find()
    res.status(200).json({
        msg: "found successfully",
        data: newData,
    })
    }catch(error){
        res.status(404).json({
            msg: "error",
            data: error
        })
    }
})

// to create all barbing api
router.post("/", upload.single("avatar"), async (req, res) => {
    try{
    const newData = await Goodluck.create({
        name: req.body.name,
        image: req.file.path,
    });
    res.status(201).json({
        msg: "created successfully",
        data: newData,
    })
    }catch(error){
        res.status(400).json({
            msg: "error",
            data: error,
        })
    }
})
 
// to delete one api 

router.delete("/:id", async (req, res)=>{
    try{
        const CustomerId = await req.params.id
        const DeletedCustomer = await Goodluck.findByIdAndDelete(CustomerId)
        res.status(200).json({message: "Deleted Successfully", data: DeletedCustomer})
    }catch(error){
        res.send(error.message)
    }

})

module.exports = router