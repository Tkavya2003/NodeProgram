import express from "express";
const app =express();
const router=express.Router();
router.get('/:id/orders', (req, res) => {
  res.send(`Orders for user with ID: ${req.params.id}`);
});
app.use('/user',router)
//http://localhost:3000/user/85/orders

app.listen(3000,()=>console.log("http://localhost:3000"))