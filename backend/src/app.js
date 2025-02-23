const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes')
const cors = require("cors")

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

app.use('/users', userRoutes);
app.use ('/products',productRoutes)

const PORT = process.env.PORT || 8080;

process.on("SIGTERM", () => {
    console.log("SIGTERM received. Shutting down...");
    process.exit(0);
});


app.listen(PORT, "0.0.0.0",() => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
