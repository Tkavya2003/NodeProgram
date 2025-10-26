import express from 'express';
const app=express();
app.get('/shop/:category/:product', (req, res) => {
  const { category, product } = req.params;
  res.send(`Category: ${category}, Product: ${product}`);
});

app.listen(5550,()=>console.log("http://localhost:5550"))