const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.send("Backend is running fine 🚀");
});

// Sample API for frontend
app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from Node.js backend 👋"
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
