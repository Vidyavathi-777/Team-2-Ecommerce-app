const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const cors = require("cors")

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

app.use('/users', userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0",() => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

module.exports = app;
