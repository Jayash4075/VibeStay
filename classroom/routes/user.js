const express = require("express");
const router = express.Router();
const app = express();

//Index Route
router.get("/" ,(req,res)=>{
    res.send("get for users");
})
//Show
router.get("/:id" ,(req,res)=>{
    res.send("get for user id");
})
//Post
router.post("/", (req,res)=>{
    res.send("post for users");
})
//Delete
router.delete("/:id" , (req,res)=>{
    res.send("delete for user id");
})

module.exports = router;