const express = require("express");
const router = express.Router();

//Index Route
router.get("/" ,(req,res)=>{
    res.send("get for posts");
})
//Show
router.get("/:id" ,(req,res)=>{
    res.send("get for posts id");
})
//Post
router.post("/", (req,res)=>{
    res.send("post for posts");
})
//Delete
router.delete("/:id" , (req,res)=>{
    res.send("delete for user id");
})

module.exports = router;