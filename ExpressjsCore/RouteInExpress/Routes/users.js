import express from 'express';
const router=express.Router();
router.get('/',(req,res)=>{
    res.send("list all the user")
})
router.post('/',(req,res)=>{
    res.send("add all user")
})
router.get('/:id',(req,res)=>{
    res.send(`Get user with id : ${req.params.id}`)
})
export default router;