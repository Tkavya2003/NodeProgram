import express from "express";
const app = express();

app.use(express.json()); // 👈 required to parse JSON

const validation = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Name is required" });
  }
  next();
};

app.post("/user", validation, (req, res) => {
  res.send(`User ${req.body.name} created`);
});

app.listen(3000, () => console.log("✅ Server running at http://localhost:3000"));
