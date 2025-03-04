const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Import Routes
const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
