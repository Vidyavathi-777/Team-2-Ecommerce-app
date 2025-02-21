// const express = require('express')

// const app = express();

// app.use(express.json())

// module.exports = app

// const app = require('./app')
// const dotenv = require('dotenv')

// dotenv.config()

// const PORT = 3000

// app.listen(PORT,() =>{
//     console.log(`Server is running on http://localhost:${PORT}`)
// });

const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(express.json())

const userRoutes = require('./routes/userRoutes')

app.use('/users',userRoutes)

const PORT  = process.env.PORT || 3000

app.listen(PORT,() =>{
    console.log(`Server is running on http://localhost:${PORT}`);

})

module.exports = app