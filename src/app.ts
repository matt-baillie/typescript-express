import express from "express";
const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log("Server running"));
