const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");

const app = express()

var corOptions = {
    origin: 'https://localhost:8081'
}



// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());
app.set('json spaces', 4);


// router
const router = require('./routes/productRoutes.js')
app.use('/api/product', router)


// testing api
app.get('/', (req, res) =>{
    res.json({message: 'hello from api'})
})

// port
const PORT = process.env.PORT || 8080

// server
app.listen(PORT, ()=>{
    console.log(`server in running on port ${PORT}`);
})