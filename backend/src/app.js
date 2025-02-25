require('dotenv').config();

const express = require('express');
// const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes')
const cors = require("cors")

// dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

app.use('/users', userRoutes);
app.use ('/products',productRoutes)

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;

// Debugging: Check if env variables are loaded
// console.log("PORT from env:", PORT);
// console.log("DATABASE_URL from env:", DATABASE_URL ? "Loaded" : "Not Loaded");
// console.log("JWT_SECRET from env:", JWT_SECRET ? "Loaded" : "Not Loaded");


process.on("SIGTERM", () => {
    console.log("SIGTERM received. Shutting down...");
    process.exit(0);
});


app.listen(PORT, "0.0.0.0",() => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
